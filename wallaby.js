
const path = require('path')
const yaml = require('js-yaml')
var wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {
  var wallabyPostprocessor = wallabyWebpack({
    resolve: {
      root: [
        wallaby.projectCacheDir
      ]
    },
    module: {
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
      '**/*.js': wallaby.compilers.babel({presets: ['es2015']}),
      '**/*.coffee': wallaby.compilers.coffeeScript({noFileRename: true})
    },

    preprocessors: {
      '**/*.yaml': file => JSON.stringify(yaml.load(file.content))
    },

    postprocessor: wallabyPostprocessor,

    testFramework: 'mocha',

    debug: true,

    setup: function () {
      window.assert = chai.assert
      window.bootstrapped = true
      // required to trigger test loading
      window.__moduleBundler.loadTests();
    }
  }
}
