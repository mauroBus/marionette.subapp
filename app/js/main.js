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
    }
  }
});

require(
  [
    'jquery',
    'app'
  ],
  function($, app) {
    'use strict';

    app.start();
  }
);
