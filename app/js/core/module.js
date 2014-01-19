define(
  [
    'underscore',
    'marionette'
  ],
  function(_, Marionette) {

  var DashboardModule = Marionette.Layout.extend({

    router: null,
    controller: null,
    subViews: {},
    appRoutes: {},

    initialize: function(app) {
      this.controller = this.getController();

      this._initRouter();

      this.subViews = this.getSubViews();
    },

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

  return DashboardModule;
});
