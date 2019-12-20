import * as express from 'express';
import { Response, Request } from 'express';
import { ValidationSchema, checkSchema, validationResult } from 'express-validator/check';

interface IRoute {
  routing(app:express.Application):void;
}

export class Route implements IRoute {

  protected readonly messages = {
    notImplemented: 'Endpoint not ready yet'
  };

  /**
   * Load our routing. Must be overwritten
   */
  public routing(app:express.Application):void { console.warn('Route not initialized'); }

  /**
   * returns a default error for endpoints not ready
   */
  protected notImplemented(res:Response, additionalMessage:string|null = null):void {
    res.status(501).send({
      message: additionalMessage ?
        `${this.messages.notImplemented} : ${additionalMessage}` : this.messages.notImplemented
    });
  }

  protected validation(rq:Request, rs:Response, next:express.NextFunction):any {
    const errors = validationResult(rq);
    if (errors.isEmpty()) {
      next();
    } else {
      rs.status(400)
        .send({
          error: errors.array()
        });
      rs.end();
    }
  }

}
