import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('forecast16', { path: '/forecast16/:city' });
  this.route('cityforecast', { path: '/cityforecast/:index/:city' });

});

export default Router;
