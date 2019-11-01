import * as bcrypt from "bcrypt"
import { inject } from "aurelia-dependency-injection";
import { Jwt } from "./jwt";

@inject(
  Jwt,
)
export class AuthService {

  constructor(
    private jwt: Jwt
  ) { }

  public async hashPassword(pass: string): Promise<string> {
    return bcrypt.hash(pass, 10);
  }

}