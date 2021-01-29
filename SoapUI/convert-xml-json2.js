///22.01.21
/// https://davidwalsh.name/convert-xml-json

export function xmlToJson(xmlFile) {

};

const xmlFile = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
<soapenv:Body>
   <tem:Add>
	  <tem:intA>2</tem:intA>
	  <tem:intB>2</tem:intB>
   </tem:Add>
</soapenv:Body>
</soapenv:Envelope>`;



	  const lines = xmlFile.split('\n').map(function(line){
		  return line.split(',')    //How to Parse by new lines(\n) and map by "," the CSV FIle
	  }) 
	 console.log(lines);
	

const newLocal = 'test';
console.log(newLocal);
console.log(xmlFile);
