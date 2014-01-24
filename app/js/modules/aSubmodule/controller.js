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

      onHandlePerson: function() {
        this.module.handlePerson();
      },

      onDoSomething: function() {
        this.module.doSomething();
      }
    });

    return Controller;
});
