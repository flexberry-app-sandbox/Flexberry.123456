import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.123456.caption'),
          title: i18n.t('forms.application.sitemap.123456.title'),
          children: [{
            link: 'i-i-s-123456-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.123456.i-i-s-123456-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.123456.i-i-s-123456-сотрудник-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-123456-должность-l',
            caption: i18n.t('forms.application.sitemap.123456.i-i-s-123456-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.123456.i-i-s-123456-должность-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-123456-отчет-о-сервере-l',
            caption: i18n.t('forms.application.sitemap.123456.i-i-s-123456-отчет-о-сервере-l.caption'),
            title: i18n.t('forms.application.sitemap.123456.i-i-s-123456-отчет-о-сервере-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-123456-серверная-l',
            caption: i18n.t('forms.application.sitemap.123456.i-i-s-123456-серверная-l.caption'),
            title: i18n.t('forms.application.sitemap.123456.i-i-s-123456-серверная-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-123456-расположение-l',
            caption: i18n.t('forms.application.sitemap.123456.i-i-s-123456-расположение-l.caption'),
            title: i18n.t('forms.application.sitemap.123456.i-i-s-123456-расположение-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-123456-сенсоры-l',
            caption: i18n.t('forms.application.sitemap.123456.i-i-s-123456-сенсоры-l.caption'),
            title: i18n.t('forms.application.sitemap.123456.i-i-s-123456-сенсоры-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})