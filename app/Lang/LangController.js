"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LangAction_1 = require("./Actions/LangAction");
var LangController = /** @class */ (function () {
    function LangController() {
        this.router = express_1.Router();
        this.routes;
    }
    LangController.prototype.routes = function () {
        this.router.get('/en', function (req, res, next) { return LangAction_1.default.set('en', req, res, next); });
        this.router.get('/fr', function (req, res, next) { return LangAction_1.default.set('fr', req, res, next); });
    };
    return LangController;
}());
exports.LangController = LangController;
var LangRoutes = new LangController();
LangRoutes.routes();
exports.default = LangRoutes.router;
