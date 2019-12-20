import { Event } from '../../models/event';
import { SelectQueryBuilder, getConnection } from 'typeorm';
import { User } from '../../models/user';
import { Roles } from '../../enums';
import { Member } from '../../models/member';
import { NotificationService } from '../../services/notification.service';

export class EventService {

  private notificationService:NotificationService;

  constructor() {
    this.notificationService = new NotificationService();
  }

  public async get(id:number):Promise<Event|undefined> {
    const q = this.withMembers(this.coreQuery());
    q.where(this.whereIsNotDisabled());
    q.andWhere(this.whereComing());
    return q.andWhere('event.id = :id', {id: id})
      .getOne();
  }

  public async getComing(user:User):Promise<Event[]> {
    const q = this.withMembers(this.coreQuery());
    q.where(this.whereIsNotDisabled());
    q.andWhere('member_user_.id = :id', {id: user.id});
    q.andWhere(this.whereComing());
    return q.getMany();
  }

  public async recommandation(user:User|undefined):Promise<Event[]> {

    let q = this.coreQuery();

    q = q.leftJoinAndMapMany('event.members', Member, 'members', `"members"."event_id"="event"."id" AND members.is_disabled = 'f'`)
      .leftJoinAndSelect('members.user_', 'member_user_')
      .leftJoinAndSelect('member_user_.profile_', 'member_user_profile_');

    q.where(this.whereIsNotDisabled());
    q.andWhere(this.whereComing());

    const evs = await q.getMany();
    // if (user) {
    //   return evs.filter((ev) => ev.members.findIndex((m) => !!m.user_ && m.user_.id === user.id) === -1);
    // }
    return evs;
  }

  public async search(query:string):Promise<Event[]> {
    query = query.toLocaleLowerCase();
    return this.coreQuery()
      .andWhere(`(LOWER(event.label) LIKE '%${query}%' OR LOWER(category_.label) LIKE '%${query}%')`)
      .getMany();
  }

  public canEdit(user:User, event:Event):boolean {
    if (user.role_id === Roles.Admin) {
      return true;
    }
    return user.id === event.created_by_id;
  }

  public async join(user:User, event:Event):Promise<Member> {
    const members = getConnection().getRepository(Member);
    let member = await this.getMember(user, event);
    if (member) {
      member.is_disabled = false;
    } else {
      member = new Member();
      member.user_ = user;
      member.event_ = event;
    }
    this.notificationService.joinEvent(event, user);
    return members.save(member);
  }

  public async leave(user:User, event:Event):Promise<any|null> {
    const members = getConnection().getRepository(Member);
    const member = await this.getMember(user, event);
    this.notificationService.leaveEvent(event, user);
    if (!member) {
      return null;
    }
    member.is_disabled = true;
    try {
      members.save(member);
      return null;
    } catch (err) {
      return err;
    }
  }

  private coreQuery():SelectQueryBuilder<Event> {
    return getConnection().getRepository(Event)
      .createQueryBuilder('event')
      .leftJoinAndSelect('event.category_', 'category_')
      .leftJoinAndSelect('event.channel_', 'channel_')
      .leftJoinAndSelect('event.created_by_', 'created_by_')
      .leftJoinAndSelect('created_by_.profile_', 'created_by_profile')
      .leftJoinAndSelect('event.location_', 'location_');
  }

  private withMembers(q:SelectQueryBuilder<Event>):SelectQueryBuilder<Event> {
    return q.leftJoinAndMapMany('event.members', Member, 'members', `"members"."event_id"="event"."id" AND members.is_disabled = 'f'`)
      .leftJoinAndSelect('members.user_', 'member_user_')
      .leftJoinAndSelect('member_user_.profile_', 'member_user_profile_');
  }

  private whereIsNotDisabled():string {
    return `event.is_disabled = 'f'`;
  }

  private whereComing():string {
    return `date(start_date) >= date(now())`;
  }

  private async getMember(user:User, event:Event):Promise<Member|undefined> {
    return getConnection().getRepository(Member)
      .createQueryBuilder('member')
      .where('member.user_id = :user_id AND member.event_id = :event_id', {user_id: user.id, event_id: event.id})
      .getOne();
  }


}
