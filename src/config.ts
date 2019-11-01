
if (process.env.NODE_ENV === 'production' && !(process.env.JWT_SECRET)) {
  console.error('Please set a JWT_SECRET env variable in production');
  console.error('The current configuration is insecure');
  process.exit(1);
}

export class Config {
  public static readonly PORT: number = parseInt(process.env.PORT || '3001', 10);
  public static readonly POSTGRESQL_ADDON_DB: string = process.env.POSTGRESQL_ADDON_DB || 'pls_development';
  public static readonly POSTGRESQL_ADDON_HOST: string = process.env.POSTGRESQL_ADDON_HOST || 'localhost';
  public static readonly POSTGRESQL_ADDON_PORT: number = parseInt(process.env.POSTGRESQL_ADDON_PORT || '5432', 10);
  public static readonly POSTGRESQL_ADDON_USER: string = process.env.POSTGRESQL_ADDON_USER || 'pls';
  public static readonly POSTGRESQL_ADDON_PASSWORD: string = process.env.POSTGRESQL_ADDON_PASSWORD || 'pls_rules';

  public static readonly JWT_SECRET: string = process.env.JWT_SECRET || 'plsrulestheworld';
  public static readonly JWT_EXPIRES_IN: number = parseInt(process.env.JWT_EXPIRES_IN || '1440', 10);
  public static readonly ENVIRONMENT = process.env.NODE_ENV || 'development';

  public static readonly ALLOWED_CORS_DOMAINS = [
    'http://localhost:4200',
    'http://localhost:8080',
  ];

}
