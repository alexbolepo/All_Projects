"use strict";

const p = document.querySelectorAll('p');
console.log(p);


const script = document.createElement('script');
script.src = "JavaScript/test.js";
script.async = false;
document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);

}

loadScript(JavaScript/test.js);
loadScript(JavaScript/testXXX.js);
