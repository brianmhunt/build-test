
e = require('./package-entry')

describe('package_test', ->
  before(() => global.ran.push('package'))
  it('exports accordingly', ->
    assert.equal(e.name, 'package-entry')
    assert.equal(e.rel.name, 'package-include')
    assert.equal(e.abs.name, 'package-include')
  )

  it("loads yaml", ->
    assert.equal(e.yml.name, 'package.yaml')
  )
)
