import { Connection, getConnection, Repository, SelectQueryBuilder } from 'typeorm';
import { User } from '../models/user';
import { Company } from '../models/company';
import { Employee } from '../models/employee';
import { EmployeeRoles } from '../enums';
import { EmployeeRole } from '../models/employee_role';
import { Profile } from '../models/profile';
import { ModelService } from './model.service';

export class UserService {

  public async find(id:number):Promise<User|undefined> {
    return new Promise<User|undefined>((res, rej) => {
      this.buildCoreQuery()
        .where('user.id = :id', {id: id})
        .getOne().then((r:User|undefined) => {
          if (r && r.password) {
            delete r.password;
          }
          res(r);
        }, e => rej(e));
    });
  }

  public async findByEmail(email:string):Promise<User|undefined> {
    return new Promise<User|undefined>((res, rej) => {
      this.buildCoreQuery()
        .where('lower(user.email) = lower(:email)', {email: email})
        .getOne().then((r:User|undefined) => {
          if (r && r.password) {
            delete r.password;
          }
          res(r);
        }, e => rej(e));
    });
  }

  public async updateUserProfile(user:User, profile:Profile):Promise<Profile> {
    if (!user.profile_id) {
      console.log('Create new user profile');
      return this.createUserProfile(user, profile);
    }
    const existingProfile = user.profile_ ? user.profile_ :
      await getConnection().getRepository(Profile)
        .createQueryBuilder('profile')
        .where('id = :id', {id: user.profile_id}).getOne();
    if (!existingProfile) {
      return this.createUserProfile(user, profile);
    }
    ModelService.update(existingProfile, profile);
    return getConnection().getRepository(Profile)
      .save(existingProfile);
  }

  private async createUserProfile(user:User, profile:Profile):Promise<Profile> {
    const savedProfile = await getConnection().getRepository(Profile)
      .save(profile);
    user.profile_ = savedProfile;
    getConnection().getRepository(User)
      .save(user);
    return savedProfile;
  }

  private buildCoreQuery():SelectQueryBuilder<User> {
    return getConnection().getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role_', 'role_')
      .leftJoinAndSelect('user.profile_', 'profile_')
      .leftJoinAndSelect('user.active_company_', 'active_company_');
  }

}
