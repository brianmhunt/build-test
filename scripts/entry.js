//
// entry.js
//
// This file should be run once before any tests.  It sets up test-wide
// calls e.g. beforeEach.
//

beforeEach(() => global.beforeEach_run = true)


afterEach(() => {
  assert.ok(global.basic_ran)
  assert.ok(global.basic_js_ran)
  assert.ok(global.tests_test_ran)
  assert.ok(global.tests_test_js_ran)
  assert.ok(global.include_test_ran)
  assert.ok(global.package_test_ran)
})


describe("inline test", function () {
  it("is run.", () => assert.ok(true))
})


global.entry_run = true


module.exports = {
    ic_direct: require('scripts/include.coffee'),
    ic_rel: require('./include.coffee'),
    ij_direct: require('scripts/include'),
    ij_rel: require('./scripts/include'),
    yaml: require('./include.yaml'),
}
