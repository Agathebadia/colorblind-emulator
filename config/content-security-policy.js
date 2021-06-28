type directiveName =
  // Fetch Directives
  | 'child-src'
  | 'connect-src'
  | 'default-src'
  | 'font-src'
  | 'frame-src'
  | 'image-src'
  | 'manifest-src'
  | 'media-src'
  | 'object-src'
  | 'prefetch-src'
  | 'script-src'
  | 'script-src-elem'
  | 'script-src-attr'
  | 'style-src'
  | 'style-src-elem'
  | 'style-src-attr'
  | 'worker-src'
  // Document Directives
  | 'base-uri'
  | 'plugin-types'
  | 'sandbox'
  // Navigation Directives
  | 'form-action'
  | 'frame-ancestors'
  | 'navigate-to'
  // Reporting Directives
  | 'report-uri'
  | 'report-to'
  // Directives Defined in Other Documents
  | 'block-all-mixed-content'
  | 'upgrade-insecure-requests'
  | 'require-sri-for';

interface EmberCLIContentSecurityPolicyConfig {
  // CSP is delivered via HTTP Header if delivery includes `"header"` and via
  // meta element if it includes `"meta"`.
  delivery?: string;

  // Controls if addon is enabled at all.
  enabled?: boolean;

  // Controls if addon causes tests to fail if they violate configured CSP
  // policy.
  failTests: true;

  // A hash of options representing a Content Security Policy. The key must be
  // a CSP directive name as defined by spec. The value must be an array of
  // strings that form a CSP directive value, most likely a source list, e.g.
  // {
  //   'default-src': ["'none'"],
  //   'style-src': ["'self'", 'examples.com']
  // }
  // Please refer to CSP specification for details on valid CSP directives:
  // https://w3c.github.io/webappsec-csp/#framework-directives
  policy?: {[key: directiveName]: string[]};

  // Controls if CSP is used in report only mode. For delivery mode `"header"`
  // this causes `Content-Security-Policy-Report-Only` HTTP header to be used.
  // Can not be used together with delivery mode `"meta"` as this is not
  // supported by CSP spec.
  reportOnly?: boolean;
}


module.exports = function (environment) {
  return {
    delivery: ['header'],
    policy: {
      // Deny everything by default
      'default-src': ["'self'"],
      // Allow fonts to be loaded from http://fonts.gstatic.com
      'font-src': ["'self'", 'http://fonts.gstatic.com'],
      'image-src': ["'self'", 'http://kit.fontawesome.com/b90c7f9273.js'],
      // Allow CSS loaded from https://fonts.googleapis.com
      'style-src': ["'self'", 'https://fonts.googleapis.com'],
      // Omit `media-src` from policy
      // Browser will fallback to default-src for media resources (which is 'none', see above)
      'media-src': null,
    },
    reportOnly: false,
  };
};

