"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowPostsAction = /** @class */ (function () {
    function ShowPostsAction() {
    }
    ShowPostsAction.prototype.invoke = function (req, res, next) {
        res.render('post/showAll');
    };
    return ShowPostsAction;
}());
exports.ShowPostsAction = ShowPostsAction;
exports.default = new ShowPostsAction;
