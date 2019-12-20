import * as express from 'express';
import { Route } from './route';
import { SessionRoute } from '../modules/users/session.route';
import { UserRoute } from '../modules/users/user.route';
import { CompanyRoute } from '../modules/companies/company.route';
import { EventRoute } from '../modules/events/event.route';
import { GetterRoute } from '../modules/getters/getter.route';
import { ChannelRoute } from '../modules/channels/channel.route';

export class Router {

  private routes:Route[];

  constructor() {
    this.routes = [
      new GetterRoute() as Route,
      new SessionRoute() as Route,
      new UserRoute() as Route,
      new CompanyRoute() as Route,
      new EventRoute() as Route,
      new ChannelRoute() as Route,
    ];
  }

  public routing(app:express.Application):void {
    this.routes.forEach((route) => route.routing(app));
  }

}
