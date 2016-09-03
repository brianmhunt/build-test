
describe('include_test', ->
  before(() -> global.ran.push('include-cs'))

  it("should throw an error here -- just to prove that the test ran", ->
    throw new Error("Comment/skip this when it works.")
  )

  it("has things from entry.js", ->
    # These assertions should not fail; i.e. we expect
    # bootstrapped and beforeEach_run to be true.
    assert.ok(global.bootstrapped)
    assert.ok(global.beforeEach_run)
    assert.ok(global.helper)
  )
)
