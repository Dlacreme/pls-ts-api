interface Errors {[key:string]: {[key:string]: {code:string; message:string; }; }; }

export const Errors:Errors = {

  http: {
    serverError: {
      code: '500',
      message: 'Server Error'
    },
    unauthorized: {
      code: '401',
      message: 'You are not authorized to perform this action'
    },
    invalid: {
      code: '400',
      message: 'Invalid query'
    },
    undefined: {
      code: '404',
      message: 'Not found'
    }
  },
  signin: {
    duplicate: {
      code: 'email_already_existing',
      message: 'Email already existing'
    }
  }

};

