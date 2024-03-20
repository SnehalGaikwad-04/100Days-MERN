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

