import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {Channel} from "./channel";


@Entity("notification",{schema:"public"})
export class Notification {


   
   
   
   @IsNotEmpty()
   
    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        


   
   
   
   
   
   
    @ManyToOne(type=>Channel, Channel=>Channel.notifications,{  nullable:false, })
    @JoinColumn({ name:'channel_id'})
    channel_:Channel | null;



   
   
   @Length(0, 255)
   @IsNotEmpty()
   
    @Column("character varying",{ 
        nullable:false,
        length:255,
        default:"'general'::character varying",
        name:"type"
        })
    type:string;
        


   
   
   @Length(0, 500)
   @IsNotEmpty()
   
    @Column("character varying",{ 
        nullable:false,
        length:500,
        name:"key"
        })
    key:string;
        


   
   
   
   
   @IsOptional()
    @Column("text",{ 
        nullable:true,
        name:"data"
        })
    data:string | null;
        


   
   
   
   @IsNotEmpty()
   
    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"created_at"
        })
    created_at:Date;
        
}
