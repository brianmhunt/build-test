
e = require('./package-entry')

describe('package_test', ->
  it('exports accordingly', ->
    assert.equal(e.name, 'package-entry')
    assert.equal(e.rel.name, 'package-include')
    assert.equal(e.abs.name, 'package-include')
  )
)
