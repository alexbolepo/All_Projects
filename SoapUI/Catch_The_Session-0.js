////Alex Catch The Session 05.02.21
//https://www.ibm.com/support/knowledgecenter/SS9H2Y_7.7.0/com.ibm.dp.doc/context_js.html
//https://www.ibm.com/support/knowledgecenter/SS9H2Y_7.7.0/com.ibm.dp.doc/context_js.html#context_readAsBuffers

console.alert("Starting Read/Write Payload Alex Catch The Session");

//session.input.readAsBuffer(function (error, buffer) {
session.input.readAsBuffer(function (error, buffer) {

  if (error) {
    // handle error
    session.output.write(error.errorMessage);
    console.error("readAsBuffer() failure: %s", error); //New
  } else {
    /* write the default output buffer */
    session.output.write(buffer);
    console.alert("readAsBuffer() success: %s", buffer); //New

    //Find the json
    var specifyJson = JSON.stringify(buffer);
    console.alert("@@@ //Find the json" + specifyJson);

    // var json = JSON.parse();
    // console.alert("@@@ //Find the jsonParce " + json);

    var responceJson = buffer.id;
    console.alert("@@@ //Find the jsonType " + responceJson);

    //session.output.write(specifyJson);

    //Get variable
    //var myInputVar = session.input.getVariable('myInputVar');
    //console.alert("@@@ ////Get variable" + myInputVar)
  }
});