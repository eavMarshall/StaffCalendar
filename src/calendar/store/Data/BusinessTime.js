
export class BusinessTime {
    #id
    #openTime
    #closeTime
    #timeSlots

    constructor(id, openTime, closeTime, timeSlots = 15) {
        this.#id = id;
        this.#openTime = openTime;
        this.#closeTime = closeTime;
        this.#timeSlots = timeSlots;
    }

    get id() { return this.#id; }
    get openTime() { return this.#openTime; }
    get closeTime() { return this.#closeTime; }
    get timeSlots() { return this.#timeSlots; }
    set id(e) { throw new Error("readonly property") }
    set openTime(e) { throw new Error("readonly property") }
    set closeTime(e) { throw new Error("readonly property") }
    set timeSlots(e) { throw new Error("readonly property") }
}
