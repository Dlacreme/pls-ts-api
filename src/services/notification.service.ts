import { Event } from '../models/event';
import { User } from '../models/user';
import { Channel } from '../models/channel';
import { getConnection } from 'typeorm';
import { Profile } from '../models/profile';
import * as pusher from 'pusher';
import { Notification } from '../models/notification';

enum NotificationType {
  General = 'general',
  Alert = 'alert'
}

interface Notif {
  type:NotificationType;
  key:string;
  data:any;
}

interface JoinNotif extends Notif {
  data: {
    userName:string;
    eventName:string;
  };
}

export class NotificationService {

  private pusher:any;

  constructor() {
    this.pusher = new pusher({
      appId: '744604',
      key: '61d936b85a6e184c23d7',
      secret: '7b443feef992a838c313',
      cluster: 'ap1',
      useTLS: false
    });
  }

  public async postMessage(channel:Channel, user:User):Promise<Notification|undefined> {
    return undefined;
  }

  public async joinEvent(event:Event, user:User):Promise<Notification|undefined> {
    const profile = user.profile_ ? user.profile_ : await this.getProfile(user.profile_id);
    const channel = event.channel_ ? event.channel_ : await this.getChannel(event.channel_id);
    if (!profile || !channel) {
      return undefined;
    }

    return this.writeNotification(channel, {
      type: NotificationType.General,
      key: 'EVENT_JOIN',
      data: {
        userName: `${profile.firstname} ${profile.lastname}`,
        eventName: event.label
      }
    });
  }

  public async leaveEvent(event:Event, user:User):Promise<Notification|undefined> {
    const profile = user.profile_ ? user.profile_ : await this.getProfile(user.profile_id);
    const channel = event.channel_ ? event.channel_ : await this.getChannel(event.channel_id);
    if (!profile || !channel) {
      return undefined;
    }

    return this.writeNotification(channel, {
      type: NotificationType.General,
      key: 'EVENT_LEAVE',
      data: {
        userName: `${profile.firstname} ${profile.lastname}`,
        eventName: event.label
      }
    });
  }

  private async writeNotification(channel:Channel, notif:Notif):Promise<Notification|undefined> {
    this.pusher.trigger(channel.id.toString(), notif.type, notif);
    return getConnection().getRepository(Notification).save(
      this.toNotification(channel, notif)
    );
  }

  private async getProfile(profileId:number):Promise<Profile|undefined> {
    return getConnection().getRepository(Profile).createQueryBuilder('profile').where('profile.id = :id', {id: profileId}).getOne();
  }

  private async getChannel(channelId:number):Promise<Channel|undefined> {
    return getConnection().getRepository(Channel).createQueryBuilder('channel').where('channel.id = :id', {id: channelId}).getOne();
  }

  private toNotification(channel:Channel, notif:Notif):Notification {
    const r = new Notification();
    r.type = notif.type;
    r.key = notif.key;
    r.created_at = new Date();
    r.channel_ = channel;
    if (notif.data) {
      r.data = JSON.stringify(notif.data);
    }
    return r;
  }

}
