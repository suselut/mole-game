const mole1 = document.querySelector(".mole1");
const mole2 = document.querySelector(".mole2");
const mole3 = document.querySelector(".mole3");
const mole4 = document.querySelector(".mole4");
const mole5 = document.querySelector(".mole5");
const mole6 = document.querySelector(".mole6");
const mole7 = document.querySelector(".mole7");
const mole8 = document.querySelector(".mole8");
const mole9 = document.querySelector(".mole9");
const mole10 = document.querySelector(".mole10");

const moles = [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9, mole10];

for( let i = 0; i <10; i++) {
    moles[i].number1 = i + 1;
    moles[i].number2 = Math.round((i + 1) / 2);
    moles[i].hit = Boolean;
}

let randomInt = 0;
let randomInt2 = 0;

let rafCount = 0;
let runAgainAt = Date.now();

let pointsStr = document.querySelector(".points");
let points = parseInt(pointsStr.innerHTML);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }  

function makeAppearAt(num1, num2, mole) {
    if (randomInt === num1 || randomInt2 ===num2) {
        mole.src = "./static/mole-game/mole-hungry.png";
    }else {
        mole.src = "./static/mole-game/transparent.png";
    }
}

function rafCounter() {
  if (Date.now() > runAgainAt) {
    rafCount++;
    runAgainAt = Date.now() + 1000;
    randomInt = getRandomInt(1, 30);
    randomInt2 = getRandomInt(1, 40);
    //console.log(randomInt)
  }

for ( let i = 0; i < 10; i++) {
    makeAppearAt(moles[i].number1, moles[i].number2, moles[i])
}
  requestAnimationFrame(rafCounter);
}
requestAnimationFrame(rafCounter);


function Points(num1, num2, mole){
    if(randomInt === num1 || randomInt2 ===num2){
        console.log("clicked");
        points = points + 1;
        pointsStr.innerHTML = points;
    }
}    

// function changeImg(mole){
//     console.log(mole.hit);
//     if (mole.hit === true) {
//         mole.src = "./static/mole-game/mole-fed.png"
//     }
// }
 
for( let i = 0; i < 10; i++ ) {
    moles[i].addEventListener("click", function(event){
            Points(moles[i].number1, moles[i].number2, moles[i]);
            // changeImg(moles[i]); //make it work
    })
}