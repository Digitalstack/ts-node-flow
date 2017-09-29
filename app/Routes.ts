import { Router } from 'express';

import HomeController from "./Home/HomeController";
import AuthController from "./Auth/AuthController";

export class Routes {

    public initialize(app) {

        let router: Router;
        router = Router();

        // Routes
        app.use('/', HomeController);
        app.use('/', AuthController);

    }

}

function isAuth(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

export default new Routes;