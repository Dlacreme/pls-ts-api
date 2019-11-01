require('express-async-errors');
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as expressWinston from 'express-winston';
import { inject } from 'aurelia-dependency-injection';
import { Config } from './config';
import { Logger } from './middlewares/logger';
import { Router } from './router';

@inject(
  Logger,
  Router,
)
class App {
  public app: express.Application;

  constructor(
    private logger: Logger,
    private router: Router
  ) {
    this.logger.log('info', `PLS API booting in ${Config.ENVIRONMENT} mode`);
    this.app = express();
    this.config();
    this.router.loadRoutes(this.app);
  }

  public run(): void {
    this.app.listen(Config.PORT)
    this.logger.log('info', `PLS API listening on localhost:${Config.PORT}`);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use((rq, rs, next) => {
      rs.setHeader('Access-Control-Allow-Origin', '*');
      rs.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      rs.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      rs.setHeader('Access-Control-Allow-Credentials', 'true');
      next();
    });
    this.app.use(expressWinston.logger({
      winstonInstance: this.logger.get(),
      msg: 'HTTP {{req.method}} {{req.url}}',
      colorize: true,
      meta: Config.ENVIRONMENT !== 'development'
    }));
  }

}

export default App;
