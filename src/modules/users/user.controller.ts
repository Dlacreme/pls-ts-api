import { Request, Response } from 'express';
import { BaseController } from '../../core/controller';
import { User } from '../../models/user';
import { Errors } from '../../errors';
import { ModelService } from '../../services/model.service';
import { Profile } from '../../models/profile';
import { Roles } from '../../enums';
import { getConnection } from 'typeorm';

export class UserController extends BaseController {

  constructor() {
    super();
  }

  public get(rq:Request, rs:Response):Promise<Response> {
    return this.raDataQuery(rq, rs, this.userService.find(rq.params.user_id || this.loggedUser.id));
  }

  public async create(rq:Request, rs:Response):Promise<Response> {
    const users = this.db().getRepository(User);

    if (await this.userService.findByEmail(rq.body.email)) {
      return this.raInvalid(rq, rs, Errors.signin.duplicate);
    }


    const user = this.buildUser(rq.body.email, rq.body.password);
    const userErrors = await ModelService.validate(user);
    if (userErrors) {
      return this.raInvalid(rq, rs, userErrors);
    }
    const profile = new Profile();
    const savedProfile = await getConnection().getRepository(Profile).save(profile);
    user.profile_id = savedProfile.id;
    const savedUser = await users.save(user);

    return this.raDataQuery(rq, rs, this.userService.find(savedUser.id));
  }

  public async updateProfile(rq:Request, rs:Response):Promise<Response> {
    const profile = this.buildProfile(rq);
    try {
      return this.raDataQuery(rq, rs, this.userService.updateUserProfile(this.loggedUser, profile));
    } catch (e) {
      return this.raError(rq, rs, e);
    }
  }

  private buildUser(email:string, password:string):User {
    const user = new User();
    user.email = email;
    user.password = password;
    user.created_at = new Date();
    user.role_id = Roles.User;
    user.notif_counter = 0;
    user.chat_counter = 0;
    return user;
  }

  private buildProfile(rq:Request):Profile {
    const profile = new Profile();
    profile.email = rq.body.email;
    profile.phone_number = rq.body.phone_number;
    profile.firstname = rq.body.firstname;
    profile.lastname = rq.body.lastname;
    return profile;
  }

}
