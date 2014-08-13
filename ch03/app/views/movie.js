var Backbone = require('backbone');
//var _ = require('underscore');
var $ = require('jquery-untouched');

Cocktail.mixin(Movie, App.SelectMixin);

/*
var Selection = Backbone.Model.extend({
    defaults: {
	"selected": 1
    }
});
module.exports = Selection;
*/

var MovieView = Backbone.View.extend({
    tagName: 'article',
    className: 'movie',
    template: '<h1><%= title %></hr></h1>',

    events: {
	'click': '_selectMovie'
    },

    _selectMovie: function(ev){
	ev.preventDefault();
	if (!this.model.get('selected')){
	    this.model.collection.resetSelected();
	    this.model.collection.selectByID(this.model.id);
	}
    }

    render: function(){
	var tmpl = _.template(this.template);
	this.$el.html(tmpl(this.model.toJSON()));
	var selected = (this.selection.get('selected') === this.model.id);
	this.$el.toggleClass('selected', selected);
	return this;
    },
    initialize: function(){
	this.selection = options.selection;
	this.listenTo(this.model, 'change:selected', this.render);
    },
});
module.exports = MovieView;
