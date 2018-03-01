/**
 * This file is part of pigalle.http.parameter.query
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {QueryParam} = require('../lib/query-param')

describe('Class {QueryParam}', () => {
  it('should be a function', () => {
    (QueryParam).should.be.a.Function()
  })
})

describe('Create a instance of {QueryParam} ', () => {
  /**
   it('without argument should throw an {UndefinedError}', () => {
    (() => {
      QueryParam.factory()
    }).should.throw(UndefinedError)
  })
   */
  it('using factory() should be an instance of QueryParam', () => {
    (QueryParam.factory()).should.be.an.instanceOf(QueryParam)
  })
})
