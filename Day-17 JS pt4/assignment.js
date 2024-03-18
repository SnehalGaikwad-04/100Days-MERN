//delete the occurence of num
let arr=[1,2,3,4,5,6,2,3];
let num=2;

console.log(arr);
for(i=0; i<=arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}

console.log(arr);


//find the number of digits in a number
let number=287152;
count=0;

while(number>0){
    count++;
    number=Math.floor(number/10);
}
console.log(count);

//sum of the digits in a number
let num1=23000;
let sum=0;
while(num1>0){
    temp=num1%10;
    sum=sum+temp;
    num1=Math.floor(num1/10);
}
console.log(sum);

//factorial of a number
let digit=7;
let fact=1;
while(digit>1){
    fact=fact*digit;
    digit--;
}
console.log(fact);

//largest number in a array
let arr1=[4,5,6,7];