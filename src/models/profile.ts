import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {User} from "./user";


@Entity("profile",{schema:"public"})
export class Profile {


   
   
   
   @IsNotEmpty()
   
    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        


   
   
   @Length(0, 255)
   
   @IsOptional()
    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"firstname"
        })
    firstname:string | null;
        


   
   
   @Length(0, 255)
   
   @IsOptional()
    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"lastname"
        })
    lastname:string | null;
        


   @IsEmail()
   
   @Length(0, 255)
   
   @IsOptional()
    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"email"
        })
    email:string | null;
        


   
   
   @Length(0, 50)
   
   @IsOptional()
    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"phone_number"
        })
    phone_number:string | null;
        


   
   
   
   
   
   
    @OneToMany(type=>User, User=>User.profile_)
    users:User[];
    
}
