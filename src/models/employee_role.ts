import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {Employee} from "./employee";


@Entity("employee_role",{schema:"public"})
export class EmployeeRole {


   
   
   
   @IsNotEmpty()
   
    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        


   
   
   @Length(0, 255)
   @IsNotEmpty()
   
    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"label"
        })
    label:string;
        


   
   
   
   
   
   
    @OneToMany(type=>Employee, Employee=>Employee.employee_role_)
    employees:Employee[];
    
}
