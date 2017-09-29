import * as mysql from 'mysql';

export class DataAccess {

    public connection;

    constructor() {
        this.initialize();
        this.connection;
    }

    public initialize() {

        this.connection = mysql.createConnection({
            host     : '127.0.0.1',
            user     : 'root',
            password : '',
            database : 'dealcity'
        });

        this.connection.connect(function(err){
            if(!err) {
                console.log("Database is connected");
            } else {
                console.log("Error connecting database");
            }
        });

    }

}

export default new DataAccess;