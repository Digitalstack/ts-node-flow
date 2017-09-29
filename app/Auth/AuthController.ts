import {Router, Request, Response, NextFunction} from 'express';

import RegisterShowAction from './Actions/RegisterShowAction';

export class AuthController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes;
    }

    public routes() {
        //this.router.get('/register', (req, res, next) => RegisterShowAction.invoke(req, res, next));
    }

}

const AuthRoutes = new AuthController();
AuthRoutes.routes();

export default AuthRoutes.router;