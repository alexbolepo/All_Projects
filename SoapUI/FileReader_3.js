//'use strict';
console.log("Before : " + "");
var fs = require('fs');
var fileName = '/home/Lesha/Desktop/All_Projects/SoapUI/Glassix_JSON.js';
const crypto = require('crypto');

//fs.readFile(fileName,"utf8",function (error,data) {
fs.readFile(fileName, function (error, data) {
    if (error) {
        console.log("The error is : " + error);
        throw error;
    }
    
    //console.log("fileName : " + fileName);
    //console.log(data);
    
    // console.log("Data : " + data);
    //console.error(data.toString());
    //return data;

    const secret = '0KtKcfNvNc231fD0d2LpfMVCEEJkwfDCSj8Y76lf6QzpAPVVylNpUjEP01wjnpz6hLJcJdaTGrzwDZoKJEbVXPalfjpJMcJnCgriqLi4fegDxaeQJ3A3Qh1GM2dQ0zFO';
    const hash = crypto.createHmac('hmac-sha1', secret)
        //.update('I love cupcakes')
        //.update(fileName)
        .update(data)
        //.update(data.toString())
        .digest('hex');
        //.digest('base64');
    console.log(hash);



});
console.log("After :" + "?");
//console.log("fileName : " + fileName);