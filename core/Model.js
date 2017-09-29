"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataAccess_1 = require("./DataAccess");
var Model = (function () {
    function Model(table) {
        this.table = table;
    }
    Model.prototype.getTable = function () {
        return this.table;
    };
    Model.prototype.findBy = function (key, value, callback) {
        DataAccess_1.default.connection.query('SELECT * FROM ' + this.table + ' WHERE ' + key + ' = ? LIMIT 1', [value], function (err, res) {
            if (callback) {
                callback(err, res[0]);
            }
        });
    };
    return Model;
}());
exports.Model = Model;
