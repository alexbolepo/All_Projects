'use strict';

//const ajaxIP = document.getElementById(1); //Create const ell on js level
           
const btnt = document.querySelector('button'),
       btnt3 = document.querySelectorAll('button');



btnt.style.background = 'red';
btnt3[1].style.background = 'green';
btnt.style.borderRadius = '100%';
console.log(btnt3);

//promptt = +prompt('Сколько фильмов вы уже посмотрели?', ''),
//const ajaxIP4 = document.createElement('TESTELEMENT'); //Create , ToWere ?
// ajaxIP4.classList.add('TESTELEMENT');
// ajaxIP4.append('black');

btnt.addEventListener('click',() => {
    console.log('Hoooover');
});

btnt3[1].addEventListener('mouseenter',(e) => {
    console.log('YouMooving'),
    console.log(e.target);
});