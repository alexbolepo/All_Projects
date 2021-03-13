

const btn = document.querySelector('.btn');
btn.style.backgroundColor = "red";

let timerID,
     i =0;

//btn.addEventListener('click', () => {});
btn.addEventListener('click', () => { 
    console.log("Click");
    //console.log('Hover');   
});

// timerID = setInterval(logger, 500);
// function logger () {
//     console.log("setInterval");
//     i++;
// }
btn.addEventListener('click', myAnimation)

function myAnimation () {
    const elem = document.querySelector('.box');
    console.log("myAnimation");
    let pos = 0;
    
    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + 'px';
        }
    }
}



// btn.addEventListener('mouseenter',(e) => {
//     console.log('Hover'),
//     console.log(e.target);
//     e.target.remove();
// });


btn.addEventListener('mouseenter',() => {
    console.log('Hover'),
    console.log("target");
    e.target.remove();
});

const timerID2 = setTimeout(function (text) {
    console.log(text);
}, 2000, "Hello2");

const timerID3 = setTimeout(logger3,3000);
function logger3 () {
    console.log("Hello3"); 
}


const timerID4 = setInterval(logger4,3500);
function logger4 () {
    console.log("Hello4");
    //i++; 
}

setTimeout(() => {
    alert("Hello5")
}, 4000);