"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController = /** @class */ (function () {
    function AuthController() {
        this.router = express_1.Router();
        this.routes;
    }
    AuthController.prototype.routes = function () {
        //this.router.get('/register', (req, res, next) => RegisterShowAction.invoke(req, res, next));
    };
    return AuthController;
}());
exports.AuthController = AuthController;
var AuthRoutes = new AuthController();
AuthRoutes.routes();
exports.default = AuthRoutes.router;
