define(
  [
    'marionette',
    'jst!./_index.html',
    'collections/items.collection',
    './item-view/index'
  ],
  function(Marionette, template, ItemsCollection, NavBarItemView) {

  var NavBarView = Marionette.CompositeView.extend({

    template: template,

    className: 'js-navbar-view',

    itemView: NavBarItemView,

    itemViewContainer: 'ul',

    collection: null,

    initialize: function(options) {
      this.collection = new ItemsCollection();
    },

    onBeforeRender: function() {
      this.collection.fetch();
    }
  });

  return NavBarView;
});
