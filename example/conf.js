
var browsers = require('./browsers.js')

// An example configuration file.
var config = {
  directConnect: false,

  // Capabilities to be passed to the webdriver instance.
 
  baseUrl:'http://www.angularjs.org',
  allScriptsTimeout:30000,
  getPageTimeout:30000,

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',
  onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'TEST-report.xml',
            savePath: 'reports'
        }));
    },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 300000
  },
  sauceUser: 'sachink12',
  sauceKey: 'ed57321d-2274-479a-898c-158b95c97d31',


};

config.multiCapabilities = [

    browsers.chrome,
    browsers.firefox,
    browsers.safari,
    browsers.ie9,


]
 exports.config = config;   


