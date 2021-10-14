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
        console.log(`Hotel:`);
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
    comfort() {
        let sizePerPerson = this.size / this.capacity;
        return sizePerPerson;
    }
    printData() {
        console.log(`==============`);
        console.log(`Room:`);
        console.log(`size: ${this.size}`);
        console.log(`capacity: ${this.capacity}`);
        console.log(`Comfort level: ${this.comfort()}`);
    }
}
class Spa extends Room {
    constructor(size, capacity, poolSize, poolTemerature) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.poolTemperature = poolTemerature;
    }
    comfort() {
        let comfortPerPerson = (this.size - this.poolSize) / this.capacity;
        return comfortPerPerson;
    }
    printData() {
        super.printData();
        console.log(`Pool size: ${this.poolSize}`);
        console.log(`Pool temperature: ${this.poolTemperature}`);
    }
}
const hotel = new Hotel("Moss", "Southside str. 5", 5);
hotel.printData();
const room1 = new Room(30, 2);
hotel.addRoom(room1);
const room2 = new Room(100, 4);
hotel.addRoom(room2);
const room3 = new Spa(120, 2, 15, 30);
hotel.addRoom(room3);
