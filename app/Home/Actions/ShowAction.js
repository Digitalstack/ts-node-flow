"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowAction = /** @class */ (function () {
    function ShowAction() {
    }
    ShowAction.prototype.invoke = function (req, res, next) {
        var data = {
            pageTitle: 'Accueil'
        };
        res.render('home/index', data);
    };
    return ShowAction;
}());
exports.ShowAction = ShowAction;
exports.default = new ShowAction;
