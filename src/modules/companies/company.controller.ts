import { Request, Response } from 'express';
import { BaseController } from '../../core/controller';
import { ModelService } from '../../services/model.service';
import { Company } from '../../models/company';
import { EmployeeRoles, Roles } from '../../enums';
import { CompanyService } from './company.service';

export class CompanyController extends BaseController {

  private companyService:CompanyService = new CompanyService();

  constructor() {
    super();
  }

  public get(rq:Request, rs:Response):Promise<Response> {
    if (!this.hasRole(Roles.Admin) || !rq.params.company_id) {
      if (!this.loggedUser.active_company_) {
        return this.raUndefined(rq, rs);
      }
      return this.raDataQuery(rq, rs, this.companyService.find(this.loggedUser.active_company_.id));
    }
    return this.raDataQuery(rq, rs, this.companyService.find(rq.params.company_id));
  }

  public list(rq:Request, rs:Response):Promise<Response> {
    return this.raDataQuery(rq, rs, this.companyService.filter());
  }

  public async create(rq:Request, rs:Response):Promise<Response> {
    const co = this.buildCompany(rq.body.label);
    const coErrors = await ModelService.validate(co);
    if (coErrors) {
      return this.raInvalid(rq, rs, coErrors);
    }
    const savedCo = await this.db().getRepository(Company).save(co);
    this.companyService.joinCompany(this.loggedUser, savedCo, EmployeeRoles.Manager);
    return this.raDataQuery(rq, rs, this.companyService.find(savedCo.id));
  }

  public async update(rq:Request, rs:Response):Promise<Response> {
    return this.raError(rq, rs, 'Not implemented');
  }

  public async join(rq:Request, rs:Response):Promise<Response> {
    const co = await this.companyService.find(rq.params.company_id);
    if (!co) {
      return this.raUndefined(rq, rs);
    }

    if (
      !this.hasRole(Roles.Admin) ||
      !this.companyService.hasAccess(this.loggedUser, co, EmployeeRoles.Manager)
    ) {
      return this.raUnthorized(rq, rs);
    }

    const user = rq.params.user_id ? await this.userService.find(rq.params.user_id) : this.loggedUser;
    if (!user) {
      return this.raUndefined(rq, rs);
    }

    return this.raDataQuery(rq, rs, this.companyService.joinCompany(user, co, EmployeeRoles.Staff));
  }

  public async leave(rq:Request, rs:Response):Promise<Response> {
    return this.raError(rq, rs, 'Not implemented');
  }

  private buildCompany(label:string):Company {
    const co = new Company();
    co.label = label;
    co.created_by_ = this.loggedUser;
    co.created_at = new Date();
    co.is_disabled = false;
    return co;
  }

}
