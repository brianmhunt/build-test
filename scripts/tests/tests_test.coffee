

describe('tests_test', ->
  it('is called', -> global.tests_test_ran = true)
  it('tests for bootstrapped global', ->
    assert.strictEqual(bootstrapped, true)
  )
  it("loads subdir yaml", ->
    subdir = require('./subdir.yaml')
    assert.equal(subdir.name, 'subdir.yaml')
  )
)
