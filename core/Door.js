"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../app/User/Models/UserModel");
var DataAccess_1 = require("./DataAccess");
var Datetime_1 = require("./Datetime");
var bcrypt = require("bcryptjs");
var Door = /** @class */ (function () {
    function Door() {
        this.register;
    }
    Door.prototype.register = function (req, res) {
        // Verifier les champs
        req.checkBody('username', 'rUsernameEmpty').notEmpty();
        req.checkBody('username', 'rUsernameAlpha').isAlphanumeric();
        req.checkBody('email', 'rEmailEmpty').notEmpty();
        req.checkBody('email', 'rEmail').isEmail();
        req.checkBody('password', 'rPasswordEmpty').notEmpty();
        req.checkBody('password', 'rPassportLength').isLength(6, 99);
        req.assert('password', 'rPasswordEq').equals(req.body.passwordcf);
        req.sanitize('username').trim();
        var errors = req.validationErrors();
        // Si il y a une erreur dans le formulaire
        if (errors) {
            console.log(errors);
            // Retourner la page d'inscription
            res.render('home/register', { pageTitle: 'Inscription', csrfToken: req.csrfToken(), errors: errors, req: req });
        }
        else {
            // On recherche un utilisateur avec le même email
            UserModel_1.default.findBy('email', req.body.email, function (err, res1) {
                if (err)
                    res.render('home/register', { pageTitle: 'Inscription', csrfToken: req.csrfToken(), errors: [{ msg: 'error' }], req: req });
                // Si il y a un résultat, l'email est déjà utilisé
                if (res1) {
                    res.render('home/register', { pageTitle: 'Inscription', csrfToken: req.csrfToken(), errors: [{ msg: 'rEmailArleadyTaken' }], req: req });
                }
                else {
                    // On recherche un utilisateur avec le même pseudonyme
                    UserModel_1.default.findBy('username', req.body.username, function (err, res2) {
                        if (err)
                            res.render('home/register', {
                                pageTitle: 'Inscription',
                                csrfToken: req.csrfToken(),
                                errors: [{ msg: 'error' }],
                                req: req
                            });
                        // Si il y a un résultat, le pseudonyme est déjà utilisé
                        if (res2) {
                            res.render('home/register', {
                                pageTitle: 'Inscription',
                                csrfToken: req.csrfToken(),
                                errors: [{ msg: 'rUsernameArleadyTaken' }],
                                req: req
                            });
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
                            });
                        }
                    });
                }
            });
        }
    };
    return Door;
}());
exports.Door = Door;
exports.default = new Door;
