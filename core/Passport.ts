let LocalStrategy = require('passport-local').Strategy;

import UserModel from '../app/Home/Models/UserModel';

class PassportConfig {

    constructor() {
        this.initialize;
    }

   public initialize(passport) {

       passport.serializeUser(function(user, done) {
           done(null, user.id);
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

                           console.log('newUser')

                       }

                   });

               //});

           }));

    }

};

export default new PassportConfig;