import {
  defineNamespace,
  defineProjections,
  Model as СервернаяMixin
} from '../mixins/regenerated/models/i-i-s-123456-серверная';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СервернаяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
