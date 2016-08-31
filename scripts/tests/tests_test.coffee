

describe('tests_test', ->
  it('is called', -> assert.ok(true))
  it('tests for bootstrapped global', ->
    assert.strictEqual(bootstrapped, true)
  )
)
