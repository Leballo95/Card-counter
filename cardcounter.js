//display windows
const ace=document.querySelector("#ace");
const two=document.querySelector("#two");
const three =document.querySelector('#three');
const four =document.querySelector('#four');
const five =document.querySelector('#five');
const six =document.querySelector('#six');
const seven =document.querySelector('#seven');
const eight =document.querySelector('#eight');
const nine =document.querySelector('#nine');
const ten =document.querySelector('#ten');
const jack =document.querySelector('#jack');
const queen =document.querySelector('#queen');
const king=document.querySelector('#king');
//buttons
const acebutton=document.querySelector("#acebtn");
const twobutton=document.querySelector("#twobtn");
const threebutton =document.querySelector('#threebtn');
const fourbutton =document.querySelector('#fourbtn');
const fivebutton =document.querySelector('#fivebtn');
const sixbutton =document.querySelector('#sixbtn');
const sevenbutton =document.querySelector('#sevenbtn');
const eightbutton =document.querySelector('#eightbtn');
const ninebutton =document.querySelector('#ninebtn');
const tenbutton =document.querySelector('#tenbtn');
const jackbutton =document.querySelector('#jackbtn');
const queenbutton =document.querySelector('#queenbtn');
const kingbutton=document.querySelector('#kingbtn');

let aceCount=32;
let twoCount=32;
let threeCount=32;
let fourCount=32;
let fiveCount=32;
let sixCount=32;
let sevenCount=32;
let eightCount=32;
let nineCount=32;
let tenCount=32;
let jackCount=32;
let queenCount=32;
let kingCount=32;

acebutton.addEventListener('click',()=>{

aceCount--;
ace.innerHTML=aceCount;

})

twobutton.addEventListener('click',()=>{
    twoCount--;
    two.innerHTML=twoCount;
})

threebutton.addEventListener('click',()=>{
    threeCount--;
    three.innerHTML=threeCount;
})

fourbutton.addEventListener('click',()=>{
    fourCount--;
    four.innerHTML=fourCount;
})

fivebutton.addEventListener('click',()=>{
    fiveCount--;
    five.innerHTML=fiveCount;
})

sixbutton.addEventListener('click',()=>{
    sixCount--;
    six.innerHTML=sixCount;
})

sevenbutton.addEventListener('click',()=>{
    sevenCount--;
seven.innerHTML=sevenCount;
})

eightbutton.addEventListener('click',()=>{
    eightCount--;
    eight.innerHTML=eightCount;
})

ninebutton.addEventListener('click',()=>{
    nineCount--;
     nine.innerHTML=nineCount;
})

tenbutton.addEventListener('click',()=>{
    tenCount--;
    ten.innerHTML=tenCount;
})

jackbutton.addEventListener('click',()=>{
    jackCount--;
    jack.innerHTML=jackCount;
})

queenbutton.addEventListener('click',()=>{
    queenCount--;
    queen.innerHTML=queenCount;
})

kingbutton.addEventListener('click',()=>{
    kingCount--;
    king.innerHTML=kingCount;
})