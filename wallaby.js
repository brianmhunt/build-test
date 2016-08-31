
const yaml = require('js-yaml')
var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({
    // webpack options, such as
    module: {
      loaders: [
      {
        test: /.*\.js/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['2015']
        }
      }
      ]
    },
    // externals: { jquery: "jQuery" }
  }
);



// const buble = require('buble')
// const babel = {
//   core: require('babel-core'),
//   register: require('babel-register'),
// }
//
//
// function preprocessJavascript(file) {
//   return babel.core.transform(
//     file.content, {sourceMap: true, presets: ['es2015']}
//   )
// }


module.exports = function(wallaby) {
  return {
    files: [
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      {pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false},

      {pattern: "scripts/**/*.js", load: false},
      {pattern: "Packages/**/*.js", load: false},
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

    preprocessors: {
      // 'scripts/**/*.js': preprocessJavascript,

      // 'scripts/*.js': file => buble.transform(file.content, {file: file.path}),
      // 'Packages/*.js': file => buble.transform(file.content, {file: file.path}),
      '**/*.yaml': file => JSON.stringify(yaml.load(file.content))
    },

    postProcessors: wallabyPostprocessor,

    testFramework: 'mocha',

    bootstrap: function () {
      window.assert = chai.assert
      window.bootstrapped = true
    },

    setup: function () {
      // required to trigger test loading
      window.__moduleBundler.loadTests();
    },

    debug: true
  }
}
