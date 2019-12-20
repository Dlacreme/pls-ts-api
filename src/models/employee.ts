import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {User} from "./user";
import {Company} from "./company";
import {EmployeeRole} from "./employee_role";


@Entity("employee",{schema:"public"})
export class Employee {


   
   
   
   @IsNotEmpty()
   
    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        


   
   
   
   
   
   
    @ManyToOne(type=>User, User=>User.employees,{  nullable:false, })
    @JoinColumn({ name:'user_id'})
    user_:User | null;



   
   
   
   
   
   
    @ManyToOne(type=>Company, Company=>Company.employees,{  nullable:false, })
    @JoinColumn({ name:'company_id'})
    company_:Company | null;



   
   
   
   
   
   
    @ManyToOne(type=>EmployeeRole, EmployeeRole=>EmployeeRole.employees,{  nullable:false, })
    @JoinColumn({ name:'employee_role_id'})
    employee_role_:EmployeeRole | null;



   
   
   
   @IsNotEmpty()
   
    @Column("boolean",{ 
        nullable:false,
        default:"false",
        name:"is_disabled"
        })
    is_disabled:boolean;
        
}
