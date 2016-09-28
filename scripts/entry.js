//
// entry.js
//
// This file should be run once before any tests.  It sets up test-wide
// calls e.g. beforeEach.
//

global.assert = chai.assert
global.ehs = require('./entry-helper')
global.ehs.entry = true
