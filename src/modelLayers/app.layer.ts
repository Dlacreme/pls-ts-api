import { Database } from '../services/database';
import { inject } from 'aurelia-dependency-injection';

@inject(
  Database
)
export class AppLayer {

  constructor() { }

}
