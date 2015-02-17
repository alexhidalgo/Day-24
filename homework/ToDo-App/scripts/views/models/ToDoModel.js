var myToDoModel = Backbone.Model.extend({
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/alex-todo-items',
	defaults: {
		todo: null,
		completed: true
	},
	idAttribute: '_id'
});
