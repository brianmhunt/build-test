'use strict'

const fs = require('fs')
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
    env: config.wallaby.env,
    testFramework: 'mocha',
    debug: config.wallaby.debug,
    workers: config.wallaby.workers,

    compilers: {
      '**/*.js': wallaby.compilers.babel({}),
      '**/*.coffee': wallaby.compilers.coffeeScript({noFileRename: true})
    },

    preprocessors: {
      '**/*.yaml': file => JSON.stringify(yaml.load(file.content))
    },

    postprocessor: wallabyPostprocessor,

    setup: () => window.__moduleBundler.loadTests()
  }
}
