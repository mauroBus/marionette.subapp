define(
  [
    'underscore',
    'marionette',
    'jst!./_index.html',
    'vendor/shortcut/shortcut'
  ],
  function(_, Marionette, template, Shortcut) {

  var Dummy = Marionette.ItemView.extend({
    template: template,
    className: 'js-dummy-view',

    msg: null,

    initialize: function(options) {
      this.msg = (options && options.msg) || 'This is a Dummy View';
    },

    templateHelpers: function() {
      return {
        msg: this.msg
      };
    }
  });

  _.extend(Dummy.prototype, ShortcutRegion);

  // Dummy.extend(ShortcutRegion);

  window.D = new Dummy({
    el: '#dummy'
  });
  D.plug();

  setTimeout(function() {
    D.unPlug();
  }, 3000);

  return Dummy;
});
