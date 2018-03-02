/**
 * This file is part of pigalle.http.request.parameter.query
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module query-param
 * @description An entity to use querystring params.
 * @example
 *
 * const {QueryParam} = require('@pigalle/http.request.parameter.query')
 *
 * const param = QueryParam.factory('param')
 *
 */

const {HttpParameterEntity} = require('@pigalle/entities.http.request.parameter')

class QueryParam extends HttpParameterEntity {

}

module.exports = {}
module.exports.QueryParam = QueryParam
