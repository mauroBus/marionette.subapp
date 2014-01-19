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
    className: 'js-navbar-item-view'
  });

  return NavBarItemView;
});
