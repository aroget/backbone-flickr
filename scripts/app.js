var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Router = require('./routers/routes');

new Router();

Backbone.history.start();