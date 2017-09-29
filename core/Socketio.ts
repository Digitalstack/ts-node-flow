export class Socketio {

    public io;

    constructor() {
        this.io;
    }

    public initialize(app) {
        this.io = require('socket.io').listen(app);
    }

}

export default new Socketio;