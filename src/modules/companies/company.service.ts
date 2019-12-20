import { Company } from '../../models/company';
import { getConnection } from 'typeorm';
import { User } from '../../models/user';
import { EmployeeRoles } from '../../enums';
import { Employee } from '../../models/employee';
import { EmployeeRole } from '../../models/employee_role';

export class CompanyService {

  public async hasAccess(user:User, company:Company, role:EmployeeRoles):Promise<boolean> {
    const employee = await getConnection().getRepository(Employee)
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.employee_role_', 'employee_role_')
      .where('employee.user_id = :userId and employee.company_id = :companyId', {userId: user.id, companyId: company.id})
      .getOne();
    if (!employee || employee.employee_role_ || employee.employee_role_ !== role) {
      return false;
    }
    return true;
  }

  public async find(companyId:number):Promise<Company|undefined> {
    return getConnection().getRepository(Company)
      .createQueryBuilder('company')
      .where('company.id = :id', {id: companyId})
      .getOne();
  }

  public async setActiveCompany(user:User, company:Company):Promise<User> {
    user.active_company_ = company;
    return getConnection().getRepository(User).save(user);
  }

  public async joinCompany(user:User, company:Company, employeeRole:EmployeeRoles = EmployeeRoles.Staff):Promise<Employee> {
    const employees = getConnection().getRepository(Employee);
    let employee = await employees
      .createQueryBuilder('employee')
      .where('employee.user_id = :id', {id: user.id})
      .getOne();
    if (employee) {
      employee.company_ = company;
    } else {
      employee = new Employee();
      employee.employee_role_ = await getConnection().getRepository(EmployeeRole).findOne(employeeRole) as EmployeeRole;
      employee.user_ = user;
      employee.company_ = company;
    }
    this.setActiveCompany(user, company);
    return employees.save(employee);
  }

  public async filter():Promise<Company[]> {
    return getConnection().getRepository(Company)
      .createQueryBuilder('company')
      .where(`company.is_disabled = 'f'`)
      .getMany();
  }

}
