var clutter="";
var hitrn;

function makeBubble() {

    for(var i=1; i<=160;i++) {

        hitrn = Math.floor(Math.random()*10);
        
        clutter += `<div class="bubble">${hitrn}</div>` ;
    }
    document.querySelector("#pbottom").innerHTML=clutter;
};

var timer = 60;

function runTimer() {
    var timerultra = setInterval(function(){
        if(timer>0) {
            timer--;
            document.querySelector("#itimer").textContent = timer;
        }
        else {
            clearInterval(timerultra);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over<h1>`;
        }
    },1000);
}

function getNewHit() {
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#gethit").textContent = rn;
}

let score = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#iscore").textContent = score;
};

document.querySelector("#pbottom").addEventListener("click",function (dets){
    var clickedNumber = (Number(dets.target.textContent));
    if(clickedNumber === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

makeBubble();
runTimer();
getNewHit();
increaseScore();

