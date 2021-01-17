const btns = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// }

btns.addEventListener('click',() => {
    alert('Click');
});

// btn.addEventListener('mouseenter',(e) => {
//     console.log('Hover'),
//     console.log(e.target);
//     //e.target.remove();
// });


// btns.addEventListener('click',(e) => {
//     console.log('Hover'),
//     console.log(e.target),
//     e.target.remove();
// });

//let i =0;
const deliteElement =  (e) => {
    console.log('Hover'),
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i ==1 ){
    //     btn.removeEventListener('click',deliteElement);
    // }

    // //e.target.remove();
};

// btn.addEventListener('click',deliteElement);
// overlay.addEventListener('click',deliteElement);
btns.forEach(btn => {
    btn.addEventListener('click',deliteElement, {once: true})
});
const link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);
});