'use strict';
///Lesson28
const box = document.getElementById('box');
console.log(box);

const btnt = document.getElementsByTagName('button');
console.log(btnt[1]);


const circl = document.getElementsByClassName('circle');
//console.log(circl);
///
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item =>{
    console.log(item);
});

const oneHeart =document.querySelector('div');
console.log(oneHeart);