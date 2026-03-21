// --- CLASSES --------------------

// Creating a class wth public and private properties
class Car {
  make: string;
  model: string;
  year: number;
  private _serial?: string | undefined; // Accepts string or undefined data type

  // intializing class properties
  constructor(
    make: string,
    model: string,
    year: number,
    serial?: string | undefined,
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this._serial = serial;
  }

  // Getter and setter methods to access private properties
  get serial(): string | undefined {
    return this._serial;
  }

  set serial(serial: string | undefined) {
    this._serial = serial;
  }

  // Class method
  listCarDetails(): void {
    console.log(
      `Car Details: ${this.make}, ${this.model}, ${this.year}, ${this._serial}`,
    );
  }
}

// Instantiating Class
const myCar = new Car("Toyota", "Vios", 2018);

myCar.listCarDetails();
myCar.serial = "TYVS00126699"; // Setting _serial
console.log(`Car Serial No: ${myCar.serial}`); // Getting _serial
