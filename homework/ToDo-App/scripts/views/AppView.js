var AppView = Backbone.View.extend({
  el: '#app-view',
  initialize: function() {


    _.bindAll(
      this,
      'onCreateButtonClick',
      'onToDoAdd'

    );
    this.$createButton = $('#create-button');
    this.$toDoBoard = $('#todo-board');
    this.$itemName = $('#item-name');
    this.createToDoCollection = new myToDoCollection();


    this.$createButton.on('click', this.onCreateButtonClick);
    this.createToDoCollection.on('add', this.onToDoAdd);

  },

  onCreateButtonClick: function () {

    var newToDoModel = new myToDoModel();
    newToDoModel.save({
      todo: this.$itemName.val()
    });
    this.createToDoCollection.add(newToDoModel);
    this.$itemName.val('');
  },


  onToDoAdd: function(newToDoModel) {
    var newToDoView = new ToDoView({model: newToDoModel});
    this.$toDoBoard.append(newToDoView.$el);

  }
});


