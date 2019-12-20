import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {User} from "./user";
import {Event} from "./event";


@Entity("location",{schema:"public"})
export class Location {


   
   
   
   @IsNotEmpty()
   
    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        


   
   
   
   @IsNotEmpty()
   
    @Column("character varying",{ 
        nullable:false,
        name:"google_id"
        })
    google_id:string;
        


   
   
   @Length(0, 500)
   
   @IsOptional()
    @Column("character varying",{ 
        nullable:true,
        length:500,
        name:"label"
        })
    label:string | null;
        


   
   
   
   @IsNotEmpty()
   
    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"lat"
        })
    lat:number;
        


   
   
   
   @IsNotEmpty()
   
    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"lng"
        })
    lng:number;
        


   
   
   
   
   
   
    @ManyToOne(type=>User, User=>User.locations,{  nullable:false, })
    @JoinColumn({ name:'created_by_id'})
    created_by_:User | null;



   
   
   
   
   
   
    @OneToMany(type=>Event, Event=>Event.location_)
    events:Event[];
    
}
