var Backbone = require('backbone');

var HomeView = require('../views/HomeView');
var SeriesView = require('../views/SeriesView');

var Router = Backbone.Router.extend({

	routes:{
		'' : 'index',
		'series/:id' : 'series'
	},

	index: function(){
		this.view = new HomeView();
	},

	series: function(seriesId){
		this.view = new SeriesView(seriesId);
	}

});

module.exports = Router;

