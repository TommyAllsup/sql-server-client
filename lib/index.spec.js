/* global describe, it */

var expect = require('chai').expect
var sqlServerClient = require('./index')

describe('sql server client', function () {
  it('should export a function', function () {
    expect(sqlServerClient).to.be.a('function')
  })
})
