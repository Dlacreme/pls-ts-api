import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {Event} from "./event";


@Entity("event_category",{schema:"public"})
export class EventCategory {


   
   
   
   @IsNotEmpty()
   
    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        


   
   
   @Length(0, 250)
   @IsNotEmpty()
   
    @Column("character varying",{ 
        nullable:false,
        length:250,
        name:"label"
        })
    label:string;
        


   
   
   
   @IsNotEmpty()
   
    @Column("character varying",{ 
        nullable:false,
        default:"'255'::character varying",
        name:"slug"
        })
    slug:string;
        


   
   
   
   @IsNotEmpty()
   
    @Column("boolean",{ 
        nullable:false,
        default:"false",
        name:"is_disabled"
        })
    is_disabled:boolean;
        


   
   
   
   
   
   
    @OneToMany(type=>Event, Event=>Event.category_)
    events:Event[];
    
}
