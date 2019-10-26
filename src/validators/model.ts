import { validate } from 'class-validator';

export interface ValidationError {
  property: string;
  errors: { [type: string]: string };
}

export async function ValidateModel(model: Object): Promise<{
  message: 'validation_error',
  errors: ValidationError[]
} | null> {
  const errors = await validate(model);
  if (errors && errors.length > 0) {
    return {
      message: 'validation_error',
      errors: errors.map(error => ({
        property: error.property,
        errors: error.constraints
      }))
    };
  }
  return null;
}
