
export class Regexps {

  // tslint:disable-next-line:max-line-length
  public readonly email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public readonly password = /^.{4,}$/;
  public readonly num = /^[0-9]+$/;
  public readonly alpha = /^[\u0600-\u06FFÀ-ÿA-Za-z-' ]+$/;
  public readonly alphaNum = /^[\u0600-\u06FF0-9À-ÿA-Za-z-' ]+$/;
  public readonly phoneNumber = /^((1|2|3|4|6|7|9|50|52|54|55|56|58){1})([0-9]{7})$/;

}