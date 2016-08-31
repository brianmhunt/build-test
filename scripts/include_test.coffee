
includes = {
  ic_abs: require('scripts/include.coffee'),
  ic_rel: require('./include.coffee'),
  ij_abs: require('scripts/include'),
  ij_rel: require('./include'),
  iy_abs: require('scripts/include.yaml'),
  iy_rel: require('./include.yaml'),
}

describe('include_test', ->
  it("loading coffeescript", ->
    assert.equal(includes.ic_abs.name, 'include.coffee')
    assert.equal(includes.ic_rel.name, 'include.coffee')
  )

  it("loading js", ->
    assert.equal(includes.ij_abs.name, 'include')
    assert.equal(includes.ij_rel.name, 'include')
  )

  it("loading yaml", ->
    assert.equal(includes.ij_abs.name, 'include.yaml')
  )

  it("loading package", ->
    assert.equal(includes.pj.rel.name, 'package-include')
    assert.equal(includes.pj.abs.name, 'package-include')
  )

  it("es6ified", ->
    assert.equal(includes.ij_abs.es6fn(), 'es6 BOO')
  )
)
