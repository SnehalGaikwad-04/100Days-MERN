// arrow function that returns the avg of numbers
let numbers=[20,60,70];

const func=(arr) => {
    let res=0;
    for(let i of arr){
        res=res+i;
    }
    return res/arr.length;
}

//

let num=2;

const isEven = (arg) => {
    if(arg % 2 != 0){
        return false;
    }else{
        return true;
    }
}

//