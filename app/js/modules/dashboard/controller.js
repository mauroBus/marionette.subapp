define(
  [
    'marionette'
  ],
  function(Marionette) {
    'use strict';

    var Controller = Marionette.Controller.extend({

      module: null,

      initialize: function(module) {
        this.module = module;
      },

      onSubModule1: function() {
        this.module.showSubModule1();
      },

      onSubModule2: function() {
        this.module.showSubModule2();
      }
    });

    return Controller;
});
