'use strict';

// let clickBox = document.querySelector('.click--box');
let firstBox = document.querySelector('.first--box');
let secondBox = document.querySelector('.second--box');
let thirdBox = document.querySelector('.third--box');
let fourthBox = document.querySelector('.fourth--box');
let firstText = document.querySelector('.first--text');
let secondText = document.querySelector('.second--text');
let thirdText = document.querySelector('.third--text');
let fourthText = document.querySelector('.fourth--text');
let box = document.querySelector('.box');

firstBox.addEventListener('click', ()=>{
    firstBox.style.width = "40%";
    secondBox.style.width = "20%";
    thirdBox.style.width = "20%";
    fourthBox.style.width = "20%";
    firstBox.style.transition = '0.5s';
    firstText.style.fontSize = '2rem';
    secondText.style.fontSize = '1rem';
    thirdText.style.fontSize = '1rem';
    fourthText.style.fontSize = '1rem';
    firstText.style.opacity = 1;
    secondText.style.opacity = 0;
    thirdText.style.opacity = 0;
    fourthText.style.opacity = 0;
    firstText.style.transition = '0.5s';
});

secondBox.addEventListener('click', ()=>{
    firstBox.style.width = "20%";
    secondBox.style.width = "40%";
    thirdBox.style.width = "20%";
    fourthBox.style.width = "20%";
    secondBox.style.transition = '0.5s';
    firstText.style.fontSize = '1rem';
    secondText.style.fontSize = '2rem';
    thirdText.style.fontSize = '1rem';
    fourthText.style.fontSize = '1rem';
    firstText.style.opacity = 0;
    secondText.style.opacity = 1;
    thirdText.style.opacity = 0;
    fourthText.style.opacity = 0;
    secondText.style.transition = '0.5s';
});

thirdBox.addEventListener('click', ()=>{
    firstBox.style.width = "20%";
    secondBox.style.width = "20%";
    thirdBox.style.width = "40%";
    fourthBox.style.width = "20%";
    thirdBox.style.transition = '0.5s';
    firstText.style.fontSize = '1rem';
    secondText.style.fontSize = '1rem';
    thirdText.style.fontSize = '2rem';
    fourthText.style.fontSize = '1rem';
    firstText.style.opacity = 0;
    secondText.style.opacity = 0;
    thirdText.style.opacity = 1;
    fourthText.style.opacity = 0;
    thirdText.style.transition = '0.5s';
});

fourthBox.addEventListener('click', ()=>{
    firstBox.style.width = "20%";
    secondBox.style.width = "20%";
    thirdBox.style.width = "20%";
    fourthBox.style.width = "40%";
    fourthBox.style.transition = '0.5s';
    firstText.style.fontSize = '1rem';
    secondText.style.fontSize = '1rem';
    thirdText.style.fontSize = '1rem';
    fourthText.style.fontSize = '2rem';
    firstText.style.opacity = 0;
    secondText.style.opacity = 0;
    thirdText.style.opacity = 0;
    fourthText.style.opacity = 1;
    fourthText.style.transition = '0.5s';
});