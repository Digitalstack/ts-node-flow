import { Request, Response, NextFunction } from 'express';

export class RegisterShowAction {

    public invoke(req: Request, res: Response, next: NextFunction) {
        //res.render('home/register', { pageTitle: 'Inscription', message: req.flash('signupMessage')});
    }

}

export default new RegisterShowAction;