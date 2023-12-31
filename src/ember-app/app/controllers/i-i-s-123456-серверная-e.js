import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-123456-серверная-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-123456-контроллер+сенсоры':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'тип',
            required: true,
            relationName: 'сенсоры',
            projection: 'СенсорыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
