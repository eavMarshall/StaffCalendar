
export class Appointment {
    #id
    #date
    #events

    /**
     *
     * @param {int} id
     * @param {Date} date
     * @param {Array.<Events>} events
     */
    constructor(id, date, events) {
        this.#id = id;
        this.#date = date;
        this.#events = events;
    }

    get id() { return this.#id; }
    get date() { return this.#date; }
    get events() { return this.#events; }
    set id(e) { throw new Error("readonly property") }
    set date(e) { throw new Error("readonly property") }
    set events(e) { throw new Error("readonly property") }
}
