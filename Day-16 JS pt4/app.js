let todo=[];

let req = prompt("enter your choice");

while(true){
    if(req=='quit'){
        console.log('quitting the app');
        break;
    }

    if(req == 'list'){
        console.log('-----------------');
        for (let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log('-----------------');
    }
    else if(req == 'add'){
        let task = prompt("enter the task to be added");
        todo.push(task);
        console.log("task added");
    }
    else if(req == 'delete'){
        let idx= prompt("enter the index of the task to be deleted");
        todo.splice(idx, 1);
        prompt("task deleted");
    }
    else{
        console.log("wrong choice");
    }
    req = prompt("enter your choice");
}