'strict';
const btns = document.querySelectorAll('button'),
       wrapper = document.querySelector('.btn-block');
//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('green','fsdfsdfsd'));
// console.log(btns[0].classList.remove('fsdfsdfsd'));
// //console.log(btns[0].classList.toggle('blue'));

btns[1].style.background = 'red';


// btns[1].addEventListener('click',() => {
//     console.log('Hoooover');
// });

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');

    }
    
});

// console.log('YouClickedMe+');
//     btns[1].classList.toggle('red');


// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log("Hello");
    }
});

//  btns.forEach(btn => {
//      btn.addEventListener('click', () => {
//          console.log('Hello');
//      });

//  });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);