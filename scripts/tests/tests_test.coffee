
subdir = require('./subdir.yaml')

describe('tests_test', ->
  it('is called', -> assert.ok(true))
  it('tests for bootstrapped global', ->
    assert.strictEqual(bootstrapped, true)
  )
  it("loads subdir yaml", ->
    assert.equal(subdir.name, 'subdir.yaml')
  )
)
