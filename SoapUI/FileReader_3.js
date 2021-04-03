'use strict';
console.log("Before : " + "");
var fs = require('fs');
var fileName = '/home/Lesha/Desktop/All_Projects/SoapUI/Glassix_JSON_2.js';
const crypto = require('crypto');

        //fs.readFile(fileName,"utf8",function (error,data) {
        //fs.readFile(fileName, function (error, data) {

fs.readFile(fileName, function (error, data) {
    if (error) {
        console.log("The error is : " + error);
        throw error;
    }
    

    const secret = '0KtKcfNvNc231fD0d2LpfMVCEEJkwfDCSj8Y76lf6QzpAPVVylNpUjEP01wjnpz6hLJcJdaTGrzwDZoKJEbVXPalfjpJMcJnCgriqLi4fegDxaeQJ3A3Qh1GM2dQ0zFO';
    console.log("Key to string : " + secret.toString());
    var secrettoBase64 = new Buffer.from('secret', 'base64');
    var secrettoHex = new Buffer.from('secret', 'hex');
    //console.log("Key to toBase64 : " + secrettoBase64);
    console.log("Key to toHex : " + secrettoHex);
    
    const dataStringified = data.toString();
    //console.log(dataStringified);

    const hash = crypto.createHmac('sha1', secret)
    //const hashBase64 = crypto.createHmac('sha1', secrettoBase64)
        //.update('I love cupcakes')
        //.update(fileName)
        .update(data)
        //.update(dataStringified)
        .digest('hex');
        //.digest('utf8');
    
        console.log(hash);
        //console.log(dataStringified);
        


});
console.log("After :" + "?");