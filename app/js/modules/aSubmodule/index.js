define(
  [
    'jquery',
    'underscore',
    'core/module',
    './controller',
    'jst!./_index.html',
    'components/tabs/index',
    'components/dummy/index'
  ],
  function($, _, Module, Controller, template, TabsView, DummyView) {

  var DashboardModule = Module.extend({

    template: template,
    className: 'js-dashboard-module',

    regions: {
      tabsView: '[region="tabs-view"]',
      footer: '[region="dummy"]'
    },

    appRoutes: {
      '': '',
      '': ''
    },

    initialize: function(app) {
      Module.prototype.initialize.call(this);
      // this._createNavBarView();
    },

    getController: function() {
      return new Controller(this);
    },

    getSubViews: function() {
      var tabsView = new TabsView({
        tabs: [
          {
            text: 'who cares',
            view: new DummyView({msg: 'JA!'})
          },
          {
            text: 'nothing really',
            view: new DummyView({msg: 'WOW!'})
          },
          {
            text: 'nobady',
            view: new DummyView({msg: 'BOOM!'})
          }
        ]
      });

      return {
        tabsView: tabsView,
        footer: new DummyView()
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
