import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-123456-должность-l');
  this.route('i-i-s-123456-должность-e',
  { path: 'i-i-s-123456-должность-e/:id' });
  this.route('i-i-s-123456-должность-e.new',
  { path: 'i-i-s-123456-должность-e/new' });
  this.route('i-i-s-123456-отчет-о-сервере-l');
  this.route('i-i-s-123456-отчет-о-сервере-e',
  { path: 'i-i-s-123456-отчет-о-сервере-e/:id' });
  this.route('i-i-s-123456-отчет-о-сервере-e.new',
  { path: 'i-i-s-123456-отчет-о-сервере-e/new' });
  this.route('i-i-s-123456-расположение-l');
  this.route('i-i-s-123456-расположение-e',
  { path: 'i-i-s-123456-расположение-e/:id' });
  this.route('i-i-s-123456-расположение-e.new',
  { path: 'i-i-s-123456-расположение-e/new' });
  this.route('i-i-s-123456-сенсоры-l');
  this.route('i-i-s-123456-сенсоры-e',
  { path: 'i-i-s-123456-сенсоры-e/:id' });
  this.route('i-i-s-123456-сенсоры-e.new',
  { path: 'i-i-s-123456-сенсоры-e/new' });
  this.route('i-i-s-123456-серверная-l');
  this.route('i-i-s-123456-серверная-e',
  { path: 'i-i-s-123456-серверная-e/:id' });
  this.route('i-i-s-123456-серверная-e.new',
  { path: 'i-i-s-123456-серверная-e/new' });
  this.route('i-i-s-123456-сотрудник-l');
  this.route('i-i-s-123456-сотрудник-e',
  { path: 'i-i-s-123456-сотрудник-e/:id' });
  this.route('i-i-s-123456-сотрудник-e.new',
  { path: 'i-i-s-123456-сотрудник-e/new' });
});

export default Router;
