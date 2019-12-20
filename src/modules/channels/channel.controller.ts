import { BaseController } from '../../core/controller';
import { ChannelService } from './channel.service';
import { Request, Response } from 'express';

export class ChannelController extends BaseController {

  private channelService:ChannelService = new ChannelService();

  constructor() {
    super();
  }

  public list(rq:Request, rs:Response):Promise<Response> {
    return this.raDataQuery(rq, rs, this.channelService.list(this.loggedUser));
  }

  public async read(rq:Request, rs:Response, fromMessageId?:number):Promise<Response> {
    const channel = await this.channelService.get(rq.params.id, this.loggedUser);
    if (!channel) {
      return this.raUndefined(rq, rs);
    }
    return this.raDataQuery(rq, rs, this.channelService.read(this.loggedUser, channel, fromMessageId));
  }

  public async post(rq:Request, rs:Response):Promise<Response> {
    const channel = await this.channelService.get(rq.params.id, this.loggedUser);
    if (!channel) {
      return this.raUndefined(rq, rs);
    }
    return this.raDataQuery(rq, rs, this.channelService.writeMessage(this.loggedUser, channel, rq.body.content));
  }

  public pull(rq:Request, rs:Response):Promise<Response> {
    return this.raError(rq, rs, 'Not Ready');
  }

}
