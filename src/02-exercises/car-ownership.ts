interface Owner {
  id: number;
  name: string;
  address: string;
}

interface Car {
  id: number;
  make: string;
  model: string;
  ownerId: number;
}

function createNewOwner(owner: Owner): Owner {
  const exists = owners.some((o) => o.id === owner.id);

  if (exists) {
    throw new Error(`Owner with ID ${owner.id} exists already.`);
  } else {
    return { ...owner }; // Shorthand return oject properties
  }
}

function createNewCar(car: Car): Car {
  const carExists = cars.some((c) => c.id === car.id);
  const ownerExists = owners.some((o) => o.id === car.ownerId);

  if (carExists) {
    throw new Error(`Car with ID ${car.id} exists already.`);
  } else if (!ownerExists) {
    throw new Error(`Owner with ID ${car.ownerId} does not exist.`);
  } else {
    return {
      id: car.id,
      make: car.make,
      model: car.model,
      ownerId: car.ownerId,
    };
  }
}

function transferCar(carId: number, newOwnerId: number): Car {
  const car = cars.find((c) => c.id === carId);
  const newOwner = owners.find((o) => o.id === newOwnerId);

  if (!car) {
    throw new Error(`Car with ID ${carId} not found.`);
  } else if (!newOwner) {
    throw new Error(`Owner with ID ${newOwnerId} not found.`);
  } else {
    car.ownerId = newOwner.id;
    return car;
  }
}

function printCarInfo(car: Car) {
  const owner = owners.find((o) => o.id === car.ownerId);

  if (!owner) {
    console.log(
      `${car.make} ${car.model} has no valid owner (ID: ${car.ownerId})`,
    );
  } else {
    console.log(
      `${car.make} ${car.model} is owned by ${owner.name} at ${owner.address}`,
    );
  }
}

const owners: Owner[] = [];
const cars: Car[] = [];

owners.push(createNewOwner({ id: 1, name: "Jim", address: "1st Main Street" }));
owners.push(
  createNewOwner({ id: 2, name: "Andrew", address: "Jerry Road 12" }),
);

cars.push(
  createNewCar({ id: 165243, make: "Toyota", model: "Vios", ownerId: 1 }),
);
cars.push(createNewCar({ id: 153783, make: "BMW", model: "325", ownerId: 2 }));
cars.push(
  createNewCar({ id: 194763, make: "Ford", model: "Camre", ownerId: 1 }),
);

cars.forEach(printCarInfo);

owners[0].address = "25th Old Harbor Road";

cars[2] = transferCar(194763, 2);

cars.forEach(printCarInfo);
