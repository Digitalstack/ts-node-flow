import {Router, Request, Response, NextFunction} from 'express';
import Door from './Door';
import * as csrf from 'csurf';

// Classe Authentification
export class Auth {

    router: Router;

    constructor() {
        // Initialisation du router
        this.router = Router();
        this.isAuth;
    }

    // Fonction qui requière une authentification
    protected isAuth(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/');
    }

    // Logique
    public initialize(app, passport) {

        // Utilisation du CSRF
        app.use(csrf({ cookie: true }));

        // Lorsqu'on soumet la page register
        app.use('/', this.router.post('/signup', (req, res, next) => {

            // On invoque l'authentification par Passport
            // Passport non utilisé
            /*passport.authenticate('local-signup', {
                successRedirect: '/success',
                failureRedirect: '/welcome',
                failureFlash: true
            });*/

            // On invoque le script d'authentification Door
            Door.register(req, res)


        }));

        // Affichage de la page d'inscription
        app.use('/', this.router.get('/welcome', (req, res, next) => {
            res.render('home/register', { pageTitle: 'Inscription' , csrfToken: req.csrfToken(), errors: '', req: req });
        }));
        // Rediriger si l'utilisateur atteri sur la page signup
        app.use('/', this.router.get('/signup', (req, res, next) => {
            res.redirect('welcome')
        }));

    }

}

export default new Auth;