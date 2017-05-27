const _ = require('lodash');
const err_code = require('../config/errorCode')
exports.handleQuerySuccess = function (ctx, opts) {
    ctx.status = 200;
    ctx.body = Object.assign({
        resultCode: 1,
        errcode: '',
        errmsg: ''
    }, opts)
}

exports.handleQueryFail = function (ctx, errcode, errmsg) {
    ctx.status = 200;
    ctx.body = {
        resultCode: -1,
        errcode,
        errmsg,
        data: ''
    }
}
exports.handleEmptyParams = function (ctx, params) {
    for (key in params) {
        if (_.isUndefined(params[key])) {
            handleQueryFail(ctx, err_code.Missing_PARAM, `need ${key} param`)
        }
    }
}