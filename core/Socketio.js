"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Socketio = (function () {
    function Socketio() {
        this.io;
    }
    Socketio.prototype.initialize = function (app) {
        this.io = require('socket.io').listen(app);
    };
    return Socketio;
}());
exports.Socketio = Socketio;
exports.default = new Socketio;
