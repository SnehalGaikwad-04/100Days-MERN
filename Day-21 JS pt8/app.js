let num=[1,2,3,4,5,6,7];
console.log(num);

//map function
let mapping= num.map((el) => {
    return el%2 ==0;
});
console.log('map function: '+mapping);

//filter fucntion
let ev= num.filter((el) => {
    return el%2 ==0;
});
console.log('filter function: '+ev);

//every function
let ever = num.every((el) => el%2 != 0);
console.log('every function: '+ever);

//some function
let som = num.some((el) => el%2 != 0);
console.log('some function: '+som);

//reduce method
let arr=[1,2,3,4];
console.log(arr);
let result = arr.reduce((val,el) => val+el);
console.log('reduce function on arr: '+result);

//max number with reduce function
let arr1=[1,4,67,3,6,8,4,3,2];
console.log(arr1);
let max=-1;
let func = arr1.reduce((max,el) => {
    if (max<el){
        return el;
    }else{
        return max;
    }
});
console.log('max value in array: '+func);

//PRACTICE QNS
let array=[10,20,30,40];
console.log(array);

//Q1 check if all the elements in the array are multiple of 10 or not
let multiple = array.every((el) => el%10 ==0);
console.log('elements multiple of 10? : '+multiple);

//find minimum in the array
let min=-1;
let res = array.reduce((min,el) => {
    if(min>el){
        return el;
    }else{
        return min;
    }
});
console.log('minimum number: '+res);

//
