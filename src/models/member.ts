import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {Event} from "./event";
import {User} from "./user";


@Entity("member",{schema:"public"})
export class Member {





   @IsNotEmpty()

    @PrimaryGeneratedColumn({
        type:"integer",
        name:"id"
        })
    id:number;







    @Column()
    public event_id: number;

    @ManyToOne(type=>Event, Event=>Event.members,{  nullable:false, })
    @JoinColumn({ name:'event_id'})
    event_:Event | null;







    @Column()
    public user_id: number;



    @ManyToOne(type=>User, User=>User.members,{  nullable:false, })
    @JoinColumn({ name:'user_id'})
    user_:User | null;






   @IsNotEmpty()

    @Column("boolean",{
        nullable:false,
        default:"false",
        name:"is_disabled"
        })
    is_disabled:boolean;

}
