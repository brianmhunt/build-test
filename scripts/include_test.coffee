
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
  global.include_test_ran = true

  it("loads coffeescript", ->
    assert.equal(includes.ic_abs.name, 'include.coffee')
    assert.equal(includes.ic_rel.name, 'include.coffee')
  )

  it("loads js", ->
    assert.equal(includes.ij_abs.name, 'include.js')
    assert.equal(includes.ij_rel.name, 'include.js')
  )

  it("loads yaml", ->
    assert.equal(includes.iy_abs.name, 'include.yaml')
    assert.equal(includes.iy_rel.name, 'include.yaml')
  )

  it("loads package", ->
    assert.equal(includes.pj.rel.name, 'package-include')
    assert.equal(includes.pj.abs.name, 'package-include')
  )

  it("es6ified", ->
    assert.equal(includes.ij_abs.es6fn(), 'es6 BOO')
  )

  it("has __filename set", ->
    assert.ok(__filename, "include_test.coffee")
  )

  it("has __dirname set", ->
    # Need to strip lead on proper __dirname
    # (but '/' is not correct)
    assert.ok(__dirname.endsWith("/scripts"))
  )

  it("expects global and window to be same", ->
    assert.strictEqual(window, global)
  )

  it("expects entry_run to be true", ->
    assert.strictEqual(global.entry_run, true)
  )

  it("expects global.beforeeach_run to be true", ->
    assert.strictEqual(global.beforeeach_run, true)
  )
)
