var myToDoCollection = Backbone.Collection.extend({
	url: 'http://tiny-pizza-server.herokuapp.com/collections/alex-todo-items',
	model: myToDoModel,
});

