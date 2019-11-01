export enum UserRole {
  Admin = 'admin',
  user = 'user',
}

export enum Language {
  English = 'en',
  French = 'fr',
  Vietnamese = 'vi',
}

export class User {

  public id: string;
  public email: string;

  constructor() { }

}