/*global require*/
'use strict';

require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore/underscore',

    'backbone': 'vendor/backbone/backbone',

    'backbone.babysitter': 'vendor/backbone.babysitter/lib/amd/backbone.babysitter',
    'backbone.wreqr': 'vendor/backbone.wreqr/lib/amd/backbone.wreqr',

    'marionette': 'vendor/marionette/lib/core/amd/backbone.marionette',

    'marionette.subapp': 'core/marionette.subapp',

    'text': 'vendor/requirejs-text/text',
    'jst': 'vendor/require-jst/jst'
  },

  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'marionette.subapp': {
      deps: ['marionette'],
      exports: 'MarioneteSubApp'
    }
  }
});

// Loading the marionette.subapp, that extends of "Marionette" object,
//  before starting the application.
require(
  [
    'require',
    'marionette.subapp'
  ],
  function(require, MarionetteSubApp) {
    'use strict';

    require(['app'], function(App) {
      App.start();
    });
  }
);
