class Hotel {
    //atributes
    public readonly name: string;
    public readonly address: string;
    public readonly stars: number;
    public readonly rooms: Room [];         //NESUPRANTU

    public constructor(name: string,
                        address: string,
                        stars: number) {

        this.name = name;
        this.address = address;
        this.stars = stars;
        this.rooms = [];                //NESUPRANTU
    }

    //add new rooms to array  
    public addRoom(room: Room) {
        this.rooms.push(room);        //NESUPRANTU
    }

    private printRooms(minComfort ? : number): void {
        for (const room of this.rooms) {
            room.printData();
        }
    }

    public printData(): void {
         console.log(`Hotel:`);
         console.log(`name: ${this.name}`);
         console.log(`address: ${this.address}`);
         console.log(`star number: ${this.stars}`);
        }
}

class Room {
    public readonly size: number;
    public readonly capacity: number;

    constructor(size: number, capacity: number) {
        this.size = size;
        this.capacity = capacity;
    }

    public comfort(): number {
        let sizePerPerson = this.size / this.capacity;
        return sizePerPerson;
    }

    public printData(): void {
        console.log(`==============`);
        console.log(`Room:`);
        console.log(`size: ${this.size}`);
        console.log(`capacity: ${this.capacity}`);
        console.log(`Comfort level: ${this.comfort()}`);
    }
}

class Spa extends Room {
    public poolSize: number;
    public poolTemperature: number;


    constructor(size: number, capacity: number, poolSize: number, poolTemerature: number,) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.poolTemperature = poolTemerature;
    }

    comfort(): number {
        let comfortPerPerson = (this.size - this.poolSize) / this.capacity;
        return comfortPerPerson;
    }

    printData(): void {
        super.printData();
        console.log(`Pool size: ${this.poolSize}`);
        console.log(`Pool temperature: ${this.poolTemperature}`);
    }
}

const hotel = new Hotel("Moss", "Southside str. 5", 5);
hotel.printData();

const room1: Room = new Room(30, 2);
hotel.addRoom(room1);
const room2: Room = new Room(100, 4);
hotel.addRoom(room2);


const room3: Spa = new Spa(120, 2, 15, 30);
hotel.addRoom(room3);

// hotel.printData(true);
