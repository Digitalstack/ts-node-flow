import { Request, Response, NextFunction } from 'express';

export class RegisterShowAction {

    public invoke(req: Request, res: Response, next: NextFunction) {
        let data = {
            pageTitle: 'Inscription'
        }
        //res.render('home/register', data);
    }

}

export default new RegisterShowAction;