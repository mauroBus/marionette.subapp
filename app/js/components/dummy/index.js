define(
  [
    'underscore',
    'marionette',
    'jst!./_index.html'
  ],
  function(_, Marionette, template) {

  var Dummy = Marionette.ItemView.extend({
    template: template,
    className: 'js-dummy-view'
  });

  return Dummy;
});
