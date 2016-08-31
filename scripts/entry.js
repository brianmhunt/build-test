
function trial() {
  console.log("Covered? Changed?")
}

describe("inline test", function () {
  it("is run.", () => assert.ok(true))
})


module.exports = {
    ic_direct: require('scripts/include.coffee'),
    ic_rel: require('./include.coffee'),
    ij_direct: require('scripts/include'),
    ij_rel: require('./scripts/include'),
    yaml: require('./include.yaml'),
}
