define(
  [
    'marionette',
    './controller',
    'jst!./_index.html',
    'components/navbar/index',
    'components/dummy/index',
    'components/tabs/index',
  ],
  function(Marionette, Controller, template, NavBarView, DummyView, TabsView) {

  var DashboardModule = Marionette.SubApp.extend({

    template: template,
    className: 'js-dashboard-module',

    regions: {
      navBar: '[region="nav-bar"]',
      main: '[region="main"]'
    },

    // It could also be a function 'getSubViews',
    //  each key of this hash match each region defined above.
    subViews: {
      navBar: new NavBarView(),
      main: new DummyView()
      // tabs: new TabsView({
      //   tabs: [
      //     {
      //       text: 'who cares',
      //       view: new DummyView({msg: 'JA!'})
      //     },
      //     {
      //       text: 'nothing really',
      //       view: new DummyView({msg: 'WOW!'})
      //     },
      //     {
      //       text: 'nobady',
      //       view: new DummyView({msg: 'BOOM!'})
      //     }
      //   ]
      // })
    },

    // Each route match with a function handler resident in
    //  the SubApp's controller.
    appRoutes: {
      'submodule-1': 'onSubModule1',
      'submodule-2': 'onSubModule2'
    },

    app: null,

    initialize: function(options) {
      this.app = options.app;
    },

    getController: function() {
      return new Controller(this);
    },

    // getSubViews: function() {
    //   return {
    //     navBar: new NavBarView(),
    //     dummy: new DummyView()
    //   };
    // },

    showSubModule1: function() {
      console.log('handling person');
    },

    showSubModule2: function() {
      console.log('i dont want to');
    }

  });

  return DashboardModule;
});
