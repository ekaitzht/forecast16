import Ember from 'ember';

export function formatDate(date /*, hash*/) {
    return moment.unix(date[0]).calendar();

}

export default Ember.Helper.helper(formatDate);
