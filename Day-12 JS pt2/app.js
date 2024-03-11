let age=25;
if(age>=18){
    console.log("you are eligible to vote !");
}
else{
    console.log("not eligible");
}
console.log("");

//traffic light system

let signal = Math.floor(Math.random()*3);

if(signal == 0){
    console.log(" Red light ");
}
else if(signal == 1){
    console.log("yellow light");
}
else if(signal == 2){
    console.log(" green light ");
}
else{
    console.log("light error ");
}

//---------------------------------
if(signal == 0){
    console.log("stop !!");
}
else if(signal == 1){
    console.log("warning : slow down !!");
}
else if(signal == 2){
    console.log("GO !!");
}
else{
    console.log("Traffic system broken");
}
console.log("");


//popcorn price telling system

let size = prompt("select a size of popcorn bucket: XL L M S");
console.log("popcorn bucket price : " +size);
if(size === 'XL'){
    console.log("Price : 250 Rs/-");
}
else if(size === 'L'){
    console.log("Price : 200 Rs/-");
}
else if(size === 'M'){
    console.log("Price : 100 Rs/-");
}
else if(size === 'S'){
    console.log("Price : 50 Rs/-");
}
else{
    console.log("Price : error");
}

