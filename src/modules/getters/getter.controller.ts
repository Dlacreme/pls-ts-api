import { BaseController } from '../../core/controller';
import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { EventCategory } from '../../models/event_category';
import { Notification } from '../../models/notification';
import { ChannelService } from '../../modules/channels/channel.service';

export class GetterController extends BaseController {

  private channelService:ChannelService;

  constructor() {
    super();
    this.channelService = new ChannelService();
  }

  public getCategories(rq:Request, rs:Response):Promise<Response> {
    return this.raDataQuery(rq, rs,
      getConnection().getRepository(EventCategory)
        .createQueryBuilder('category')
        .where(`category.is_disabled = 'f'`)
        .getMany()
    );
  }

  public async notifications(rq:Request, rs:Response):Promise<Response> {
    const channels = await this.channelService.list(this.loggedUser);
    if (!channels || channels.length === 0) {
      return this.raData(rq, rs, []);
    }
    return this.raDataQuery(rq, rs,
      getConnection().getRepository(Notification)
        .createQueryBuilder('notification')
        .where('notification.channel_id IN (:...chan_ids)', {chan_ids: channels
          .filter((x) => x.id !== undefined)
          .map((x) => parseInt((x.id as any).toString(), 10))})
        .limit(50)
        .getMany()
    );
  }

}
