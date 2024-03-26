class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Creating an instance of Person
const john = new Person('John', 30);

// Accessing properties and methods
console.log(john.name); // Output: John
console.log(john.age);  // Output: 30
john.greet();           // Output: Hello! My name is John and I'm 30 years old.
