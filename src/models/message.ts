import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {Channel} from "./channel";
import {User} from "./user";


@Entity("message",{schema:"public"})
export class Message {





   @IsNotEmpty()

    @PrimaryGeneratedColumn({
        type:"integer",
        name:"id"
        })
    id:number;




    @IsNotEmpty()

    @Column("timestamp without time zone",{
        nullable:false,
        name:"created_at"
        })
    created_at:Date;




   @IsOptional()

    @ManyToOne(type=>Channel, Channel=>Channel.messages,{  })
    @JoinColumn({ name:'channel_id'})
    channel_:Channel | null;







   @IsOptional()

    @ManyToOne(type=>User, User=>User.messages,{  })
    @JoinColumn({ name:'user_id'})
    user_:User | null;







   @IsOptional()
    @Column("text",{
        nullable:true,
        name:"content"
        })
    content:string | null;






   @IsNotEmpty()

    @Column("boolean",{
        nullable:false,
        default:"false",
        name:"is_disabled"
        })
    is_disabled:boolean;

}
