import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {User} from "./user";
import {Employee} from "./employee";


@Entity("company",{schema:"public"})
export class Company {


   
   
   
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
        


   
   
   
   
   
   
    @ManyToOne(type=>User, User=>User.companys,{  nullable:false, })
    @JoinColumn({ name:'created_by_id'})
    created_by_:User | null;



   
   
   
   @IsNotEmpty()
   
    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"created_at"
        })
    created_at:Date;
        


   
   
   
   @IsNotEmpty()
   
    @Column("boolean",{ 
        nullable:false,
        default:"false",
        name:"is_disabled"
        })
    is_disabled:boolean;
        


   
   
   
   
   
   
    @OneToMany(type=>User, User=>User.active_company_)
    users:User[];
    


   
   
   
   
   
   
    @OneToMany(type=>Employee, Employee=>Employee.company_)
    employees:Employee[];
    
}
