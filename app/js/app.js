define(
  [
    'jquery',
    'underscore',
    'marionette',
    'modules/dashboard/index'
  ],
  function($, _, Marionette, DashboardModule) {
  'use strict';

  var app = new Marionette.Application(),
    dashboard = new DashboardModule({ app: this });

  app.addRegions({
    main: 'main'
  });

  app.addInitializer(function() {
    this.main.show(dashboard);
  })

  app.addInitializer(function() {
    // Backbone History initialization
    Backbone.history.start({
      pushState: false,
      root: ''
    });
    // Backbone.history.start();
  });

  // dashboard.on('ready', function() {
  // app.on('start', function() {
  //   Backbone.history.navigate('do-something', {
  //     trigger: true
  //   });
  // });

  return app;
});
