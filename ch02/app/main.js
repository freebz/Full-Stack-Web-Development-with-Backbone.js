var Backbone = require('backbone');
var Movies = require('collections/movies');

var data = require('../movies.json');
var movies = new Movies(data);

Monitor = require('./monitor');
monitor = new Monitor(movies);

module.exports = movies;
