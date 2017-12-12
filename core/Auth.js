"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Door_1 = require("./Door");
var csrf = require("csurf");
// Classe Authentification
var Auth = /** @class */ (function () {
    function Auth() {
        // Initialisation du router
        this.router = express_1.Router();
        this.isAuth;
    }
    // Fonction qui requière une authentification
    Auth.prototype.isAuth = function (req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    };
    // Logique
    Auth.prototype.initialize = function (app, passport) {
        // Utilisation du CSRF
        app.use(csrf({ cookie: true }));
        // Lorsqu'on soumet la page register
        app.use('/', this.router.post('/signup', function (req, res, next) {
            // On invoque l'authentification par Passport
            // Passport non utilisé
            /*passport.authenticate('local-signup', {
                successRedirect: '/success',
                failureRedirect: '/welcome',
                failureFlash: true
            });*/
            // On invoque le script d'authentification Door
            Door_1.default.register(req, res);
        }));
        // Affichage de la page d'inscription
        app.use('/', this.router.get('/welcome', function (req, res, next) {
            res.render('home/register', { pageTitle: 'Inscription', csrfToken: req.csrfToken(), errors: '', req: req });
        }));
        // Rediriger si l'utilisateur atteri sur la page signup
        app.use('/', this.router.get('/signup', function (req, res, next) {
            res.redirect('welcome');
        }));
    };
    return Auth;
}());
exports.Auth = Auth;
exports.default = new Auth;
