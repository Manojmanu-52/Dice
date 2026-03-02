// let randomNum = Math.random();

// console.log(randomNum);

const Mybutton = document.getElementById("mybutton");
const Mylabel = document.getElementById("mylabel");
const min = 1;
const max = 6;
let randomNum;

Mybutton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    Mylabel.textContent = randomNum;
}