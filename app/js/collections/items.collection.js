define(
  [
    'backbone',
    'models/item.model',
    'services-config/services.config'
  ],
  function(Backbone, ItemModel, URLs) {

  var ItemsCollection = Backbone.Collection.extend({
    model: ItemModel,
    url: URLs['api/getAllItems']
  });

  return ItemsCollection;
});
