"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ShowPostsAction_1 = require("./Actions/ShowPostsAction");
var PostBehavior = /** @class */ (function () {
    function PostBehavior() {
        this.router = express_1.Router();
        this.routes;
    }
    PostBehavior.prototype.routes = function () {
        this.router.get('/', function (req, res, next) { return ShowPostsAction_1.default.invoke; });
    };
    return PostBehavior;
}());
exports.PostBehavior = PostBehavior;
var postRoutes = new PostBehavior();
postRoutes.routes();
exports.default = postRoutes.router;
