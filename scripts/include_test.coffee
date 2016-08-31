
includes = {
  ic_abs: require('scripts/include.coffee'),
  ic_rel: require('./include.coffee'),
  ij_abs: require('scripts/include'),
  ij_rel: require('./include'),
  iy_abs: require('scripts/include.yaml'),
  iy_rel: require('./include.yaml'),
  pj: require('Packages/package-entry')
}

describe('include_test', ->
  it("loading coffeescript", ->
    assert.equal(includes.ic_abs.name, 'include.coffee')
    assert.equal(includes.ic_rel.name, 'include.coffee')
  )

  it("loading js", ->
    assert.equal(includes.ij_abs.name, 'include.js')
    assert.equal(includes.ij_rel.name, 'include.js')
  )

  it("loading yaml", ->
    assert.equal(includes.iy_abs.name, 'include.yaml')
    assert.equal(includes.iy_rel.name, 'include.yaml')
  )

  it("loading package", ->
    assert.equal(includes.pj.rel.name, 'package-include')
    assert.equal(includes.pj.abs.name, 'package-include')
  )

  it("es6ified", ->
    assert.equal(includes.ij_abs.es6fn(), 'es6 BOO')
  )
)
