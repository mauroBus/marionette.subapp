define(
  [
    'underscore',
    'marionette'
  ],
  function(_, Marionette) {

  Marionette.SubApp = Marionette.Layout.extend({

    router: null,
    controller: null,
    subViews: {},
    appRoutes: {},

    constructor: function(options) {
      this.controller = this.getController();

      this._initRouter();

      this.subViews = this.getSubViews();

      Marionette.Layout.prototype.constructor.call(this, options);
    },

    // placeholder
    getController: function() {},

    // placeholder
    getSubViews: function() {},

    _initRouter: function() {
      this.router = new Marionette.AppRouter({
        controller: this.controller,
        appRoutes: this.appRoutes
      });
    },

    onShow: function() {
      _.each(this.subViews, function(view, index) {
        this[index].show(view);
      }, this);
    }
  });

  return Marionette.SubApp;
});
