'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'colorblind-simulator',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': ["'none'"],
      // Allow fonts to be loaded from http://fonts.gstatic.com
      'font-src': ["'self'", 'http://fonts.gstatic.com'],
      'script-src': ["'unsafe-eval'", "'self'"],
      'style-src-attr': ["'unsafe-inline'", "'self'"],
      // Allow CSS loaded from https://fonts.googleapis.com
      'style-src': ["'self'", 'https://fonts.googleapis.com'],
      'manifest-src': ["'self'"],
    },
    fontawesome: {
      defaultPrefix: 'fab' // brand-icons use fab prefix
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
