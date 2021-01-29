//https://www.codecademy.com/forum_questions/55dcdfe8b62548c93400024e


var Person = function( theName, theAge ) {
	this.name = theName;
	this.age = theAge;
	this.displayInstance = function() {
	  console.log("The displayInstance -output-"+
				  "\n============================" +
				"\n\t name: " + this.name +
				"\n\t age: " + this.age);
				  };
  };
//now create an Instance of this Class-object
var myObj = new Person("Classy_Rocker",20);
//call the Method displayInstance which takes NO parameters
myObj.displayInstance();
console.log( myObj );
//you can run this in labs.codecademy.com try it !!