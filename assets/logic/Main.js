var MainClass = /** @class */ (function () {
    function MainClass() {
    }
    MainClass.prototype.test = function (socket) {
    };
    return MainClass;
}());
var Main = new MainClass;
var io;
var url = 'http://localhost:4000';
var socket = io.connect(url);
