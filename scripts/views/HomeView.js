var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var homeTemplate = require('../templates/home.hbs');

var constants = require("../data/constants");

var API_KEY = constants.API_KEY;
var USER_ID = constants.USER_ID;

var Series = require("../collections/Series");

var HomeView = Backbone.View.extend({

  el: 'ul',

  template: homeTemplate,

  initialize: function(){
    $('body').addClass('loading');

    var method = "method=flickr.photosets.getList&",
           api = "api_key="+ API_KEY +"&",
          user = "user_id="+ USER_ID + "&",
        format = "format=json&nojsoncallback=1",
         query = method + api + user + format;

    this.collection = new Series();

    this.listenTo(this.collection, 'add', this.render);

    this.collection.fetch({data: query});
  },

  render: function(){
    debugger;
    $('body').removeClass('loading');

    $("#app").html(this.template({collection: this.collection.toJSON()}));

    return this;
  }


});

module.exports = HomeView;