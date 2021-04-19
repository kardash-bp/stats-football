"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strToDate = void 0;
var strToDate = function (dateStr) {
    var parts = dateStr.split('/').map(function (val) { return parseInt(val); });
    return new Date(Date.UTC(parts[2], parts[1] - 1, parts[0]));
};
exports.strToDate = strToDate;
