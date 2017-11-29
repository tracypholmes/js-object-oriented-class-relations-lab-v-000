let store = {drivers: [], passengers: [], trips: []}
// A driver has many trips, and has many passengers through trips.

let driverId = 0
class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  // these were not fun for me in their corresponding sections
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    });
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

// A passenger has many trips, and has many drivers through trips.
let passengerId = 0
class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId == this.id;
    });
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

// A trip belongs to a driver and belongs to a passenger.
let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.driverId = driverId;
    this.passengerId = passengerId;
    this.id = ++tripId;
    store.trips.push(this);
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}