import { Roles } from '../enums';
import * as jwt from 'jsonwebtoken';

interface JwtToken {
  id:number; // user id
  access:Roles; // user role
}

export class SessionService {

  private readonly tokenExpire = '30d';
  private readonly tokenAlgorithm = 'HS256';

  public buildToken(user:any):string {
    return jwt.sign({
      id: user.id,
      access: user.role_.id
    }, process.env.JWT_SECRET, {
      expiresIn: this.tokenExpire,
      algorithm: this.tokenAlgorithm
    });
  }

  /**
   * tryAuth will parse JWT token and return user id if appropriate
   */
  public tryAuth(token:string|undefined, access:Roles):number|null {
    if (!token) {
      return null;
    }

    try {
      const decoded:JwtToken = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded || !decoded.access || decoded.access > access) {
        return null;
      }
      return decoded.id;
    } catch (err) {
      return null;
    }
  }

}
