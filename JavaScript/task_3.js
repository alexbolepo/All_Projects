'use strict';
///Lesson28

const box = document.getElementById('box'), //console.log(box); //
    btnt = document.getElementsByTagName('button'), //console.log(btnt[1]);
    circl = document.getElementsByClassName('circle'), //console.log(circl);
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

    hearts.forEach(item => {
    console.log(item);
          });



////////////////////////////Lesson29
// console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btnt[1].style.borderRadius = '100%';
circl[0].style.backgroundColor = 'red';
hearts[1].style.backgroundColor = 'pink';

box.style.cssText = 'background-color:green; width: 500px';
//box.style.cssText = `background-color:orange; width: ${num}px`;

//Изменить все значения до тех пор пока
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
};

//Изменить все значения до тех пор пока,Но другим способом
//hearts.forEach(item => {
 //   item.style.backgroundColor = 'navy';
//});




 const div = document.createElement('div'); ///Создадим div новый элемент НЕ документе но в ЖэСэ
 //const text = document.createTextNode('I was here');

div.classList.add('black');  ///Возьмём + Создадим и назовём его...
//document.body.append(div);        ///Добавим в BODY конец в документ
wrapper.append(div); // Пусть внутри wrapper появится div
div.style.background = 'orange'; ///Пожелтим

//document.querySelector('.wrapper').append(div);// Пусть появится на странице

//wrapper.prepend(div);// Подвинем вперед
//wrapper.appendChild(div); // Воткнем иначе
//wrapper.insertBefore(div,hearts[0]); // Воткнем иначе

//hearts[0].before(div); // До
//hearts[0].after(div); // После

//circl[1].remove(); // Удалить
//wrapper.removeChild(hearts[1]); // Удалить иначе
hearts[1].replaceWith(circl[1]); // Заменить
//wrapper.replaceChild(circl[0],hearts[1]); // Заменить иначе

//div.innerHTML = 'Hello World' //поредактируем div в методе HTML  и присвоим ему
div.innerHTML = "<h1>Hello</h1>"; //Запишем в кнопочку
//div.textContent = "Hello";

//div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');
div.insertAdjacentHTML('afterend','<h2>Hellooooo</h2>');



