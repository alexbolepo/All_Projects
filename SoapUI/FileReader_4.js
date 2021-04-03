const crypto = require('crypto');

const secret = '0KtKcfNvNc231fD0d2LpfMVCEEJkwfDCSj8Y76lf6QzpAPVVylNpUjEP01wjnpz6hLJcJdaTGrzwDZoKJEbVXPalfjpJMcJnCgriqLi4fegDxaeQJ3A3Qh1GM2dQ0zFO';

const hash = crypto.createHmac('sha1', secret)
                   //.update('I love cupcakes')
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);



var binary = "1101000" // code for 104
var digit = binary.toString(10); // Convert String or Digit (But it does not work !)

var binary = "1101000" // code for 104
var digit = parseInt(binary, 2);
console.log(digit);

var binary = "1101000";
var digit = parseInt(binary, 2);
console.log(digit);

var binary = 0b1101000; // code for 104
console.log(binary); // prints 104

var binary = "101101";
var decimal = parseInt(binary, 2);
console.log(decimal);


//1ST ONE
const hash1 = (data) => createHash('sha256').update(data).digest('hex');
var a1 = hash1("A");
var b1 = hash1("B");
console.log(hash1(a1+b1));


