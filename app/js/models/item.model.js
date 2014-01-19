define(
  [
    'backbone'
  ],
  function(Backbone) {

    var ItemModel = Backbone.Model.extend({
      defaults: {
        Id: null,
        Name: null,
        Age: null,
        Genere: null
      }
    });

    return ItemModel;
  }
);
