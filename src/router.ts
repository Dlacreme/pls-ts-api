import * as express from 'express';
import { inject } from 'aurelia-dependency-injection';
import { SessionController } from './controllers/session.controller';

@inject(
  SessionController
)
export class Router {

  private readonly endpoints = {
  };

  constructor(
    private sessionController: SessionController
  ) { }

  public loadRoutes(app: express.Application): void {
    this.sessionRoutes(app);
  }

  private sessionRoutes(app: express.Application): void {
    app.get(`/me`, this.sessionController.me.bind(this.sessionController));
    app.post(`/signup/email`, this.sessionController.signupWithEmail.bind(this.sessionController));
    app.post(`/signup/provider`, this.sessionController.signupWithProvider.bind(this.sessionController));
    app.post(`/signin/email`, this.sessionController.signinWithEmail.bind(this.sessionController));
    app.post(`/signin/provider`, this.sessionController.signinWithProvider.bind(this.sessionController));
  }

}
