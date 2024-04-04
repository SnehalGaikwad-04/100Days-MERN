let gameSeq = [];
let userSeq = [];

let btns = ['red','yellow','green','purple'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function() {
    if(started == false){
        console.log('game is started');
        started = true;

    levelup();
    }
});

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    },200);
}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    },200);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let idx = Math.floor(Math.random() *3);
    let randColor = btns[idx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkColor(idx) {
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML = `Game over !! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor ='red';
        setTimeout( function() {
            document.querySelector('body').style.backgroundColor ='white';
        },150);
        console.log('game has ended');
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkColor(userSeq.length-1);
    console.log(userSeq);  
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
