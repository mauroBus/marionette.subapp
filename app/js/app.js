define(
  [
    'underscore',
    'backbone',
    'marionette',
    'modules/dashboard/index'
  ],
  function(_, Backbone, Marionette, DashboardModule) {
  'use strict';

  var app = new Marionette.Application(),
    dashboard = new DashboardModule({ app: this });

  app.addRegions({
    main: 'main'
  });

  app.addInitializer(function() {
    this.main.show(dashboard);
  });

  app.addInitializer(function() {
    // Backbone History initialization
    Backbone.history.start();
  });

  return app;
});
