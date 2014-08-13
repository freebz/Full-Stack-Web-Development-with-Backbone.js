var Backbone = require('backbone');
var $ = require('jquery-untouched');

var MovieView = Backbone.View.extend({
    tagName: 'article',
    className: 'movie',
    template: '<h1><%= title %><hr></h1>',

    events: {
	'click': '_selectMovie'
    },

    _selectMovie: function(ev) {
	ev.preventDefault();
	this.selection.set('selected', this.model.id);
    },

    render: function() {
	var tmpl = _.template(this.template);
	this.$el.html(tmpl(this.model.toJSON()));
	var selected = (this.selection.get('selected') === this.model.id);
	this.$el.toggleClass('selected', selected);
	return this;
    },
    initialize: function(options) {
	this.selection = options.selection;
	this.listenTo(this.selection, 'change:selected', this.render);
    }
});
module.exports = MovieView;
