// trim method, clears the white spaces
let str1='  snehal  ';
console.log('trim() : '+str1.trim());

//upper and lower case 
let str2='All Is Well';
console.log('toUpperCase() : '+str2.toUpperCase());
console.log('toLowerCase() : '+str2.toLowerCase());

// indexof method : tells the index of the argument
let str3='eye candy';
console.log('indexof() : '+str3.indexOf('a'));

// method chaining : applying multiple methods on one entity
console.log('trim().toUpperCase() :'+str1.trim().toUpperCase());

// slice method : returns a part of string according to the args
let str4= '"working with JS"';
console.log(str4+'   slice() : '+str4.slice(4,-1));

// replace method
let str5='"hot and cold"';
console.log(str5+' replace() : '+str5.replace('cold','chilly'));

// repeate method
let str6='Gloss';
console.log('repeat() : '+str6.repeat(4));
console.log('');


//Practice Qns
let string = ' ApnaCollege ';

//trim and convert following with uppercase
console.log(string.trim().toUpperCase());

//seperate the college part in the string and replace 'l' with 't'
console.log(string.replace('College',' College').replace('l','t').replace('l','t'));