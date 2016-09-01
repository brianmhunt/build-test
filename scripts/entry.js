//
// entry.js
//
// This file should be run once before any tests.  It sets up test-wide
// calls e.g. beforeEach.
//
global.assert = chai.assert
global.bootstrapped = true


before(() => global.ran = [])

beforeEach(() => {
  global.beforeEach_run = true
})


after(() => {
  // console.log(global.ran)
  assert.include(global.ran, 'basic-js')
  assert.include(global.ran, 'basic-cs')
  assert.include(global.ran, 'include-cs')
  assert.include(global.ran, 'tt-cs')
  assert.include(global.ran, 'tt-js')
  assert.include(global.ran, 'package')
})


describe("inline test", function () {
  it("is run.", () => assert.ok(true))
})


global.entry_run = true



var testsPath = require.context('./tests', true, /\.(js|coffee)$/)
testsPath.keys().forEach(testsPath)

var testsPath = require.context('./', true, /_tests?\.(js|coffee)$/)
testsPath.keys().forEach(testsPath)

var testsPath = require.context('../Packages', true, /_tests?\.(js|coffee)$/)
testsPath.keys().forEach(testsPath)
