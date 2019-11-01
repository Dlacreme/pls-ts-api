import { Database } from '../services/database';
import { inject } from 'aurelia-dependency-injection';
import { AppLayer } from './app.layer';
import { User, UserRole, Language } from '../models/user';
import { Logger } from '../middlewares/logger';

@inject(
  Logger,
  Database
)
export class UserLayer extends AppLayer {

  constructor(
    private logger: Logger,
    private db: Database
  ) { super() }

  /**
   * Find
   */

  public async findById(id: string): Promise<User | null> {
    const db = await this.db.getConnectedClient();
    try {
      const u = await db.query(
        "SELECT u.id as id, u.email as email \
      FROM users u \
      WHERE u.id = $1 \
      LIMIT 1",
        [id]);
      db.end();
      return u.rows.length > 0 ? this.userFromRow(u.rows[0]) : null;
    } catch (e) {
      return null;
    }
  }

  public async findByEmail(email: string): Promise<User | null> {
    const db = await this.db.getConnectedClient();
    try {
      const u = await db.query(
        "SELECT u.id as id, u.email as email \
      FROM users u \
      WHERE u.email = $1 \
      LIMIT 1",
        [email]);
      db.end();
      return u.rows.length > 0 ? this.userFromRow(u.rows[0]) : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * Filter
   */


  /**
   * Insert
   */
  public async insert(
    email: string,
    password: string,
    language: Language = Language.English,
    role: UserRole = UserRole.user,
    provider: 'local' | 'google' | 'facebook' = 'local',
    providerId?: string
  ): Promise<User | null> {
    const db = await this.db.getConnectedClient();
    try {
      const insertedProfile = await db.query(
        "INSERT INTO profiles (email) \
        VALUES($1) \
        RETURNING *",
        [email]
      );

      const insertedUser = await db.query(
        "INSERT INTO users (email, password, provider_type, provider_id, role_id, profile_id, language_id) \
        VALUES ($1, $2, $3, $4, $5, $6, $7) \
        RETURNING *",
        [email, password, provider, providerId, role, insertedProfile.rows[0].id, language]
      )
      return this.findById(insertedUser.rows[0].id);
    } catch (e) {
      this.logger.log('warn', e);
      return null;
    }
  }


  /**
   * PRIVATE
   */

  private userFromRow(row: any): User {
    return {
      id: row.id,
      email: row.email,
    };
  }

}
