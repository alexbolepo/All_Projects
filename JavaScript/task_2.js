// "use strict";

// //const obj = new Object{};

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border:'black',
//         background:'red'
//     },
//     makeTest: function () {
//         console.log("test");
//     }
// };

// //options.makeTest();

// const {border,background} =options.colors;
// console.log(border);


// //console.log(options.name);

// //delete options.name;
// //console.log(Object.keys(options).length);




// //////////////////////////////

// // let counter =0;

// // for (let key in options){
// //     if (typeof(options[key]) === 'object') {
// //         for ( let i in options[key]) {
// //             console.log(`Свойство,${i} имеет значение ${options[key][i]}`);

// //         }
// //     } else {
// //             console.log(`Свойство,${key} имеет значение ${options[key]}`);
// // counter++;
// //     }
// // }
// // console.log(counter);


// const arr = [1,2,3,4,5,4];
// arr.pop();
// arr.push(10);
// console.log(arr);

// //for (let i = 0; i < arr.length; i++){
// //    console.log(arr[i]);
// //}



// /////////////////////////////////////////////////////////////

// const arr = [1,2,3,4,5,4];
// // arr [99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} Внутри массива ${arr}`);
// });


///////////////////////////////////////////////////////////////

const str = prompt("","");
const products = str.split(",");
products.sort();
console.log(products);

const arr = [14, 13, 78, 22 , 3, 19];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
 ///////////////////////////////////////////////////////////////

let a = 5,
b =a;

b = a + 7 ;
console.log(b);

///////////////////////////////////////////////////////////////

const obj = {
    a:5,
    b:1
};

///////////////////////////////////////////////////////////////
function copy (mainObj) {
   let objCopy ={};
   let key;
   for (key in mainObj) {
       objCopy[key] =mainObj[key];
   }
   return objCopy;
}

const numbers = {
    a: 2,
    b: 3,
    c: {
        x:7,
        y:4
    }
} ;

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({},add);
clone.d =20 ;
console.log(add);
console.log(clone);


