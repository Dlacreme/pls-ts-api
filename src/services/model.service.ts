import {validate} from 'class-validator';

export interface ModelError {
  message:string;
  errors:ValidationError[];
}

export interface ValidationError {
    property: string;
    errors: {[type: string]: string};
}

export class ModelService {
  public static async validate(model:Object):Promise<ModelError|undefined> {
    let errors = await validate(model);
    errors = errors.filter((e) => e.property !== 'id');
    if (errors && errors.length > 0) {
      return {
        message: 'validation_error',
        errors: errors.map(error => ({
          property: error.property,
          errors: error.constraints
        }))
      };
    }
  }

  public static update(to:Object, from:Object):void {
    for (const k in from) {
      if (from[k]) {
        to[k] = from[k];
      }
    }
  }

}
