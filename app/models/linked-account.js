import Base from 'client/models/base';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Base.extend({
  externalUserId: attr('string'),
  token: attr('string'),
  type: attr('string'),

  shareFrom: attr('boolean'),
  shareTo: attr('boolean'),
  syncTo: attr('boolean'),

  user: belongsTo('user')
});
