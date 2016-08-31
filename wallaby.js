'use strict'

const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const wallabyWebpack = require('wallaby-webpack')

const config = yaml.load(fs.readFileSync('config.yaml'))


module.exports = function (wallaby) {
  const WALLABY_WEBPACK_CONFIG = _.extend(config.wallaby.webpack, {
    resolve: { root: [ wallaby.projectCacheDir ] }
  })

  var wallabyPostprocessor = wallabyWebpack(WALLABY_WEBPACK_CONFIG)

  return {
    files: config.wallaby.files,
    tests: config.wallaby.tests,
    env: { kind: 'electron', },
    testFramework: 'mocha',
    // workers: 1,
    debug: true,

    compilers: {
      // '**/*.js': wallaby.compilers.babel({presets: ['es2015']}),
      '**/*.coffee': wallaby.compilers.coffeeScript({noFileRename: true})
    },

    preprocessors: {
      '**/*.yaml': file => JSON.stringify(yaml.load(file.content))
    },

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.assert = chai.assert
      window.expect = chai.expect
      window.bootstrapped = true
      window.__moduleBundler.loadTests()
    },

    workers: {
      initial: 1,
      regular: 1
    }

  }
}
