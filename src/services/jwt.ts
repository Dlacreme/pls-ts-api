import * as jwt from 'jsonwebtoken';
import { Config } from '../config';
import { User } from '../models/user';

export interface JwtPayload extends User {
}

export class Jwt {

  public createToken(user: User): string {
    return jwt.sign(
      Object.assign({}, user),
      Config.JWT_SECRET
    );
  }

  public extractPayload(token: string): JwtPayload {
    return jwt.verify(token, Config.JWT_SECRET);
  }

}
