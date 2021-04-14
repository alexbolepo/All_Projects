//@@AB  23.03.21  readAsBuffers
console.log("@@AB 1 Hello");
console.info("@@AB 2 Hello");
console.alert("@@AB 3 Hello");

session.input.readAsJSON(function (error, buffers) {
    if (error) {
        // handle error
        session.output.write(error.errorMessage);
    } else {
        /* write the default output buffer */
        console.error("@@AB 4 buffers : " + buffers);
        console.error(buffers);
        //console.error(JSON.parse(buffers));

        console.error("@@AB 5  : " + buffers.toString()); // @@AB 5 : [object Object]
        console.error("@@AB 6 : " + JSON.stringify(buffers)); // @@AB 6 : {"key":"95
        const buffersStringified = JSON.stringify(buffers);
        console.error("@@AB 7 : " + `${buffersStringified} ${buffersStringified.length}`); // @@AB 6 : {"key":"95

        
        const removeEmptySpaces = JSON.stringify(JSON.parse(buffersStringified)) 
        console.error("@@AB 8 : " + `${removeEmptySpaces} ${removeEmptySpaces.length}`);
       

        const crypto = require('crypto');
        const key = '0KtKcfNvNc231fD0d2LpfMVCEEJkwfDCSj8Y76lf6QzpAPVVylNpUjEP01wjnpz6hLJcJdaTGrzwDZoKJEbVXPalfjpJMcJnCgriqLi4fegDxaeQJ3A3Qh1GM2dQ0zFO';
        const hmac = crypto.createHmac('hmac-sha1', Buffer.from(key));
        const result = hmac
            //.update(body)
            //.update(JSON.stringify(buffers))
            .update(JSON.stringify(buffersStringified))
            .digest('hex');
        console.error("@@AB 9 Hello : " + result);
        const result2 = "sha1=" + result;
        console.error("@@AB 10 sha1+results : " + result2);

        const hm = require('header-metadata');
        var allHeaders = hm.current.headers;
        var Xhub_Header = hm.current.get("X-Hub-Signature");
        console.alert("@@AB 11 The Headers are : " + JSON.stringify(allHeaders));
        console.alert("@@AB 12 Xhub_Header is : " + Xhub_Header);
            if (Xhub_Header !== result2) {
            console.alert("@@AB 20 Hello : Wrong Key - Unauthorized");
            session.reject("@@AB 25 Error: Wrong Key - Unauthorized");
        } else {
            console.log('Request validated.');
            console.alert("@@AB 30 Hello : 'Request validated.");
        }
    }
});