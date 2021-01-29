

const btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
   
const timerID = setInterval(logger,2000); 
});
//btn.timerID();

//clearInterval(timerID);
function logger() {
    console.log('text');
}