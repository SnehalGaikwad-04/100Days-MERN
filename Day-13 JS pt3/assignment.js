// Create a number variable num with some value. 
//Now, print “good” if the number is divisible by 10 and print “bad” if it is not

let num=99;
if(num%10===0){
    console.log('good');
}
else{
    console.log('bad');
}

//Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert 

let nam = prompt("What is your name?");
let age = prompt("How old are you?");
let statement = nam + " is " + age + " years old.";
alert(statement);


//Write a program to find the largest of 3 numbers

let num1= 1;
let num2= 20;
let num3= 90;
console.log(num1+' '+num2+' '+num3);

if(num1>num2 && num1>num3){
    console.log(num1+' is greater');
}
else if(num2>num1 && num2>num3){
    console.log(num2+' is greater');
}
else if(num3>num1 && num3>num1){
    console.log(num3+' is greater');
}
