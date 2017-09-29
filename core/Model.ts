import DB from "./DataAccess";

export class Model {

    table: string;

    constructor(table) {
        this.table = table;
    }

    public getTable() {
        return this.table;
    }

    public findBy(key: string, value: any, callback) {

        DB.connection.query('SELECT * FROM '+ this.table +' WHERE '+ key +' = ? LIMIT 1', [value], (err, res) => {
            if(callback) {
                callback(err, res[0]);
            }
        });

    }

}