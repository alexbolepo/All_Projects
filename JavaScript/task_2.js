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

 ////////////////////////Урок 21///////////////////////////////////////


// const arr = [1,2,3,4,5,4];
// arr.pop();
// arr.push(10);
// console.log(arr);


// for (let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
// }

for (let value of arr ) {
    console.log(value);
}

// /////////////////////////////////////////////////////////////

// const arr = [1,2,3,4,5,4];
// // arr [99] = 0;
// // console.log(arr.length);
// // console.log(arr);


const arr = [1, 2, 3, 4, 50, 60];
arr.forEach(function (options, i, arr) {
    console.log(`${i}: ${options} Внутри массива ${arr}`);
});



const str = prompt("","");
const products = str.split(","); ////////Split and then join on browser
products.sort();                 ////Алгоритм быстрой сортировки
console.log(products.join(';')); ////////Split and then join on browser

const arr = [14, 13, 78, 22 , 3, 19];
arr.sort(compareNum); ////////Sort by a-b
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
 






///////////////////////////////Урок 22/////////////////////////////////

let a = 5,
b =a;

b = a + 7 ;
console.log(b);

const obj = {
    a:5,
    b:1
};

const copy = obj; //Передача объекта по ссылке
copy.a = 10;
console.log(copy);


///Next Copy and ADD
function copy2 (mainObj) {
   let objCopy ={};
   let key;
   for (key in mainObj) {
       objCopy[key] = mainObj[key];
   }
   return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
} ;

const newNumbers = copy2(numbers);

newNumbers.a = 10;  // Изменение поверхностных и глубоких копий объекта
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

 ///Добавление нового объекта assign + 
const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbers, add));

///Копия.clone в новый объект 14:04
const clone = Object.assign({},add);
clone.d =20 ;
console.log(add);
console.log(clone);

///Copy of array Копия массива
const oldArray = ['a', 'b',  'c'];
const copyArray = oldArray.slice(); ///copy array
copyArray[1] = 'wqer';
console.log(oldArray);
console.log(copyArray);

///4th way to creTE SUPERFISIAL COPY 4Й Способ создания поверхностных копий объектов
/// spread operator
const video = ['youtube', 'vmeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video,...blogs, 'vk', 'facebook'];
console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num =[2,5,7];
log(...num);

//Spread operator
const array = ["a","b"];
const newArray = [...array] //Spread operator
console.log(array);

//Object Spread operator
const q = {
    one: 1,
    two: 2

};
const newobj = {...q};


/////////Урок 23///Основы ООП,прототипно-ориентированное наследование
let str = "some";
let str obj =new String(str);










 ////////////////////////menushka07.01.21///////////////////////////////////////
const menushka = [1, 2, 3,4,5,6,7,8,9,10];
console.log(menushka);

const menushka = {
    Ping:  {},
    curl: '',
    WhatisMyIP: []
};
console.log(menushka);               