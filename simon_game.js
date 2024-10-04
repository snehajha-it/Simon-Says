let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started == false){
    console.log("game started");
    started = true; 
    
    levelUp();
}

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randbtn);
    // console.log(randColor);
    // console.log(randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);

}

function checkAns(idx){

    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
            
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Better luck next time. Press any key to start. `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset();
    }

}

function btnPress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnPress);
 }

 function reset(){
    started == false;
    gameSeq = [];
    userSeq = [];
    level = 0;

 }
