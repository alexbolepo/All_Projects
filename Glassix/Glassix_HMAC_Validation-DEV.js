//@@AB  23.03.21  readAsBuffers
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
        console.error("@@AB 5  : " + buffers.toString());

        var body = buffers.toString();
        const crypto = require('crypto');
        const key = '0KtKcfNvNc231fD0d2LpfMVCEEJkwfDCSj8Y76lf6QzpAPVVylNpUjEP01wjnpz6hLJcJdaTGrzwDZoKJEbVXPalfjpJMcJnCgriqLi4fegDxaeQJ3A3Qh1GM2dQ0zFO';
        const hmac = crypto.createHmac('hmac-sha1', Buffer.from(key));
        const result = hmac
            .update(body)
            .digest('hex');
        console.error("@@AB 7 Hello : " + result);
        const result2 = "sha1=" + result;
        console.error("@@AB 8 Hello : " + result2);

        const hm = require('header-metadata');
        var allHeaders = hm.current.headers;
        var Xhub_Header = hm.current.get("X-Hub-Signature");
        console.alert("@@AB 9 The Headers are : " + JSON.stringify(allHeaders));
        console.alert("@@AB 10 Hello : " + Xhub_Header);



            if (Xhub_Header !== result2) {
            console.alert("@@AB 20 Hello : Wrong Key - Unauthorized");
            session.reject("@@AB 25 Error: Wrong Key - Unauthorized");


        } else {
            console.log('Request validated.');
            console.alert("@@AB 30 Hello : 'Request validated.");
        }
    }
});