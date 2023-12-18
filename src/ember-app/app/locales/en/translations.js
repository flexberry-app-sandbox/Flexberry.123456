import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS123456ДолжностьLForm from './forms/i-i-s-123456-должность-l';
import IIS123456ОтчетОСервереLForm from './forms/i-i-s-123456-отчет-о-сервере-l';
import IIS123456РасположениеLForm from './forms/i-i-s-123456-расположение-l';
import IIS123456СенсорыLForm from './forms/i-i-s-123456-сенсоры-l';
import IIS123456СервернаяLForm from './forms/i-i-s-123456-серверная-l';
import IIS123456СотрудникLForm from './forms/i-i-s-123456-сотрудник-l';
import IIS123456ДолжностьEForm from './forms/i-i-s-123456-должность-e';
import IIS123456ОтчетОСервереEForm from './forms/i-i-s-123456-отчет-о-сервере-e';
import IIS123456РасположениеEForm from './forms/i-i-s-123456-расположение-e';
import IIS123456СенсорыEForm from './forms/i-i-s-123456-сенсоры-e';
import IIS123456СервернаяEForm from './forms/i-i-s-123456-серверная-e';
import IIS123456СотрудникEForm from './forms/i-i-s-123456-сотрудник-e';
import IIS123456ДолжностьModel from './models/i-i-s-123456-должность';
import IIS123456КонтроллерModel from './models/i-i-s-123456-контроллер';
import IIS123456ОтчетОСервереModel from './models/i-i-s-123456-отчет-о-сервере';
import IIS123456РасположениеModel from './models/i-i-s-123456-расположение';
import IIS123456СенсорыModel from './models/i-i-s-123456-сенсоры';
import IIS123456СервернаяModel from './models/i-i-s-123456-серверная';
import IIS123456СотрудникModel from './models/i-i-s-123456-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-123456-должность': IIS123456ДолжностьModel,
    'i-i-s-123456-контроллер': IIS123456КонтроллерModel,
    'i-i-s-123456-отчет-о-сервере': IIS123456ОтчетОСервереModel,
    'i-i-s-123456-расположение': IIS123456РасположениеModel,
    'i-i-s-123456-сенсоры': IIS123456СенсорыModel,
    'i-i-s-123456-серверная': IIS123456СервернаяModel,
    'i-i-s-123456-сотрудник': IIS123456СотрудникModel
  },

  'application-name': '123456',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '123456',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '123456',
          title: '123456'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        123456: {
          caption: '123456',
          title: '123456',
          'i-i-s-123456-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-123456-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-123456-отчет-о-сервере-l': {
            caption: 'Отчет о сервере',
            title: ''
          },
          'i-i-s-123456-серверная-l': {
            caption: 'Серверная',
            title: ''
          },
          'i-i-s-123456-расположение-l': {
            caption: 'Расположение',
            title: ''
          },
          'i-i-s-123456-сенсоры-l': {
            caption: 'Сенсоры',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-123456-должность-l': IIS123456ДолжностьLForm,
    'i-i-s-123456-отчет-о-сервере-l': IIS123456ОтчетОСервереLForm,
    'i-i-s-123456-расположение-l': IIS123456РасположениеLForm,
    'i-i-s-123456-сенсоры-l': IIS123456СенсорыLForm,
    'i-i-s-123456-серверная-l': IIS123456СервернаяLForm,
    'i-i-s-123456-сотрудник-l': IIS123456СотрудникLForm,
    'i-i-s-123456-должность-e': IIS123456ДолжностьEForm,
    'i-i-s-123456-отчет-о-сервере-e': IIS123456ОтчетОСервереEForm,
    'i-i-s-123456-расположение-e': IIS123456РасположениеEForm,
    'i-i-s-123456-сенсоры-e': IIS123456СенсорыEForm,
    'i-i-s-123456-серверная-e': IIS123456СервернаяEForm,
    'i-i-s-123456-сотрудник-e': IIS123456СотрудникEForm
  },

});

export default translations;
