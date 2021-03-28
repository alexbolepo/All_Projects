//@@AB  23.03.21 
console.log("@@AB 1 Hello");
console.info("@@AB 2 Hello");
console.alert("@@AB 3 Hello");

session.input.readAsBuffers(function (error, buffers) {
    if (error) {
        // handle error
        session.output.write(error.errorMessage);
    } else {
        /* write the default output buffer */
        console.error("@@AB 4 Hello : " + buffers);
        console.error(buffers);
        console.error(buffers.toString());


        var body = buffers.toString();
        //console.error(body);
        const crypto = require('crypto');
        const key = '0KtKcfNvNc231fD0d2LpfMVCEEJkwfDCSj8Y76lf6QzpAPVVylNpUjEP01wjnpz6hLJcJdaTGrzwDZoKJEbVXPalfjpJMcJnCgriqLi4fegDxaeQJ3A3Qh1GM2dQ0zFO';
        

        const hmac = crypto.createHmac('hmac-sha1', Buffer.from(key));
        console.log("@@AB 5 Hello : " + hmac);

        const input = "This is plaintext to hash";
        const result = hmac.update(body).digest('hex');
        console.error("@@AB 6 Hello : " + result);

        //HMAC SUM Generator = ab04c435af7064c6873994099db7e3656d7e0a42
        //                     ed2cf2dd05b1e0fab81e6d7fd15f899b3d819786
        //                     ed2cf2dd05b1e0fab81e6d7fd15f899b3d819786
        
        //HMAC SUM Generator from log text = 22abc8203424e0b3082d6cbabb83101c9e5e7428




        

        //session.output.write (buffers);
    }
});