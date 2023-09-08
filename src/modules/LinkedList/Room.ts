import RoomNode from "./RoomNode";

class RoomList {
    head: RoomNode | null;

    constructor() {
        this.head = null;
    }

    addRoom(id: string) {
        const newRoom = new RoomNode(id);

        if (!this.head) {
            this.head = newRoom;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newRoom;
        }
    }

    enterRoom(id: string) {
        let current = this.head;
        while (current) {
            if (current.id === id) {
                console.log(`Entering ${current.id}`);
                return;
            }
            current = current.next;
        }
        console.log(`Room with id: ${id} not found.`);
    }

}

export default RoomList;