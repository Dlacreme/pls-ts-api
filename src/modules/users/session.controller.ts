import { Request, Response } from 'express';
import { BaseController } from '../../core/controller';
import { User } from '../../models/user';

export class SessionController extends BaseController {

  constructor() {
    super();
  }

  public async logIn(rq:Request, rs:Response):Promise<Response> {

    const user = await this.db()
      .getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role_', 'role_')
      .leftJoinAndSelect('user.profile_', 'profile_')
      .where('lower(user.email) = lower(:email) AND password = :password', {email: rq.body.email, password: rq.body.password})
      .getOne();

    if (!user) {
      return this.raUnthorized(rq, rs);
    }

    delete user.password;

    return this.raData(rq, rs, {
      user: user,
      token: this.sessionService.buildToken(user)
    });
  }

}
