console.log("the message is here!");

//global variable are useful in front end web 
// bc you can query the Chrome console for them
let theBody;
// arrays in js
let theYear = ["jan", "feb", "March"];
console.log(theYear.length)
theYear.push("may");
// pass the body of the DOM into a variable
theBody = document.querySelector("body");
// GET ELEMENT BY ID
// pass the button into a variable using it's id propety
let theButton = document.getElementById("myButton");
// QUERY SELECTOR
// ah! use # syntax when using querySelctor instead of above
let otherButton = document.querySelector("#otherButton");
// EVENT LISTENER
// add an event listener and function to trigger to that variable
theButton.addEventListener('click', myGreatFunction);

function myGreatFunction(){
    console.log("clicked!");
}