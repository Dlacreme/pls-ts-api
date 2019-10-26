import 'reflect-metadata';
import App from './app';
import { Container } from 'aurelia-dependency-injection';

const app = new Container().get(App);
app.run();
