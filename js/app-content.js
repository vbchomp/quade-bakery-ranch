/* JS #1 */
var cupcake = "Good Morning, Cupcake!";
console.log(cupcake);

/* Function that asks if you want to chat*/
function promptHelp() {
    var promptHelp = "Would you like to chat?";
    var response = prompt(promptHelp);
    console.log(response);
  
    var alertMessage;
        if (response.toLowerCase() == "Yes") {
        alertMessage = "I'm still learning Web Development. Please hold until I can figure out a response.";
        } else {
        alertMessage = "Good thing you are not holding your breath!";
    }
alert(alertMessage);
}

/* Calling Chat function */
promptHelp();


/* Function to determine the area */
function areaFunction() {
    var length;
    var width;
    var lengthPrompt = "Enter length";
    var widthPrompt = "Enter width";
    var lengthResponse = prompt(lengthPrompt);
    var widthResponse = prompt(widthPrompt);
    var area = lengthResponse * widthResponse;
    /* console.log(area); */

    var alertMessage = "The area is " + area + "!";

alert(alertMessage);
}

/* Calling area function */
areaFunction();


/* Say Hi function */
function sayHi() {
    document.write ("Hi! How are you?")
}
sayHi();
