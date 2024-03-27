// Default variables
function greet(name = 'Guest', greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
}
greet();
greet('Alice');
greet('Bob', 'Good morning'); 



//Spread in JS
// Example 1: Using spread operator with arrays

const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const combinedNumbers = [...numbers, ...moreNumbers];

console.log(combinedNumbers);

// Example 2: Using spread operator with function arguments

function addThreeNumbers(a, b, c) {
    return a + b + c;
}

const numbersToAdd = [1, 2, 3];
const result = addThreeNumbers(...numbersToAdd);

console.log(result);

// Example 3: Using spread operator to clone an array

const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];

console.log(clonedArray);

clonedArray.push(4);
console.log(originalArray);
console.log(clonedArray);



// Rest in JS
function addThreeNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const numberstoAdd = [1, 2, 3];
const Result = addThreeNumbers(...numbersToAdd);

console.log(result);


//Destructuring in JS
const nums = [1, 2, 3, 4, 5];
const [first, second, , fourth] = nums;

console.log(first);
console.log(second);
console.log(fourth);

// Destructuring an object
const person = {
  name: 'Alice',
  age: 30,
  city: 'Wonderland'
};

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city); 
