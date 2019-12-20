import { Route } from '../../core/route';
import { Request, Response } from 'express';
import { GetterController } from './getter.controller';

export class GetterRoute extends Route {


  private readonly controller = new GetterController();

  constructor() {
    super();
  }

  public routing(app):void {

    app.route('/categories').get((rq:Request, rs:Response) => {
      this.controller.getCategories(rq, rs);
    });

    app.route('/notifications').get((rq:Request, rs:Response) => {
      this.controller.logged(rq, rs).then(() => this.controller.notifications(rq, rs));
    });

  }


}
