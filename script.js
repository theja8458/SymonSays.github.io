let gameSeq=[];
let userSeq=[];

let btns = ["yellow" , "red" , "purple" , "green"];
let started = false;
let levle = 0;
let h2 = document.querySelector("h2");
let score = document.querySelector("#score");
let max= 0;
// max.innerText = 
document.addEventListener("keypress",function(){
    // started = true;
    // console.log("Game is started");
    if(started == false){
        started = true;
    }
    levelUp();
})

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout( function() {
    btn.classList.remove("flash");
  } , 250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function() {
      btn.classList.remove("userflash");
    } , 250);
  };

function levelUp(){
    userSeq = [];
  levle++;
  h2.innerText = `Level ${levle}`;
  let rand = Math.floor(Math.random()*3);
  let randColor = btns[rand];
  let randBtn = document.querySelector(`.${randColor}`);
//   console.log(rand);
//   console.log(randColor);
//   console.log(randBtn);
      gameSeq.push(randColor);
      console.log(gameSeq);
  gameFlash(randBtn);
};

function checkAns(ind){
   

    if(userSeq[ind] === gameSeq[ind]){
        // console.log("Same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        max = Math.max(max,levle);
        h2.innerHTML = `Game Over! Your score was <b>${levle}</b>. <br>Press any key to start.`;
        score.innerHTML = `Max Score is <b>${max}</b>`;
        // levle = 1;
        // btnPress();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "#fff";
        }, 150)
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    levle = 0;
}