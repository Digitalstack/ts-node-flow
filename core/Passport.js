"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStrategy = require('passport-local').Strategy;
var UserModel_1 = require("../app/Home/Models/UserModel");
var PassportConfig = (function () {
    function PassportConfig() {
        this.initialize;
    }
    PassportConfig.prototype.initialize = function (passport) {
        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });
        passport.deserializeUser(function (id, done) {
            UserModel_1.default.findBy('id', id, function (err, res) {
                done(err, res);
            });
        });
        passport.use('local-signup', new LocalStrategy({
            passReqToCallback: true
        }, function (req, email, password, done) {
            //process.nextTick(function() {
            UserModel_1.default.findBy('email', req.body.email, function (err, res) {
                if (err)
                    return done(err);
                if (res) {
                    console.log('Email already taken');
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                }
                else {
                    console.log('newUser');
                }
            });
            //});
        }));
    };
    return PassportConfig;
}());
;
exports.default = new PassportConfig;
