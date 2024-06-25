
export class Events {
    #id
    #start
    #end
    #staffId
    #roomId

    /**
     *
     * @param {int} id
     * @param {Date} start
     * @param {Date} end
     * @param {int} staffId
     * @param {int} roomId
     */
    constructor(id, start, end, staffId, roomId) {
        this.#id = id;
        this.#start = start;
        this.#end = end;
        this.#staffId = staffId;
        this.#roomId = roomId;
    }

    get id() { return this.#id; }
    get start() { return this.#start; }
    get end() { return this.#end; }
    get staffId() { return this.#staffId; }
    get roomId() { return this.#roomId; }
    set id(e) { throw new Error("readonly property") }
    set start(e) { throw new Error("readonly property") }
    set end(e) { throw new Error("readonly property") }
    set staffId(e) { throw new Error("readonly property") }
    set roomId(e) { throw new Error("readonly property") }
}
