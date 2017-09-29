import { Request, Response, NextFunction } from 'express';

export class ShowAction {

    public invoke(req: Request, res: Response, next: NextFunction) {
        let data = {
            pageTitle: 'Accueil'
        }
        res.render('home/index', data);
    }

}

export default new ShowAction;