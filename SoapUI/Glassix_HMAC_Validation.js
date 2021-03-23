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
        const key = 'cf23df2207d99a74fbe169e3eba035e633b65d94';

        const hmac = crypto.createHmac('hmac-sha1', Buffer.from(key));
        console.alert("@@AB 5 Hello : " + hmac);

        const input = "This is plaintext to hash";
        const result = hmac.update(body).digest('hex');
        console.error("@@AB 6 Hello : " + result);

        

        //session.output.write (buffers);
    }
});