////Alex NodeList 06.02.21
//https://www.ibm.com/support/knowledgecenter/SS9H2Y_7.7.0/com.ibm.dp.doc/gs_scenario_contenttype.html
//https://www.ibm.com/support/knowledgecenter/SS9H2Y_7.7.0/com.ibm.dp.doc/gs_scenario_contenttype.html
console.alert("Starting Read/Write NodeList");

 /*
  * GatewayScript to read a CSV file
  * Modify with additional information from query string
  */
  var hm = require('header-metadata');
  var service = require('service-metadata');
  session.input.readAsBuffer(function (readAsBufferError, data) {
    if (readAsBufferError) {
      console.error('Error on readAsBuffer 0: ' + readAsBufferError);
   } else {
     // insert the account # on each line
     var content = data.toString();
     var lines = content.split(/\r\n|\n|\r/);
     console.alert('Error on readAsBuffer 1: ' + content);
     // get service variable containing cust #
     var query = new String(service.URI);
     var querys = query.split("=");
     var nlines = "";
     for (var i = 0; i < lines.length; i++) {
       nlines += querys[1] + "," + lines[i] + "\r\n";
     } //end for
     session.output.write(nlines);
     console.alert('Error on readAsBuffer 2: ' + lines);
     console.alert('Error on readAsBuffer 3: ' + lines);
   } //end read as buffer error
   console.error('Error on readAsBuffer 4: ' + lines);
 }); //end read as buffer function

