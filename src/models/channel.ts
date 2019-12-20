import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {Event} from "./event";
import {Message} from "./message";
import {Notification} from "./notification";


@Entity("channel",{schema:"public"})
export class Channel {


   
   
   
   @IsNotEmpty()
   
    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        


   
   
   
   
   
   
    @OneToMany(type=>Event, Event=>Event.channel_)
    events:Event[];
    


   
   
   
   
   
   
    @OneToMany(type=>Message, Message=>Message.channel_)
    messages:Message[];
    


   
   
   
   
   
   
    @OneToMany(type=>Notification, Notification=>Notification.channel_)
    notifications:Notification[];
    
}
