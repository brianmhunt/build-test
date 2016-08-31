

describe('tests_test', ->
  it('tt is called', -> global.ran.push('tt-cs'))
  it('tests for bootstrapped global', ->
    assert.strictEqual(bootstrapped, true)
  )
  it("loads subdir yaml", ->
    subdir = require('./subdir.yaml')
    assert.equal(subdir.name, 'subdir.yaml')
  )
)
