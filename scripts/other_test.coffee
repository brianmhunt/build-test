
describe('include_test', ->
  it("imports a singleton", ->
    global.ehs.ias = true
    assert.strictEqual(global.ehs, require('./entry-helper'))
  )
)
