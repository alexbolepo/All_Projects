'use strict';
const str = 'Life, the universe and everything. Answer:';
console.log(`${str} ${str.length}`);
// expected output: "Life, the universe and everything. Answer: 42"

//https://stackabuse.com/reading-and-writing-json-files-with-node-js/
//SYNC- The readFileSync function reads data from a file in a synchronous manner. This function blocks the rest of the code from executing until all the data is read from a file. The function is particularly useful when your application has to load configuration settings before it can perform any other tasks.
//https://stackabuse.com/read-files-with-node-js/
const fs = require('fs');
var fileName1 = '/home/Lesha/Desktop/All_Projects/Glassix/Glassix_JSON.js';
var fileName2 = '/home/Lesha/Desktop/All_Projects/Glassix/Glassix_JSON_2.js';

//ASYNC the readFile function reads file data in an asynchronous manner
//  the file reading process starts and immediately the control shifts to next line executing the remaining lines of code.

   //fs.readFile('/home/Lesha/Desktop/All_Projects/SoapUI/Glassix_JSON_2.js', (err, data) => {
   fs.readFile(fileName2, (err, data) => {
    if (err) throw err;

    console.log("@@AB 0 : " + data);
    console.log("@@AB 1 : " + `${data} ${data.length}`);

    let student = JSON.parse(data);
    console.log("@@AB 10 : " + student);
    console.log("@@AB 11 : " + JSON.stringify(student));


    console.log("@@AB 20 : " + JSON.stringify(data));  //  Buffer
    let jsonStringi = JSON.stringify(data);
    console.log("@@AB 30 : " + jsonStringi.toString('utf8')); //Convert Buffer to Utf-8 String
    let bufferOriginal = Buffer.from(JSON.parse(jsonStringi).data);
        console.log("@@AB 40 : " + bufferOriginal);
});
console.log('This is after the read call');
 
