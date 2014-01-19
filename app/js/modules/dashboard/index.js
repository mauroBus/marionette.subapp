define(
  [
    'jquery',
    'underscore',
    'core/module',
    './controller',
    'jst!./_index.html',
    'components/navbar/index',
    'components/dummy/index'
  ],
  function($, _, Module, Controller, template, NavBarView, DummyView) {

  var DashboardModule = Module.extend({

    template: template,
    className: 'js-dashboard-module',

    regions: {
      navBar: '[region="nav-bar"]',
      dummy: '[region="dummy"]'
    },

    appRoutes: {
      'handle-person': 'onHandlePerson',
      'do-something': 'onDoSomething'
    },

    app: null,

    initialize: function(options) {
      Module.prototype.initialize.call(this);
      this.app = options.app;
    },

    getController: function() {
      return new Controller(this);
    },

    getSubViews: function() {
      return {
        navBar: new NavBarView(),
        dummy: new DummyView()
      };
    },

    handlePerson: function() {
      console.log('handling person');
    },

    doSomething: function() {
      console.log('i dont want to');
    }

  });

  return DashboardModule;
});
