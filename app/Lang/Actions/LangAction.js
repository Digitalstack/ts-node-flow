"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LangAction = /** @class */ (function () {
    function LangAction() {
        this.maxAge = 9999999999999999;
    }
    LangAction.prototype.set = function (lang, req, res, next) {
        switch (lang) {
            case 'en':
                res.cookie('ilang', 'en', { maxAge: this.maxAge, httpOnly: true });
                break;
            case 'fr':
                res.cookie('ilang', 'fr', { maxAge: this.maxAge, httpOnly: true });
                break;
        }
        res.redirect('back');
    };
    return LangAction;
}());
exports.LangAction = LangAction;
exports.default = new LangAction;
