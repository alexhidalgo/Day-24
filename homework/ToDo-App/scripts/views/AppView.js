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

    this.createToDoCollection.fetch();


    // var fetchItems = new ToDoView();
    // this.fetchItems.fetch();
    // this.$toDoBoard.append(fetchItems.$el);

    console.log('appview initialize');
  },

  onCreateButtonClick: function () {

    var newToDoModel = new myToDoModel();
    newToDoModel.save({
      todo: this.$itemName.val()
    });
    this.createToDoCollection.add(newToDoModel);
    this.$itemName.val('');

    // var newToDoModel = new myToDoModel({
    //   todo: this.$itemName.val()
    // });
    // this.createToDoCollection.add(newToDoModel);
    // newToDoModel.save();
    // newToDoModel.on('sync', function(model) {
    //   console.log(model);
    // });

  },


  onToDoAdd: function(myToDoModel) {
    var newToDoView = new ToDoView({model: myToDoModel});
    this.$toDoBoard.append(newToDoView.$el);

  }
});


