import SocketEvents from './SocketEvents';

export class Socketio {

    public initialize(io) {

        io.sockets.on('connection', (socket: any): any => {



        });

    }

}

export default new Socketio;