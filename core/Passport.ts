let LocalStrategy = require('passport-local').Strategy;

import UserModel from '../app/User/Models/UserModel';
import DB from './DataAccess';
import Datetime from './Datetime';
import * as bcrypt from 'bcryptjs';

class PassportConfig {

    constructor() {
        this.initialize;
    }

    public initialize(passport) {

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(id, done) {
            UserModel.findBy('id', id, function(err, res) {
                done(err, res);
            });
        });

        passport.use('local-signup', new LocalStrategy({
                passReqToCallback: true
            },
            function(req, email, password, done) {

                //process.nextTick(function() {

                UserModel.findBy('email', req.body.email, function(err, res) {
                    if (err)
                        return done(err);

                    if (res) {
                        console.log('Email already taken')
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        var userData = {
                            username: req.body.username,
                            email: req.body.email,
                            avatar: 'default.png',
                            password: 'test',
                            created_at: Datetime.getDateTime()
                        };

                        DB.connection.query('INSERT INTO users SET ?',[userData],function(err, res) {
                            let userID = res.id;

                            return done(null, userID);
                        });

                    }

                });

                //});

            }));

    }

};

export default new PassportConfig;