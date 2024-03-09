let sum = 10 + 5; // Adding two numbers: 10 and 5
let difference = 20 - 8; // Subtracting 8 from 20
let product = 6 * 4; // Multiplying 6 by 4
let quotient = 16 / 4; // Dividing 16 by 4
let remainder = 15 % 4; // Getting the remainder of dividing 15 by 4
let result = 2 ** 3; // Calculating 2 raised to the power of 3

let count = 5;
count++; // Incrementing the value of 'count' by 1
let counter = 10;
counter--; // Decrementing the value of 'counter' by 1

//Precedence
let result = 2 + 3 * 4; // Multiplication (3 * 4) is performed before addition (2 + ...)
// result will be 14 (3 * 4 = 12, then 2 + 12 = 14)
let result = (2 + 3) * 4; // Addition inside parentheses is performed first
// result will be 20 ((2 + 3) = 5, then 5 * 4 = 20)
let result = 2 + 3 * 4 ** 2 / 2; // Exponentiation (4 ** 2) is performed first, followed by multiplication (3 * ...) and division (..., then addition
// result will be 26 (4 ** 2 = 16, then 3 * 16 = 48, then 48 / 2 = 24, finally 2 + 24 = 26)
let result = "Hello " + "world" + "!"; // String concatenation occurs from left to right
// result will be "Hello world!"
