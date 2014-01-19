define(
  [
    'jquery',
    'underscore',
    'marionette',
    'jst!./_index.html',
    'collections/items.collection',
    './item-view/index'
  ],
  function($, _, Marionette, template, ItemsCollection, NavBarItemView) {

  var NavBarView = Marionette.CompositeView.extend({

    template: template,

    className: 'js-navbar-view',

    collection: null,

    itemView: NavBarItemView,

    itemViewContainer: 'ul',

    initialize: function(options) {
      this.collection = new ItemsCollection();
      this.listenTo(this.collection, 'change', this.render, this);
    },

    onBeforeRender: function() {
      this.collection.fetch();
    }
  });

  return NavBarView;
});
