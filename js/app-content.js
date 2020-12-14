/* console.log("Hello, world"); // check console log in developer tools on browser

var VariableName;

VariableName = "Hello, World!";

var pokemon = prompt(); */

/* JS #1 */
var cupcake = "Good Morning, Cupcake!";
console.log(cupcake);


var promptHelp = "Would you like to chat?";
var response = prompt(promptHelp);
console.log(response);


var alertMessage;
if (response === "Yes") {
    alertMessage = "I'm still learning Web Development. Please hold until I can figure out a response.";
} else {
    alertMessage = "Good thing you are not holding your breath!";
}
alert(alertMessage);