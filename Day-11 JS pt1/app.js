//write code here
console.log("hello world");
console.log("Snehal Gaikwad");
let a = 5;
let z = 100;
console.log("the sum is : ",a+z);

let pencilPrice = 10;
let penPrice = 20;
// let output="the total price is : "+(penPrice+pencilPrice)+"Rs/-";
let output=`the total price : ${penPrice+pencilPrice} Rs`; // template literals
console.log(output);


// Comparison operators demo

// Numeric comparison
let num1 = 10;
let num2 = 5;

console.log("Numeric comparisons:");
console.log(num1 + " > " + num2 + ":", num1 > num2); // Greater than
console.log(num1 + " < " + num2 + ":", num1 < num2); // Less than
console.log(num1 + " >= " + num2 + ":", num1 >= num2); // Greater than or equal to
console.log(num1 + " <= " + num2 + ":", num1 <= num2); // Less than or equal to
console.log(num1 + " === " + num2 + ":", num1 === num2); // Equal value and equal type
console.log(num1 + " !== " + num2 + ":", num1 !== num2); // Not equal value or not equal type

// String comparison
let str1 = "apple";
let str2 = "banana";

console.log("\nString comparisons:");
console.log(str1 + " === " + str2 + ":", str1 === str2); // Equal value and equal type
console.log(str1 + " !== " + str2 + ":", str1 !== str2); // Not equal value or not equal type
console.log(str1 + " < " + str2 + ":", str1 < str2); // alphabetically less than
console.log(str1 + " > " + str2 + ":", str1 > str2); // alphabetically greater than

// Boolean comparison
let bool1 = true;
let bool2 = false;

console.log("\nBoolean comparisons:");
console.log(bool1 + " === " + bool2 + ":", bool1 === bool2); // Equal value and equal type
console.log(bool1 + " !== " + bool2 + ":", bool1 !== bool2); // Not equal value or not equal type
