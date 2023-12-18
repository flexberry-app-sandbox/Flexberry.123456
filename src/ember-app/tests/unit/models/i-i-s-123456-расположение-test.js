import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-123456-расположение', 'Unit | Model | i-i-s-123456-расположение', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-123456-должность',
    'model:i-i-s-123456-контроллер',
    'model:i-i-s-123456-отчет-о-сервере',
    'model:i-i-s-123456-расположение',
    'model:i-i-s-123456-сенсоры',
    'model:i-i-s-123456-серверная',
    'model:i-i-s-123456-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
