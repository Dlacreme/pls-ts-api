import * as express from 'express';
import { JwtPayload } from './services/jwt';

export interface Request extends express.Request {
  session: JwtPayload;
}

// tslint:disable-next-line
export interface Response extends express.Response { }
