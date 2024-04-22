// Define a class called 'Animal'
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
  
  // Create instances of the Animal class
  const dog = new Animal('Buddy', 5);
  const cat = new Animal('Whiskers', 3);
  
  // Call methods on the instances
  dog.displayInfo(); // Output: Name: Buddy, Age: 5
  dog.speak(); // Output: Buddy says something...
  
  cat.displayInfo(); // Output: Name: Whiskers, Age: 3
  cat.speak(); // Output: Whiskers says something...
  