import {Router, Request, Response, NextFunction} from 'express';

import UserModel from '../app/User/Models/UserModel';
import DB from './DataAccess';
import Datetime from './Datetime';
import * as bcrypt from 'bcryptjs';

export class Door {

    constructor() {
        this.register;
    }

    public register(req, res) {

        // Verifier les champs
        req.checkBody('username', 'rUsernameEmpty').notEmpty()
        req.checkBody('username', 'rUsernameAlpha').isAlphanumeric()
        req.checkBody('email', 'rEmailEmpty').notEmpty()
        req.checkBody('email', 'rEmail').isEmail()
        req.checkBody('password', 'rPasswordEmpty').notEmpty()
        req.checkBody('password', 'rPassportLength').isLength(6,99)
        req.assert('password', 'rPasswordEq').equals(req.body.passwordcf)

        req.sanitize('username').trim()


        var errors = req.validationErrors();

        // Si il y a une erreur dans le formulaire
        if(errors) {

            console.log(errors)

            // Retourner la page d'inscription
            res.render('home/register', { pageTitle: 'Inscription' , csrfToken: req.csrfToken(), errors: errors, req: req });

        } else {

            // On recherche un utilisateur avec le même email
            UserModel.findBy('email', req.body.email, function (err, res1) {
                if (err)
                    res.render('home/register', { pageTitle: 'Inscription' , csrfToken: req.csrfToken(), errors: [{msg: 'error'}], req: req });

                // Si il y a un résultat, l'email est déjà utilisé
                if (res1) {
                    res.render('home/register', { pageTitle: 'Inscription' , csrfToken: req.csrfToken(), errors: [{msg: 'rEmailArleadyTaken'}], req: req });
                } else {

                    // On recherche un utilisateur avec le même pseudonyme
                    UserModel.findBy('username', req.body.username, function (err, res2) {
                        if (err)
                            res.render('home/register', {
                                pageTitle: 'Inscription',
                                csrfToken: req.csrfToken(),
                                errors: [{msg: 'error'}],
                                req: req
                            });

                        // Si il y a un résultat, le pseudonyme est déjà utilisé
                        if (res2) {
                            res.render('home/register', {
                                pageTitle: 'Inscription',
                                csrfToken: req.csrfToken(),
                                errors: [{msg: 'rUsernameArleadyTaken'}],
                                req: req
                            });
                        } else {

                            var userData = {
                                username: req.body.username,
                                email: req.body.email,
                                avatar: 'default.png',
                                password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null),
                                created_at: Datetime.getDateTime()
                            };

                            DB.connection.query('INSERT INTO users SET ?', [userData], function (err, res) {
                                let userID = res.id;
                            });

                        }

                    })

                }

            });

        }


    }

}

export default new Door;