console.log(`Today is : ${Date()} milices`);
// const now = new Date('2121-04-14');
// const now = new Date(0);
// console.log(now);
// //new Date.parse('2121-04-14');

// console.log(now.setHours(18));

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();
for (let index = 0; index < 1000; index++) {
    //const element = array[index];
    const element =  index ** 3 ;
    console.log(element);
}
let end = new Date();
console.log(`Its take time : ${end-start} milices`);
