"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ShowAction_1 = require("./Actions/ShowAction");
var HomeController = (function () {
    function HomeController() {
        this.router = express_1.Router();
        this.routes;
    }
    HomeController.prototype.routes = function () {
        this.router.get('/', function (req, res, next) { return ShowAction_1.default.invoke(req, res, next); });
    };
    return HomeController;
}());
exports.HomeController = HomeController;
var HomeRoutes = new HomeController();
HomeRoutes.routes();
exports.default = HomeRoutes.router;
