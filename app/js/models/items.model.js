define(
  [
    'backbone',
    'service-config/services.config'
  ],
  function(Backbone, URLs) {

    var ItemModel = Backbone.Model.extend({
      defaults: {
        id: null,
        name: null,
        age: null,
        genere: null
      },

      url: URL['api/getAllItems'],

      parse: function(data) {
        return {
          id: data.Id,
          name: data.Name,
          age: data.Age,
          genere: data.Genere
        };
      }
    });

    return ItemModel;
  }
);
