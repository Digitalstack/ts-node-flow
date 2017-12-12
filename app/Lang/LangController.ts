import {Router, Request, Response, NextFunction} from 'express';

import LangAction from './Actions/LangAction';

export class LangController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes;
    }

    public routes() {
        this.router.get('/en', (req, res, next) => LangAction.set('en' ,req, res, next));
        this.router.get('/fr', (req, res, next) => LangAction.set('fr' ,req, res, next));
    }

}

const LangRoutes = new LangController();
LangRoutes.routes();

export default LangRoutes.router;