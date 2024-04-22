// Define a base class called 'Animal'
class Animal {
  // Constructor to initialize properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display information about the animal
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  // Method to make the animal speak
  speak() {
    console.log(`${this.name} says something...`);
  }
}

// Define a derived class called 'Dog' that inherits from 'Animal'
class Dog extends Animal {
  // Constructor to initialize properties of Dog
  constructor(name, age, breed) {
    super(name, age); // Call the constructor of the base class (Animal)
    this.breed = breed;
  }

  // Method to display information specific to Dog
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`);
  }

  // Method to make the dog bark (override the speak method)
  speak() {
    console.log(`${this.name} barks: Woof woof!`);
  }
}

// Create instances of the Animal and Dog classes
const genericAnimal = new Animal('Generic', 10);
const myDog = new Dog('Buddy', 5, 'Golden Retriever');

// Call methods on the instances
genericAnimal.displayInfo(); // Output: Name: Generic, Age: 10
genericAnimal.speak(); // Output: Generic says something...

myDog.displayInfo(); // Output: Name: Buddy, Age: 5, Breed: Golden Retriever
myDog.speak(); // Output: Buddy barks: Woof woof!
