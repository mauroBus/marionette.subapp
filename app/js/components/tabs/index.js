define(
  [
    'marionette',
    'jst!./_index.html',
    'collections/items.collection'
  ],
  function(Marionette, template, ItemsCollection) {

  var NavBarView = Marionette.Layout.extend({

    template: template,
    className: 'js-tabs-view',

    regions: {
      main: '[region="main"]'
    },

    tabs: null,

    events: {
      'click li.tab': '_onClickTab'
    },

    // 'options.tabs' is a hash like this:
    //  [
    //    {
    //      view: new ExamplesView(),
    //      text: 'Examples'
    //    },
    //    {
    //      view: new DummyView(),
    //      text: 'Dummy View'
    //    }
    //  ]
    initialize: function(options) {
      this.options = this.options || {};
      this.tabs = this.options.tabs || [];
    },

    templateHelpers: function() {
      return {
        tabs: this.tabs
      };
    },

    _onClickTab: function(event) {
      var tabId = $(event.target).attr('tabId');
      this.selectTab(tabId);
    },

    selectTab: function(tabId) {
      if (!this.tabs[tabId]) {
        throw new Error('Error in Tabs view: the tab id: "' + tabId + '" is not in this tabs view.');
      }
      var nextView = this.tabs[tabId].view;
      this.main.show(nextView);
    },

    // by default it selects the first tab.
    onShow: function() {
      this.selectTab(0);
    }

  });

  return NavBarView;
});
