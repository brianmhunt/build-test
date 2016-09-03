describe("basic", ->
  it("is run", ->
    global.ran.push('basic-cs')
    assert.ok(false)  # Throw an error to ensure this test runs.
  )
)
