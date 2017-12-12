import { Router } from 'express';

import HomeController from "./Home/HomeController";
import AuthController from "./Auth/AuthController";
import LangController from "./Lang/LangController";

export class Routes {

    public initialize(app) {

        let router: Router;
        router = Router();



        // Routes
        app.use('/', HomeController);
        app.use('/', AuthController);
        app.use('/lang', LangController);

    }

}

function isAuth(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/welcome');
}

export default new Routes;