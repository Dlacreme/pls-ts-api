import { BaseController } from '../../core/controller';
import { Request, Response } from 'express';
import { EventService } from './event.service';
import { Event } from '../../models/event';
import { EventTypes } from '../../enums';
import { ModelService } from '../../services/model.service';
import { getConnection } from 'typeorm';
import { Location } from '../../models/location';
import { Channel } from '../../models/channel';

export class EventController extends BaseController {

  private eventService = new EventService();

  constructor() {
    super();
  }

  public async get(rq:Request, rs:Response):Promise<Response> {
    return this.raDataQuery(rq, rs, this.eventService.get(rq.params.id));
  }

  public async getComingEvents(rq:Request, rs:Response):Promise<Response> {
    return this.raDataQuery(rq, rs, this.eventService.getComing(this.loggedUser));
  }

  public async search(rq:Request, rs:Response):Promise<Response> {
    return this.raDataQuery(rq, rs, this.eventService.search(rq.params.query));
  }

  public async advancedSearch(rq:Request, rs:Response):Promise<Response> {
    return this.raError(rq, rs, 'Not ready');
  }

  public async recommandation(rq:Request, rs:Response):Promise<Response> {
    return this.raDataQuery(rq, rs, this.eventService.recommandation(this.loggedUser));
  }

  public async create(rq:Request, rs:Response):Promise<Response> {
    const ev = await this.buildEvent(rq);

    if (!ev.location_id) {
      const loc = this.buildLocation(rq);
      const locationErros = await ModelService.validate(loc);
      if (locationErros) {
        return this.raInvalid(rq, rs, locationErros);
      }
      const savedLoc = await getConnection().getRepository(Location).save(loc);
      ev.location_id = savedLoc.id;
      ev.location_ = savedLoc;
    }

    const evErrors = await ModelService.validate(ev);
    if (evErrors) {
      return this.raInvalid(rq, rs, evErrors);
    }
    try {
      const savedEv = await this.db().getRepository(Event)
        .save(ev);
      this.eventService.join(this.loggedUser, savedEv);
      return this.raDataQuery(rq, rs, this.eventService.get(savedEv.id));
    } catch (err) {
      return this.raError(rq, rs, err);
    }
  }

  public async update(rq:Request, rs:Response):Promise<Response> {
    const existingEv = await this.eventService.get(rq.params.id);
    if (!existingEv) {
      return this.raUndefined(rq, rs);
    }

    if (!(await this.eventService.canEdit(this.loggedUser, existingEv))) {
      return this.raUnthorized(rq, rs);
    }

    const loc = this.buildLocation(rq);
    const locationErros = await ModelService.validate(loc);
    if (locationErros) {
      return this.raInvalid(rq, rs, locationErros);
    }

    const ev = await this.buildEvent(rq);
    ev.id = existingEv.id;
    const savedLoc = await getConnection().getRepository(Location).save(loc);
    ev.location_id = savedLoc.id;
    ev.location_ = savedLoc;

    try {
      await getConnection().getRepository(Event).save(ev);
      return this.raDataQuery(rq, rs, this.eventService.get(ev.id));
    } catch (err) {
      return this.raError(rq, rs, err);
    }
  }

  public async join(rq:Request, rs:Response):Promise<Response> {
    const user = rq.params.user_id ? await this.userService.find(rq.params.user_id) : this.loggedUser;
    if (!user) {
      return this.raInvalid(rq, rs, 'User not existing');
    }
    const event = await this.eventService.get(rq.params.id);
    if (!event) {
      return this.raInvalid(rq, rs, 'Event not existing');
    }
    try {
      const member = await this.eventService.join(user, event);
      return this.raData(rq, rs, member);
    } catch (err) {
      return this.raError(rq, rs, err);
    }
  }

  public async leave(rq:Request, rs:Response):Promise<Response> {
    const user = rq.params.user_id ? await this.userService.find(rq.params.user_id) : this.loggedUser;
    if (!user) {
      return this.raInvalid(rq, rs, 'User not existing');
    }
    const event = await this.eventService.get(rq.params.id);
    if (!event) {
      return this.raInvalid(rq, rs, 'Event not existing');
    }
    try {
      const err = await this.eventService.leave(user, event);
      if (err) {
        this.raError(rq, rs, err);
      }
      return this.raData(rq, rs, {});
    } catch (err) {
      return this.raError(rq, rs, err);
    }
  }

  private async buildEvent(rq:Request):Promise<Event> {
    const ev = new Event();
    if (rq.body.id) {
      ev.id = rq.body.id;
    }
    ev.label = rq.body.label;
    ev.desc = rq.body.desc;
    ev.status_id = 1;
    ev.capacity = rq.body.capacity;
    ev.created_by_ = this.loggedUser;
    ev.start_date = rq.body.start_date;
    ev.end_date = rq.body.end_date;
    ev.category_id = rq.body.category_id;
    ev.type_id = EventTypes.Default;
    ev.start_date = rq.body.start_date;
    ev.end_date = rq.body.end_date;
    ev.is_disabled = false;
    ev.location_id = rq.body.location_id;

    const savedChannel = await getConnection().getRepository(Channel)
      .save({});
    ev.channel_id = savedChannel.id;

    return ev;
  }

  private buildLocation(rq:Request):Location {
    const location = new Location();
    location.id = rq.body.id;
    location.lat = rq.body.location_.lat;
    location.lng = rq.body.location_.lng;
    location.google_id = rq.body.location_.google_id;
    location.label = rq.body.location_.label;
    location.created_by_ = this.loggedUser;
    return location;
  }

  /**
  private async buildAddress(rq:Request):Promise<Address|null> {
    const bodyAddr = rq.body.address_;
    if (!bodyAddr) {
      return null;
    }
    const addr = new Address();
    addr.is_disabled = false;
    addr.desc = bodyAddr.desc;
    addr.street = bodyAddr.street;
    addr.property_label = bodyAddr.property_label;
    addr.property_floor = bodyAddr.property_floor;
    addr.property_room = bodyAddr.property_room;
    addr.desc = bodyAddr.desc;
    addr.created_by = this.loggedUser;
    const dist = bodyAddr.district_id ?
      await getConnection().getRepository(District)
        .createQueryBuilder('district').where('district.id = :id', {id: bodyAddr.district_id}).getOne()
      : undefined;
    addr.district_ = dist || null;
    const city = bodyAddr.city_id ?
      await getConnection().getRepository(City)
        .createQueryBuilder('city').where('city.id = :id', {id: bodyAddr.city_id}).getOne()
      : undefined;
    addr.city_ = city || null;
    const propertyType = bodyAddr.property_type_id ?
      await getConnection().getRepository(PropertyType)
        .createQueryBuilder('property_type').where('property_type.id = :id', {id: bodyAddr.property_type_id}).getOne()
      : undefined;
    addr.property_type_ = propertyType || null;
    return getConnection().getRepository(Address).save(addr);
  }
  */

}
