class RoomNode {
    id: string;
    next: RoomNode | null;

    constructor(id: string) {
        this.id = id;
        this.next = null;
    }
}

export default RoomNode;
