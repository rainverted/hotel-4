class Hotel {
    constructor(name, address, stars) {
        this.name = name;
        this.address = address;
        this.stars = stars;
        this.rooms = [];
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    printRooms(minComfort) {
        for (const room of this.rooms) {
            room.printData();
        }
    }
    printData() {
        console.log(`HOTEL:`);
        console.log(`name: ${this.name}`);
        console.log(`address: ${this.address}`);
        console.log(`star number: ${this.stars}`);
    }
}
class Room {
    constructor(size, capacity) {
        this.size = size;
        this.capacity = capacity;
    }

    //counting comfort level per person
    comfort() {
        let sizePerPerson = Math.round(this.size / this.capacity);
        return sizePerPerson;
    }
    printData() {
        console.log(`==============`);
        console.log(`ROOM:`);
        console.log(`size: ${this.size} m2`);
        console.log(`capacity: ${this.capacity}`);
        console.log(`comfort level: ${this.comfort()}`);
    }
}
class Spa extends Room {
}
const hotel = new Hotel("Moss", "Southside str. 5", 5);
hotel.printData();

const room1 = new Room(25, 2);
hotel.addRoom(room1);
room1.printData();

const room2 = new Room(100, 4);
hotel.addRoom(room2);
room2.printData();