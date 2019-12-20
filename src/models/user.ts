import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {Role} from "./role";
import {Profile} from "./profile";
import {Company} from "./company";
import {Employee} from "./employee";
import {Event} from "./event";
import {Member} from "./member";
import {Location} from "./location";
import {Message} from "./message";


@Entity("user",{schema:"public"})
export class User {





   @IsNotEmpty()

    @PrimaryGeneratedColumn({
        type:"integer",
        name:"id"
        })
    id:number;


    @IsOptional()
    @Column()
    public profile_id: number;

    @Column()
    public role_id: number;







    @ManyToOne(type=>Role, Role=>Role.users,{  nullable:false, })
    @JoinColumn({ name:'role_id'})
    role_:Role | null;



   @IsEmail()

   @Length(0, 250)
   @IsNotEmpty()

    @Column("character varying",{
        nullable:false,
        length:250,
        name:"email"
        })
    email:string;





   @Length(0, 255)

   @IsOptional()
    @Column("character varying",{
        nullable:true,
        length:255,
        name:"password"
        })
    password:string | null;





   @Length(0, 255)

   @IsOptional()
    @Column("character varying",{
        nullable:true,
        length:255,
        name:"provider_id"
        })
    provider_id:string | null;





   @Length(0, 55)

   @IsOptional()
    @Column("character varying",{
        nullable:true,
        length:55,
        name:"provider_type"
        })
    provider_type:string | null;






   @IsNotEmpty()

    @Column("timestamp without time zone",{
        nullable:false,
        name:"created_at"
        })
    created_at:Date;







   @IsOptional()

    @ManyToOne(type=>Profile, Profile=>Profile.users,{  })
    @JoinColumn({ name:'profile_id'})
    profile_:Profile | null;







   @IsOptional()

    @ManyToOne(type=>Company, Company=>Company.users,{  })
    @JoinColumn({ name:'active_company_id'})
    active_company_:Company | null;






   @IsNotEmpty()

    @Column("smallint",{
        nullable:false,
        default:"0",
        name:"notif_counter"
        })
    notif_counter:number;






   @IsNotEmpty()

    @Column("smallint",{
        nullable:false,
        default:"0",
        name:"chat_counter"
        })
    chat_counter:number;









    @OneToMany(type=>Company, Company=>Company.created_by_)
    companys:Company[];









    @OneToMany(type=>Employee, Employee=>Employee.user_)
    employees:Employee[];









    @OneToMany(type=>Event, Event=>Event.created_by_)
    events:Event[];









    @OneToMany(type=>Member, Member=>Member.user_)
    members:Member[];









    @OneToMany(type=>Location, Location=>Location.created_by_)
    locations:Location[];









    @OneToMany(type=>Message, Message=>Message.user_)
    messages:Message[];

}
