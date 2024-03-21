// function to return array elements larger than the number
array1=[1,2,3,4,5,6,7,8,9];
console.log('elements larger than 5= ')
larger(array1,5);

function larger(a,n){
    for(let i=0; i<=a.length; i++){
        if(a[i]>n){
            console.log(a[i]);
        }
    }
}

//function to return unique string elements
string = 'aabbccddeeff';

function unique(str){
    let ans='';
    for(let i=0; i<str.length; i++){
        let current = str[i];
        if(ans.indexOf(current) == -1){
            ans = ans+current;
        }
    }
    return ans;
}

console.log('unique chars= '+unique(string));


//longest country name as output
let country=['India','Germany','United States of America'];
console.log('longest country name= ')
console.log(longest(country));

function longest(country){
    let ansidx=0;
    for(let i=0; i<country.length; i++){
        let anslen=country[ansidx].length;
        let currlen=country[i].length;
        if(currlen>anslen){
            ansidx=i;
        }
    }
    return country[ansidx];
}


//count the number of vowels in string
let string2='my name is snehal';
console.log('count of vowels in "'+string2+'" is '+counting(string2));

function counting(str){
    let vowel=['a','e','i','o','u'];
    let count=0;

    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowel.length; j++){
            if(str[i]==vowel[j]){
                count++;
            }
        }
    }
    return count;
}


//generate a random number within a range (start,end)
start=50;
end=90;
console.log('random number between '+start+' & '+end+' =  '+generate(start,end));

function generate(x,y){
    let diff=y-x;
    let numbers=Math.floor(Math.random()*diff)+x;
    return numbers;
}
