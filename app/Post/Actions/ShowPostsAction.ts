import {Router, Request, Response, NextFunction} from 'express';

export class ShowPostsAction {

    public invoke(req, res, next) {
        res.render('post/showAll')
    }

}

export default new ShowPostsAction;