"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Datetime = /** @class */ (function () {
    function Datetime() {
    }
    Datetime.prototype.getDateTime = function () {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDay();
        var hour = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        var fullDateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
        return fullDateTime;
    };
    return Datetime;
}());
exports.Datetime = Datetime;
exports.default = new Datetime;
