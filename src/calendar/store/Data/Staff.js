
export class Staff {
    #id
    #bid
    #name
    #isRoomOrEquipment

    constructor(id, bid, name, isRoomOrEquipment = false) {
        this.#id = id;
        this.#bid = bid;
        this.#name = name;
        this.#isRoomOrEquipment = isRoomOrEquipment;
    }

    get id() { return this.#id; }
    get bid() { return this.#bid; }
    get name() { return this.#name; }
    get issRoomOrEquipment() { return this.#isRoomOrEquipment; }
    set id(e) { throw new Error("readonly property") }
    set bid(e) { throw new Error("readonly property") }
    set name(e) { throw new Error("readonly property") }
    set issRoomOrEquipment(e) { throw new Error("readonly property") }
}
