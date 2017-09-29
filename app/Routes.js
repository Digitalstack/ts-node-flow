"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var HomeController_1 = require("./Home/HomeController");
var AuthController_1 = require("./Auth/AuthController");
var Routes = (function () {
    function Routes() {
    }
    Routes.prototype.initialize = function (app) {
        var router;
        router = express_1.Router();
        // Routes
        app.use('/', HomeController_1.default);
        app.use('/', AuthController_1.default);
    };
    return Routes;
}());
exports.Routes = Routes;
function isAuth(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
exports.default = new Routes;
