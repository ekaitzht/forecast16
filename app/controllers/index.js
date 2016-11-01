import Ember from 'ember';

export default Ember.Controller.extend({
	search:undefined,
	actions: {
    	send: function() {
    		this.transitionToRoute('forecast16', this.get('search'));
    	}
  	}

});
