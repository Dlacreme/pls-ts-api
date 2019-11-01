import { Request, Response } from '../request';
import { numberLiteralTypeAnnotation } from '@babel/types';

export enum HttpCode {
  Success = 200,
  Created = 201,
  NotContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  ServerError = 500,
  NotImplemented = 501,
}

export class AppController {

  private errors = {
    missingParameter: (paramName: string) => `Missing parameter ${paramName}`,
    invalidParameter: (paramName: string, format: string) => `Error ${paramName} must be ${format}`,
  };

  protected flow(req: Request, res: Response, message: string = 'ok'): Flow {
    const flow = new Flow(req, res, message);
    return flow;
  }

  protected bodyParam(flow: Flow, name: string, format: RegExp): Flow {
    const param = flow.req.body[name];
    if (!param) {
      return flow.error(HttpCode.BadRequest, this.errors.missingParameter(name));
    }
    if (!format.test(param)) {
      return flow.error(HttpCode.BadRequest, this.errors.invalidParameter(name, format.toString()));
    }
    return flow;
  }

  protected async notImplemented(req: Request, res: Response): Promise<Response> {
    return res.status(HttpCode.NotImplemented).json({ error: 'Not Implemented' });
  }

}

interface Error {
  code: number;
  message: string;
}

export class Flow {

  public req: Request;
  public res: Response;
  private message: string;
  private data: any | undefined = undefined;
  private errors: Error[] = [];

  constructor(req: Request, res: Response, msg: string) {
    this.message = msg;
    this.req = req;
    this.res = res;
  }

  public setData(data: any): Flow {
    this.data = data;
    return this;
  }

  public hasError(): boolean {
    return this.errors && this.errors.length > 0;
  }

  public error(code: number = HttpCode.ServerError, message: string = 'Server Error'): Flow {
    const e: Error = { code, message };
    this.errors.push(e);
    return this;
  }

  public async renderError(code: number = HttpCode.ServerError, message: string = 'Server Error'): Promise<Response> {
    return this.res.status(code).json({
      message: 'error',
      errors: message
    });
  }

  public async render(): Promise<Response> {
    if (this.hasError()) {
      return this.res.status(this.errors[0].code).json({
        message: 'error',
        errors: this.errors.map(e => e.message)
      });
    }
    return this.res.status(HttpCode.Success).json({ message: this.message, data: this.data })
  }
}
