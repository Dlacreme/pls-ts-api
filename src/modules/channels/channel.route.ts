import { Route } from '../../core/route';
import { ChannelController } from './channel.controller';
import { Request, Response } from 'express';

export class ChannelRoute extends Route {

  private readonly endpoint;
  private readonly controller = new ChannelController();

  constructor(endpoint:string = 'chat') {
    super();
    this.endpoint = endpoint;
  }

  public routing(app):void {

    app.route(`/${this.endpoint}`)
      .get((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs).then(() => this.controller.list(rq, rs));
      });

    app.route(`/${this.endpoint}/pull`)
      .get((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs).then(() => this.controller.pull(rq, rs));
      });

    app.route(`/${this.endpoint}/:id`)
      .get((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs).then(() => this.controller.read(rq, rs));
      })
      .post((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs).then(() => this.controller.post(rq, rs));
      });

    app.route(`/${this.endpoint}/:id/:message_id`)
      .get((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs).then(() => this.controller.read(rq, rs, rq.params.message_id));
      });

  }

}
