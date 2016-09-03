
describe('include_test', ->
  before(() -> global.ran.push('include-cs'))

  it("is run", ->

    throw new Error("This test should fail.")

  )
)
