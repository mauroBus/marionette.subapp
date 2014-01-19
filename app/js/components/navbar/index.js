define(
  [
    'jquery',
    'underscore',
    'marionette',
    'jst!./_index.html'
  ],
  function($, _, Marionette, template) {

  var NavBarView = Marionette.ItemView.extend({

    template: template,

    className: 'js-navbar-view',

    serializeData: function() {
      return {
        items: [
          {
            name: 'curl'
          },
          {
            name: 'larry'
          },
          {
            name: 'moe'
          }
        ]
      };
    }
  });

  return NavBarView;
});
