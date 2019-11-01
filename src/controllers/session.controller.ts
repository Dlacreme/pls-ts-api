import { Request, Response } from '../request';
import { AppController, HttpCode } from './app.controller';
import { inject } from 'aurelia-dependency-injection';
import { Regexps } from '../services/regexps';
import { UserLayer } from '../modelLayers/user.layer';
import { AuthService } from '../services/auth';
import { Jwt } from '../services/jwt';

enum SessionMessages {
  EmailExisting = 'email_existing'
}

@inject(
  Regexps,
  UserLayer,
  AuthService,
  Jwt,
)
export class SessionController extends AppController {

  constructor(
    private regex: Regexps,
    private userLayer: UserLayer,
    private authService: AuthService,
    private jwt: Jwt,
  ) { super() }

  public async me(req: Request, res: Response) {
    console.log('Try /me');
    res.json({ message: 'me' });
  }

  public async signupWithEmail(req: Request, res: Response) {
    const flow = this.flow(req, res);
    if (this.bodyParam(flow, 'email', this.regex.email).hasError()) {
      return flow.render();
    }
    if (this.bodyParam(flow, 'password', this.regex.password).hasError()) {
      return flow.render();
    }
    const existingUser = await this.userLayer.findByEmail(req.body.email);
    if (existingUser) {
      return flow.renderError(HttpCode.BadRequest, SessionMessages.EmailExisting);
    }
    try {
      const hashPassword = await this.authService.hashPassword(req.body.password);
      const newUser = await this.userLayer.insert(req.body.email, hashPassword);
      if (!newUser) {
        return flow.renderError();
      }
      return flow.setData({
        user: newUser,
        token: this.jwt.createToken(newUser)
      }).render();
    } catch (e) {
      return flow.renderError();
    }
  }

  public async signupWithProvider(req: Request, res: Response) {
    console.log('Log in with Provider');
    return this.notImplemented(req, res);
  }

  public async signinWithEmail(req: Request, res: Response) {
    console.log('Log in with Email');
    return this.notImplemented(req, res);
  }

  public async signinWithProvider(req: Request, res: Response) {
    console.log('Log in with Provider');
    return this.notImplemented(req, res);
  }

}
