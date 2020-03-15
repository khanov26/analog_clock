export default class Clock {

    static getDate() {
        if (!this._date) {
            this._date = new Date();
            setTimeout(() => {
                Clock.resetDate();
            });
        }

        return this._date;
    }

    static resetDate() {
        this._date = null;
    }

    static getSecondHandAngle() {
        return this.getDate().getSeconds() * 6;
    }

    static getMinuteHandAngle() {
        return this.getDate().getMinutes() * 6 + this.getDate().getSeconds() / 10;
    }

    static getHourHandAngle() {
        return this.getDate().getHours() * 30 + this.getDate().getMinutes() / 2;
    }
}