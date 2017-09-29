"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterShowAction = (function () {
    function RegisterShowAction() {
    }
    RegisterShowAction.prototype.invoke = function (req, res, next) {
        //res.render('home/register', { pageTitle: 'Inscription', message: req.flash('signupMessage')});
    };
    return RegisterShowAction;
}());
exports.RegisterShowAction = RegisterShowAction;
exports.default = new RegisterShowAction;
