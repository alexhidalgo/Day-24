var ToDoView = Backbone.View.extend({

	initialize: function() {

		_.bindAll(
			this,
			'onTextClick',
			'onModelChanged'
		);

		var itemTemplate = _.template($('#todo-item-view').html());

		this.$el = $(itemTemplate(this.model.attributes));
		// console.log(this.$el);

		this.$strikeText = $('.strike-text');

		this.$el.on('click', this.onTextClick);

		this.model.on('change:completed', this.onModelChanged);

	},

	onTextClick: function() {

		if(this.model.get('completed')) {
			this.model.set({
				completed: false
			});
		} else {
			this.model.set({
				completed: true
			});
		}
	},

	onModelChanged: function() {
		this.$el.toggleClass('strike-text');
	}

});
