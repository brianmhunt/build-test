
const yaml = require('js-yaml')
const wallabyWebpack = require('wallaby-webpack');


module.exports = function(wallaby) {
  var wallabyPostprocessor = wallabyWebpack({
    resolve: {
      root: [
        wallaby.projectCacheDir
      ],
      loaders: [
        {test: /\.yaml$/, loader: 'json'}
      ]
    }
  });


  return {
    files: [
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      {pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false},

      {pattern: "scripts/**/*.js", load: false},
      {pattern: "Packages/**/*.js", load: false},
      {pattern: "scripts/**/*.coffee", load: false},
      {pattern: "Packages/**/*.coffee", load: false},
      {pattern: "scripts/**/*.yaml", load: false},

      "!**/*_test.js",
      "!**/*_test.coffee",
      "!scripts/tests/**/*",
    ],

    tests: [
      {pattern: 'scripts/tests/**/*.coffee', load: false},
      {pattern: 'scripts/tests/**/*.js', load: false},
      {pattern: 'scripts/**/*_test.js', load: false},
      {pattern: 'scripts/**/*_test.coffee', load: false},
      {pattern: 'Packages/**/*_test.js', load: false},
      {pattern: 'Packages/**/*_test.coffee', load: false},
    ],

    env: {
      kind: 'electron',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({}),
      '**/*.coffee': wallaby.compilers.coffeeScript({noFileRename: true}),
    },

    preprocessors: {
      '**/*.yaml': file => JSON.stringify(yaml.load(file.content))
    },

    postProcessor: wallabyPostprocessor,

    testFramework: 'mocha',

    bootstrap: function () {
      console.warn("Bootstrapping!", mocha)
    },

    setup: function () {
      window.assert = chai.assert
      window.bootstrapped = true
      window.__moduleBundler.loadTests();
    },

    debug: true,
    reportConsoleErrorAsError: true
  }
}
