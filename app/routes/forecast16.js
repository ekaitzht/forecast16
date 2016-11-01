import Ember from 'ember';

export default Ember.Route.extend({

	 model(params) {


	 	// I know this is not the best pratice we should use
	 	// ember data model
	 	return Ember.$.getJSON( "http://api.openweathermap.org/data/2.5/forecast/daily?q="+params.city+"&units=metric&cnt=16&appid=1b377fbaf04b89cb52f810a2999bbd0d");



  	}
});
