var Backbone = require('backbone');

// The UI for selecting a movie
var MovieView = require('views/movie');
var MoviesList = Backbone.View.extend({

    tagName: 'section',

    render: function(){
	var moviesView = this.collection.map(function(movie){
	    return (new MovieView({model : movie})).render().el;
	});
	this.$el.html(moviesView);
	return this;
    }
});
module.exports = MoviesList;
