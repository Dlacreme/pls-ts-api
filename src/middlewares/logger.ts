import * as express from 'express';
import * as winston from 'winston';
import { Config } from '../config';

const logger = winston.createLogger({
  format: Config.ENVIRONMENT === 'development' || Config.ENVIRONMENT === 'test' ?
    winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ) : winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
  level: 'debug',
  transports: [
    new winston.transports.Console({})
  ]
});

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  logger.debug('Logging initialized at debug level');
}

export class Logger {

  public logQuery(query: string, parameters?: any[]): void {
    logger.debug(`SQL: ${query} -- ${parameters}`);
  }

  public logQueryError(error: string, query: string, parameters?: any[]): void {
    logger.error(`SQL ERROR: ${error} -- ${query} -- ${parameters}`);
  }

  public logQuerySlow(time: number, query: string, parameters?: any[]): void {
    logger.warning(`SQL SLOW QUERY: ${query} -- ${parameters} ran in ${time}`);
  }

  public logSchemaBuild(): void { }

  public logMigration(): void { }

  public log(level: 'log' | 'info' | 'warn', message: any): any {
    return logger.log(level, message);
  }

  public reportError(err: Error, req: express.Request, additionalData?: any, postOnly?: boolean): void {
    if (postOnly && req.method.toLowerCase() !== 'post') {
      return;
    }
    const Slack = require('slack-node');
    const slack = new Slack();
    slack.setWebhook('https://hooks.slack.com/services/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');
    slack.webhook({
      channel: '#madrasa-email-debug',
      username: 'error',
      text: `
        on: ${req.method} ${req.url}
        headers: ${JSON.stringify(req.headers)}
        with params: ${JSON.stringify(req.body)}
        additionalData: ${JSON.stringify(additionalData)}
        ${err.stack || err.toString()}
      `
    }, () => { });
  }

  public get(): winston.Logger {
    return logger;
  }
}
