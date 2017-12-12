"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStrategy = require('passport-local').Strategy;
var UserModel_1 = require("../app/User/Models/UserModel");
var DataAccess_1 = require("./DataAccess");
var Datetime_1 = require("./Datetime");
var bcrypt = require("bcryptjs");
var PassportConfig = /** @class */ (function () {
    function PassportConfig() {
        this.initialize;
    }
    PassportConfig.prototype.initialize = function (passport) {
        console.log('Passport initialization');
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (id, done) {
            UserModel_1.default.findBy('id', id, function (err, res) {
                done(err, res);
            });
        });
        passport.use('local-signup', new LocalStrategy({
            passReqToCallback: true
        }, function (req, email, password, done) {
            console.log('local signup');
            process.nextTick(function () {
                UserModel_1.default.findBy('email', req.body.email, function (err, res) {
                    if (err)
                        return done(err);
                    if (res) {
                        console.log('Email already taken');
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    }
                    else {
                        var userData = {
                            username: req.body.username,
                            email: req.body.email,
                            avatar: 'default.png',
                            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null),
                            created_at: Datetime_1.default.getDateTime()
                        };
                        DataAccess_1.default.connection.query('INSERT INTO users SET ?', [userData], function (err, res) {
                            var userID = res.id;
                            return done(null, userID);
                        });
                    }
                });
            });
        }));
    };
    return PassportConfig;
}());
;
exports.default = new PassportConfig;
