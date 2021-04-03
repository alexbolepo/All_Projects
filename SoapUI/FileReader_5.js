'use strict';
console.log("Before : " + "");
var fs = require('fs');
var fileName1 = '/home/Lesha/Desktop/All_Projects/SoapUI/Glassix_JSON.js';
var fileName2 = '/home/Lesha/Desktop/All_Projects/SoapUI/Glassix_JSON_2.js';
//console.log(JSON.stringify(fs.readFile.fileName1.JSON));
//console.log(fs.fileName1);

console.log("@@AB 1 : " + `${fileName1} ${fileName1.length}`);
console.log("@@AB 2 : " + `${fileName2} ${fileName2.length}`);
//console.log("@@AB 2 : " + `${fileName2} ${String.raw`fileName2`}`);



const crypto = require('crypto');
fs.readFile(fileName2, function (error, data) {
    if (error) {
        console.log("The error is : " + error);
        throw error;
    }

    console.log("@@AB 10 : " + data);
    console.log("*************************************************");
    console.log("@@AB 11 : " + JSON.stringify(data));

    console.log("*************************************************");
    console.log("@@AB 12 : " + data.toString());


    const secret = '0KtKcfNvNc231fD0d2LpfMVCEEJkwfDCSj8Y76lf6QzpAPVVylNpUjEP01wjnpz6hLJcJdaTGrzwDZoKJEbVXPalfjpJMcJnCgriqLi4fegDxaeQJ3A3Qh1GM2dQ0zFO';
    const hash = crypto.createHmac('sha1',secret).update(data).digest('hex');
    const hash2 =crypto.createHmac('sha1',secret).update(JSON.stringify(data)).digest('hex');
    
    console.log("*************************************************");
        console.log("@@AB 20 : " + hash);
        console.log("@@AB 30 : " + hash2);
        

});