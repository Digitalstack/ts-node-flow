import {Router, Request, Response, NextFunction} from 'express';

export class Auth {

    router: Router;

    constructor() {
        this.router = Router();
        this.isAuth;
    }

    protected isAuth(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/');
    }

    public initialize(app, passport) {

        app.use('/', this.router.post('/register', passport.authenticate('local-signup', {
            successRedirect: '/profile',
            failureRedirect: '/register',
            failureFlash: true
        })));

        app.use('/', this.router.get('/register', (req, res, next) => {
            res.render('home/register', { pageTitle: 'Inscription', message: 'message'});
        }));

    }

}

export default new Auth;