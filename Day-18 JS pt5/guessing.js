const max=prompt('enter the max number');
const result=Math.floor(Math.random()*max)+1;

let guess=prompt('guess the number');

while(true){
    if(guess=='quit'){
        console.log('user quit');
        break;
    }

    if(guess==result){
        console.log('congrats, the number was '+result);
        break;
    }
    else if(guess>result){
        guess=prompt('hint : try a lower number');
    }
    else if(guess<result){
        guess=prompt('hint : try a higher number');
    }
}



