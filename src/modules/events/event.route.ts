import { Route } from '../../core/route';
import { EventController } from './event.controller';
import { Roles } from '../../enums';
import { Request, Response } from 'express';
import { checkSchema, ValidationSchema } from 'express-validator/check';

export class EventRoute extends Route {
  private readonly endpoint;
  private readonly controller = new EventController();

  constructor(endpoint:string = 'event') {
    super();
    this.endpoint = endpoint;
  }

  public routing(app):void {
    app.route(`/${this.endpoint}`)
    .get((rq:Request, rs:Response) => {
      this.controller.logged(rq, rs).then(() => this.controller.getComingEvents(rq, rs));
    })
    .post(checkSchema(this.eventSchema()), this.validation, (rq:Request, rs:Response) => {
      this.controller.logged(rq, rs).then(() => this.controller.create(rq, rs));
    });

  app.route(`/${this.endpoint}/:id`)
    .get((rq:Request, rs:Response) => {
      this.controller.get(rq, rs);
    })
    .put(checkSchema(this.eventSchema()), this.validation, (rq:Request, rs:Response) => {
      this.controller.logged(rq, rs).then(() => this.controller.update(rq, rs));
    });

  app.route(`/${this.endpoint}-search`)
    .get((rq:Request, rs:Response) => {
      this.controller.recommandation(rq, rs);
    })
    .post((rq:Request, rs:Response) => {
      this.controller.advancedSearch(rq, rs);
    });

  app.route(`/${this.endpoint}-search/:query`)
    .get((rq:Request, rs:Response) => {
      this.controller.search(rq, rs);
    });

  app.route(`/${this.endpoint}/:id/join/`)
    .post((rq:Request, rs:Response) => {
      this.controller.logged(rq, rs).then(() => this.controller.join(rq, rs));
    })
    .delete((rq:Request, rs:Response) => {
      this.controller.logged(rq, rs).then(() => this.controller.leave(rq, rs));
    });


  app.route(`/${this.endpoint}/:id/join/:user_id`)
    .post((rq:Request, rs:Response) => {
      this.controller.logged(rq, rs, Roles.Admin).then(() => this.controller.join(rq, rs));
    })
    .delete((rq:Request, rs:Response) => {
      this.controller.logged(rq, rs, Roles.Admin).then(() => this.controller.leave(rq, rs));
    });

  }

  private eventSchema():ValidationSchema {
    return {
      label: {
        errorMessage: 'label is missing',
        in: ['body'],
      },
      desc: {
        errorMessage: 'desc is missing',
        in: ['body'],
        optional: true
      },
      capacity: {
        errorMessage: 'capacity is missing',
        in: ['body'],
        isInt: true
      },
      category_id: {
        errorMessage: 'Category is missing or invalid',
        in: ['body'],
        isInt: true
      },
      start_date: {
        errorMessage: 'Start date is missing',
        in: ['body'],
        toDate: true
      },
      end_date: {
        errorMessage: 'End date is missing',
        in: ['body'],
        toDate: true,
        optional: true
      },
      address_: {
        errorMessage: 'address_ is missing',
        in: ['body'],
        optional: true
      },
      ['address_.property_type_id']: {
        errorMessage: 'address_.property_type_id is missing',
        in: ['body'],
      }
    };
  }

}
