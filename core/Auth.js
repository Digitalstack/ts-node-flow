"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Auth = (function () {
    function Auth() {
        this.router = express_1.Router();
        this.isAuth;
    }
    Auth.prototype.isAuth = function (req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    };
    Auth.prototype.initialize = function (app, passport) {
        app.use('/', this.router.post('/register', passport.authenticate('local-signup', {
            successRedirect: '/profile',
            failureRedirect: '/register',
            failureFlash: true
        })));
        app.use('/', this.router.get('/register', function (req, res, next) {
            res.render('home/register', { pageTitle: 'Inscription', message: 'message' });
        }));
    };
    return Auth;
}());
exports.Auth = Auth;
exports.default = new Auth;
