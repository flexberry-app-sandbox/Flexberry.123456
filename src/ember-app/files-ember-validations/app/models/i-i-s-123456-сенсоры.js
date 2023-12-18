import {
  defineNamespace,
  defineProjections,
  Model as СенсорыMixin
} from '../mixins/regenerated/models/i-i-s-123456-сенсоры';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СенсорыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
