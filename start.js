// Define a car object
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'blue',
    fuelLevel: 50, // in percentage
    speed: 0, // in km/h

    // Method to start the car
    start: function() {
        console.log("Starting the car...");
        // Additional logic can be added here, such as checking fuel level, engine condition, etc.
        console.log("The car has started.");
    },

    // Method to accelerate the car
    accelerate: function(speedIncrease) {
        this.speed += speedIncrease;
        console.log(`Accelerating the car. Current speed: ${this.speed} km/h`);
    },

    // Method to brake the car
    brake: function() {
        this.speed = 0;
        console.log("Braking the car. The car has stopped.");
    },

    // Method to refuel the car
    refuel: function(fuelAmount) {
        this.fuelLevel += fuelAmount;
        console.log(`Refueling the car. Current fuel level: ${this.fuelLevel}%`);
    }
};

// Test the car object
car.start();
car.accelerate(50);
car.brake();
car.refuel(30);
