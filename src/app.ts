import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import {createConnection, Connection} from 'typeorm';
import { Router } from './core/router';

class App {

  public app:express.Application;
  public router:Router = new Router();

  constructor() {
    this.loadEnv();
    this.app = express();
    this.config();
    this.initDb();
    this.router.routing(this.app);
  }

  private loadEnv():void {
    dotenv.config();
    const envPath = process.env.NODE_ENV === 'production' ?
      './environments/prod.env' : './environments/dev.env';
    dotenv.config({path: envPath});
  }

  private config():void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use((rq, rs, next) => {
      rs.setHeader('Access-Control-Allow-Origin', '*');
      rs.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      rs.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      rs.setHeader('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }

  private initDb():void {
    createConnection({
      type: 'postgres',
      host: process.env.NODE_ENV === 'production' ? 'ec2-54-247-113-90.eu-west-1.compute.amazonaws.com' : 'localhost',
      port: process.env.NODE_ENV === 'production' ? 5432 : 5432,
      username: process.env.NODE_ENV === 'production' ? 'nvmnesuibcquhv' : 'pls',
      password: process.env.NODE_ENV === 'production' ? '' : 'pls_rules',
      database: process.env.NODE_ENV === 'production' ? 'd6b3tt150rovn3' : 'pls_dev',
      logging: process.env.NODE_ENV !== 'production',
      ssl: process.env.NODE_ENV === 'production',
      entities: [
        process.env.NODE_ENV === 'production' ? 'src/models/*.ts' : 'src/models/*.ts'
      ],
      synchronize: false,
    })
      .then((connection:Connection) => {
      }, (err) => {
        console.log('Connection failed > ', err);
        throw new Error('Cannot connect to Database');
      }
    );
  }

}

export default new App().app;
