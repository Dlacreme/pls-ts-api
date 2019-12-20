import { Request, Response } from 'express';
import { ValidationSchema, checkSchema } from 'express-validator/check';
import { Route } from '../../core/route';
import { SessionController } from './session.controller';

export class SessionRoute extends Route {

  private readonly endpoint;
  private readonly controller = new SessionController();

  constructor(endpoint:string = 'session') {
    super();
    this.endpoint = endpoint;
  }

  public routing(app):void {
    app.route(`/login`) /* Login */
      .post(checkSchema(this.loginSchema()), this.validation, (rq:Request, rs:Response) => {
        this.controller.blurPassword(rq, rs);
        this.controller.logIn(rq, rs);
      });
  }

  private loginSchema():ValidationSchema {
    return {
      email: {
        errorMessage: 'email is invalid or missing',
        in: ['body'],
        isEmail: true,
      },
      password: {
        errorMessage: 'password is invalid or missing',
        in: ['body'],
      }
    };
  }

}
