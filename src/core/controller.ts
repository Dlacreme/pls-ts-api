import { Connection, getConnection } from 'typeorm';
import { Request, Response } from 'express';
import { Md5 } from 'ts-md5/dist/md5';
import { Result } from 'express-validator/check';
import { User } from '../models/user';
import { Roles } from '../enums';
import { Errors } from '../errors';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

export class BaseController {

  protected loggedUser:User;

  protected sessionService = new SessionService();
  protected userService = new UserService();

  protected db():Connection {
    return getConnection();
  }

  /**
   * makes sure user is authenticated with User, Premium or Admin role
   */
  public async logged(rq:Request, rs:Response, access:Roles = Roles.User):Promise<any> {
    const userId = this.sessionService.tryAuth(rq.headers.authorization, access);

    if (userId === null) {
      return this.rUnthorized(rq, rs);
    }

    return this.userService
      .find(userId)
      .then((user) => {
        if (!user) {
          return this.rUndefined(rq, rs);
        }
        this.loggedUser = user as User;
      });
  }

  public blurPassword(rq:Request, rs:Response):void {
    if (rq.body && rq.body.password) {
      rq.body.password = Md5.hashStr(rq.body.password);
    }
  }

  public rError(rq:Request, rs:Response, info:any):void {
    rs.status(500).json({
      code: Errors.http.serverError.code,
      message: Errors.http.serverError.message,
      error: info
    });
    rs.end();
  }

  public async raError(rq:Request, rs:Response, info:any):Promise<Response> {
    return rs.status(500).json({
      code: Errors.http.serverError.code,
      message: Errors.http.serverError.message,
      error: info
    });
  }

  public rData(rq:Request, rs:Response, data:any):void {
    rs.status(200).json(data);
    rs.end();
  }

  public async raData(rq:Request, rs:Response, data:any):Promise<Response> {
    return rs.status(200).json(data);
  }

  public rDataQuery(rq:Request, rs:Response, query:Promise<any|undefined>):void {
    query.then(
      (r) => {
        if (r === undefined) {
          this.rUndefined(rq, rs);
        }
        rs.status(200).json(r);
        rs.end();
      }, (err) => {
        this.rError(rq, rs, err);
      }
    );
  }

  public async raDataQuery(rq:Request, rs:Response, query:Promise<any|undefined>):Promise<Response> {
    try {
      const qRes = await query;
      if (qRes === undefined) {
        return this.raUndefined(rq, rs);
      }
      return this.raData(rq, rs, qRes);
    } catch (err) {
      return this.raError(rq, rs, err);
    }
  }

  public rUndefined(rq:Request, rs:Response):void {
    rs.status(404)
      .send({
        message: 'NOT FOUND'
      });
    rs.end();
  }

  public async raUndefined(rq:Request, rs:Response):Promise<Response> {
    return rs.status(404)
      .send({
        message: 'NOT FOUND'
      });
  }

  public rUnthorized(rq:Request, rs:Response):void {
    rs.status(401)
      .send({
        message: 'Unauthorized'
      });
    rs.end();
  }

  public async raUnthorized(rq:Request, rs:Response):Promise<Response> {
    return rs.status(401)
      .send({
        message: 'Unauthorized'
      });
  }

  public rInvalid(rq:Request, rs:Response, error:any):void {
    rs.status(400)
      .send({
        error: error
      });
    rs.end();
  }

  public async raInvalid(rq:Request, rs:Response, error:any):Promise<Response> {
    return rs.status(400)
      .send({
        error: error
      });
  }

  public hasRole(role:Roles):boolean {
    if (!this.loggedUser || !this.loggedUser.role_) {
      return false;
    }
    return this.loggedUser.role_.id <= role;
  }

}
