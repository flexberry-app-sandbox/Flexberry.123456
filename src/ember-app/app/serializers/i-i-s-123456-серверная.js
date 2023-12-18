import { Serializer as СервернаяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-123456-серверная';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СервернаяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
