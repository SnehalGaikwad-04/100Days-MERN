//square and sum the array using arrow function and find the average of the array
let array1 = [1,2,3,4];
let square = array1.map((arg) => {return arg*arg});
console.log(square);

let sum = square.reduce((acc,el) => {return acc+el});
console.log(sum);

let avg = sum / square.length; 
console.log(avg);

//create a new array using map function, whose each elements value equals to the original el plus 4
let arr = [1,2];
let newArray = arr.map((arg) => arg+4);
console.log(newArray); 

//Create a new array whose elements are in uppercase of words present in the original array.
let original = ['a','b','c','d'];
let upper = original.map((el) => el.toUpperCase());
console.log(upper);

//Write a function called `doubleAndReturnArgs` which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
let array = [1,2,3,4];
const doubleAndReturnArgs = (arr,...n) => [
    ...arr, ...n.map((el) => el*2)
];
console.log(doubleAndReturnArgs(array,5,6,7,8,9));

//Write a function called `mergeObjects` that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});

console.log(mergeObjects({a:1,b:2},{c:3,d:4}));
