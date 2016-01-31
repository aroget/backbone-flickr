var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var constants = require("../data/constants");

var API_KEY = constants.API_KEY;
var USER_ID = constants.USER_ID;

var Series = require("../collections/Series");

var seriesTemplate = require('../templates/series.hbs');

var SeriesView = Backbone.View.extend({

  el: 'ul',

  tagName: 'photo-item',

  template: seriesTemplate,
  
  initialize: function(seriesId){
    $('body').addClass('loading');

    var method = "method=flickr.photosets.getPhotos&",
           api = "api_key="+ API_KEY +"&",
      photoset = "photoset_id="+ seriesId +"&",
          user = "user_id="+ USER_ID + "&",
        format = "format=json&nojsoncallback=1",
         query = method + api + photoset + user + format;

    this.collection = new Series();

    this.listenTo(this.collection, 'add', this.render);

    this.collection.fetch({data: query});
  },

  render: function(model){
    $('body').removeClass('loading');
    
    $("#app").html(this.template({collection: this.collection.toJSON()}));

    return this;
    
  }
});

module.exports = SeriesView;