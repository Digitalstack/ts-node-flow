import { Request, Response, NextFunction } from 'express';

export class LangAction {

    maxAge: number;

    constructor() {
        this.maxAge = 9999999999999999;
    }

    public set(lang, req: Request, res: Response, next: NextFunction) {
        switch(lang) {
            case 'en':
                res.cookie('ilang', 'en', {maxAge: this.maxAge, httpOnly: true});
                break;
            case 'fr':
                res.cookie('ilang', 'fr', {maxAge: this.maxAge, httpOnly: true});
                break;
        }
        res.redirect('back');
    }

}

export default new LangAction;