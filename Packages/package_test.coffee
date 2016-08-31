
e = require('./package-entry')

describe('package_test', ->
  global.package_test_ran = true
  it('exports accordingly', ->
    assert.equal(e.name, 'package-entry')
    assert.equal(e.rel.name, 'package-include')
    assert.equal(e.abs.name, 'package-include')
  )

  it("loads yaml", ->
    assert.equal(e.yml.name, 'package.yaml')
  )
)
