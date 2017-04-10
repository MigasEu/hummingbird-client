import Component from 'ember-component';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import computed from 'ember-computed';
import { strictInvokeAction } from 'ember-invoke-action';

export default Component.extend({
  rating: computed(function() {
    const rating = get(this, 'activity.rating');
    if (get(this, 'activity.nineteenScale')) {
      return rating;
    }
    // Rating is in the old 0.5 <-> 5.0 format and has been ` / 2` by the rating transform.
    // Convert the rating to the new nineteen scale format
    return rating * 4;
  }).readOnly(),

  actions: {
    deleteActivity(activity) {
      set(this, 'isDeleteing', true);
      strictInvokeAction(this, 'deleteActivity', activity, () => {
        activity.deleteRecord();
        strictInvokeAction(this, 'onDelete', activity);
        set(this, 'isDeleteing', false);
      });
    }
  }
});
