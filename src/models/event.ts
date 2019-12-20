import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, IsUUID, IsOptional} from "class-validator";
import {EventStatus} from "./event_status";
import {User} from "./user";
import {Location} from "./location";
import {EventCategory} from "./event_category";
import {EventType} from "./event_type";
import {Channel} from "./channel";
import {Member} from "./member";


@Entity("event",{schema:"public"})
export class Event {





   @IsNotEmpty()

    @PrimaryGeneratedColumn({
        type:"integer",
        name:"id"
        })
    id:number;





   @Length(0, 500)
   @IsNotEmpty()

    @Column("character varying",{
        nullable:false,
        length:500,
        name:"label"
        })
    label:string;





   @Length(0, 2054)

   @IsOptional()
    @Column("character varying",{
        nullable:true,
        length:2054,
        name:"desc"
        })
    desc:string | null;







    @Column()
    public status_id: number;

    @ManyToOne(type=>EventStatus, EventStatus=>EventStatus.events,{  nullable:false, })
    @JoinColumn({ name:'status_id'})
    status_:EventStatus | null;






   @IsNotEmpty()

    @Column("smallint",{
        nullable:false,
        default:"1",
        name:"capacity"
        })
    capacity:number;





    @Column()
     public created_by_id: number;

   @IsOptional()

    @ManyToOne(type=>User, User=>User.events,{  })
    @JoinColumn({ name:'created_by_id'})
    created_by_:User | null;






    @Column()
    public location_id: number;


    @ManyToOne(type=>Location, Location=>Location.events,{  nullable:false, })
    @JoinColumn({ name:'location_id'})
    location_:Location | null;






   @IsNotEmpty()

    @Column("timestamp without time zone",{
        nullable:false,
        name:"start_date"
        })
    start_date:Date;







   @IsOptional()
    @Column("timestamp without time zone",{
        nullable:true,
        name:"end_date"
        })
    end_date:Date | null;







    @Column()
    public category_id: number;

    @ManyToOne(type=>EventCategory, EventCategory=>EventCategory.events,{  nullable:false, })
    @JoinColumn({ name:'category_id'})
    category_:EventCategory | null;







    @Column()
    public type_id: number;

    @ManyToOne(type=>EventType, EventType=>EventType.events,{  nullable:false, })
    @JoinColumn({ name:'type_id'})
    type_:EventType | null;









    @ManyToOne(type=>Channel, Channel=>Channel.events,{  nullable:false, })
    @JoinColumn({ name:'channel_id'})
    channel_:Channel | null;




    @Column()
    public channel_id: number;

   @IsNotEmpty()

    @Column("boolean",{
        nullable:false,
        default:"false",
        name:"is_disabled"
        })
    is_disabled:boolean;









    @OneToMany(type=>Member, Member=>Member.event_)
    members:Member[];

}
