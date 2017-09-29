import {Router, Request, Response, NextFunction} from 'express';

import ShowPostsAction from './Actions/ShowPostsAction';

export class PostBehavior {

    router: Router;

    constructor() {
        this.router = Router()
        this.routes;
    }

    public routes() {
        this.router.get('/', (req, res, next) => ShowPostsAction.invoke);
    }

}

const postRoutes = new PostBehavior();
postRoutes.routes();

export default postRoutes.router;