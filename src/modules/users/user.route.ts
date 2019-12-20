import { ValidationSchema, checkSchema } from 'express-validator/check';
import { Request, Response } from 'express';
import { Route } from '../../core/route';
import { UserController } from './user.controller';
import { Roles } from '../../enums';

export class UserRoute extends Route {

  private readonly endpoint;
  private readonly controller = new UserController();

  constructor(endpoint:string = 'user') {
    super();
    this.endpoint = endpoint;
  }

  public routing(app):void {

    app.route(`/${this.endpoint}`)
      .get((rq:Request, rs:Response) =>  { /* return logged user */
        this.controller.logged(rq, rs).then(() => this.controller.get(rq, rs));
      })
      .post(checkSchema(this.signinSchema()), this.validation, (rq:Request, rs:Response) => { /* Sign in */
        this.controller.blurPassword(rq, rs);
        this.controller.create(rq, rs);
      });

    app.route(`/${this.endpoint}/:user_id`)
      .get((rq:Request, rs:Response) => { /* Return user */
        this.controller.logged(rq, rs, Roles.Staff).then(() => this.controller.get(rq, rs));
      })
      .delete((rq:Request, rs:Response) => { /* Delete user */
        this.controller.logged(rq, rs, Roles.Admin).then(() => this.notImplemented(rs, 'Should remove the user'));
      });

    app.route(`/profile`)
      .put(checkSchema(this.profileSchema()), this.validation, (rq:Request, rs:Response) => {
        this.controller.logged(rq, rs).then(() => this.controller.updateProfile(rq, rs));
      });
  }

  private signinSchema():ValidationSchema {
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

  private profileSchema():ValidationSchema {
    return {
      firstname: {
        errorMessage: 'Invalid firstname',
        in: ['body'],
        isAlpha: true,
        optional: true,
      },
      lastname: {
        errorMessage: 'Invalid lastname',
        in: ['body'],
        isAlpha: true,
        optional: true,
      },
      email: {
        errorMessage: 'Invalid email',
        in: ['body'],
        isEmail: true,
        optional: true,
      },
      phone_number: {
        errorMessage: 'Invalid phone',
        in: ['body'],
        optional: true,
      }
    };
  }

}
