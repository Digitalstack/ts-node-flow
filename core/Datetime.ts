export class Datetime {

    public getDateTime() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDay();
        let hour = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();

        let fullDateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
        return fullDateTime;
    }

}

export default new Datetime;