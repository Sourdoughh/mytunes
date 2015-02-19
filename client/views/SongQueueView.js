// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // this.collection.on('add', function(){ console.log('fired within SongQView') }, this);
    this.render();
  },

  render: function() {
    // return this.$el

    this.$el.children().detach();

    console.log('this is the collection ', this.collection);

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        console.log(song);
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
