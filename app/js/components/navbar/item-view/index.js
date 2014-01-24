define(
  [
    'underscore',
    'marionette',
    'jst!./_index.html'
  ],
  function(_, Marionette, template) {

  var NavBarItemView = Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    className: 'js-navbar-item-view',

    events: {
      'click': 'onViewClick'
    },

    onViewClick: function() {
      var modelId = this.model.get('Id');
      this.trigger('navigate', 'item-' + modelId );
    }
  });

  return NavBarItemView;
});
