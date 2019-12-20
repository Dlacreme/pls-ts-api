import { Channel } from '../../models/channel';
import { getConnection } from 'typeorm';
import { User } from '../../models/user';
import { Roles } from '../../enums';
import { Message } from '../../models/message';
import { Event } from '../../models/event';
import { NotificationService } from '../../services/notification.service';

export interface IChannel {
  id?:number;
  messages:Message[];
  event_:Event;
}

export class ChannelService {

  private notificationService:NotificationService;

  private readonly messagePageSize = 10;

  constructor() {
    this.notificationService = new NotificationService();
  }

  public async get(channelId:number, user:User):Promise<Channel|undefined> {
    let q = getConnection().getRepository(Channel)
      .createQueryBuilder('channel')
      .leftJoin('channel.events', 'event_')
      .leftJoin('event_.members', 'event_member_')
      .where(`event_member_.user_id = :id AND event_member_.is_disabled = 'f'`, {id: user.id})
      .andWhere(`event_.is_disabled = 'f' AND date(event_.start_date) >= date(now())`);

    if (user.role_id !== Roles.Admin) {
      q = q.andWhere(`channel.id = :channel_id`, {channel_id: channelId});
    }

    return await q.getOne();
  }

  public async list(user:User):Promise<IChannel[]> {
    const channel = await getConnection().getRepository(Channel)
      .createQueryBuilder('channel')
      .leftJoinAndSelect('channel.events', 'event_')
      .leftJoin('event_.members', 'event_member_')
      .where(`event_member_.user_id = :id AND event_member_.is_disabled = 'f'`, {id: user.id})
      .andWhere(`event_.is_disabled = 'f' AND date(event_.start_date) >= date(now())`)
      .getMany();

    return channel.map((x) => {
      return {
        id: x.id,
        messages: x.messages,
        event_: x.events[0]
      };
    });
  }

  public async writeMessage(user:User, channel:Channel, content:string):Promise<Message> {
    const message = new Message();
    message.channel_ = channel;
    message.user_ = user;
    message.created_at = new Date();
    message.content = content;
    this.notificationService.postMessage(channel, user);
    return await getConnection().getRepository(Message).save(message);
  }

  public async read(user:User, channel:Channel, fromMessageId?:number):Promise<Message[]> {

    let q = getConnection().getRepository(Message)
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.user_', 'user_')
      .leftJoinAndSelect('user_.profile_', 'user_profile_')
      .leftJoin('message.channel_', 'channel_')
      .where('channel_.id = :channel_id', {channel_id: channel.id});

    if (fromMessageId) {
      const skippableCount = await getConnection().getRepository(Message)
        .createQueryBuilder('message')
        .orderBy('message.id', 'DESC')
        .where('message.id < :id', {id: fromMessageId})
        .getCount();
      q = q.skip(skippableCount);
    }

    q = q.orderBy('message.created_at', 'DESC')
      .take(this.messagePageSize);

    return q.getMany();
  }

}
