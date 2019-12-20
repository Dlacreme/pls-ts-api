import { ValidationSchema, checkSchema } from 'express-validator/check';
import { Response, Request } from 'express';
import { Route } from '../../core/route';
import { CompanyController } from './company.controller';
import { Roles } from '../../enums';

export class CompanyRoute extends Route {

  private readonly endpoint;
  private readonly controller = new CompanyController;

  constructor(endpoint:string = 'company') {
    super();
    this.endpoint = endpoint;
  }

  public routing(app):void {
    app.route(`/${this.endpoint}`)
      .get((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs, Roles.Staff).then(() => this.controller.get(rq, rs));
      })
      .post(checkSchema(this.companySchema()), this.validation, (rq:Request, rs:Response) => {
        this.controller.logged(rq, rs).then(() => this.controller.create(rq, rs));
      })
      .put(checkSchema(this.companySchema()), this.validation, (rq:Request, rs:Response) => {
        this.controller.logged(rq, rs).then(() => this.controller.update(rq, rs));
      });

    app.route(`/${this.endpoint}/:company_id`)
      .get((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs, Roles.Staff).then(() => this.controller.get(rq, rs));
      });

    app.route(`/${this.endpoint}_list`)
      .get((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs, Roles.Admin).then(() => this.controller.list(rq, rs));
      });

    app.route(`/${this.endpoint}/:company_id/join/:user_id`)
      .post((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs, Roles.Client).then(() => this.controller.join(rq, rs));
      })
      .delete((rq:Request, rs:Response) => {
        this.controller.logged(rq, rs, Roles.Client).then(() => this.controller.leave(rq, rs));
      });

  }

  private companySchema():ValidationSchema {
    return {
      label: {
        errorMessage: 'label is missing',
        in: ['body']
      }
    };
  }

}
