import { Client } from 'pg';
import { Config } from '../config';
import { inject } from 'aurelia-dependency-injection';
import { Logger } from '../middlewares/logger';

@inject(
  Logger
)
export class Database {

  constructor(
    private logger: Logger
  ) { }

  public async getConnectedClient(): Promise<Client> {
    const client = new Client({
      host: Config.POSTGRESQL_ADDON_HOST,
      port: Config.POSTGRESQL_ADDON_PORT,
      user: Config.POSTGRESQL_ADDON_USER,
      password: Config.POSTGRESQL_ADDON_PASSWORD,
      database: Config.POSTGRESQL_ADDON_DB,
    });
    await client.connect();
    return client;
  }
}
