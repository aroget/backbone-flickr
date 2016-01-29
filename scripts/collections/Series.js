var Backbone = require('backbone');

var PhotoModel = require('../models/Photo');

var Series = Backbone.Collection.extend({
	
	model: PhotoModel,

	url: 'https://api.flickr.com/services/rest/'
});

module.exports = Series;
