"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterShowAction = (function () {
    function RegisterShowAction() {
    }
    RegisterShowAction.prototype.invoke = function (req, res, next) {
        var data = {
            pageTitle: 'Inscription'
        };
        //res.render('home/register', data);
    };
    return RegisterShowAction;
}());
exports.RegisterShowAction = RegisterShowAction;
exports.default = new RegisterShowAction;
