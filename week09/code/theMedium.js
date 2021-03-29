console.log("the message is here!");

//global variable are useful in front end web 
// bc you can query the Chrome console for them
let theBody, theTxt;

// pass the body of the DOM into a variable
theBody = document.querySelector("body");
// GET ELEMENT BY ID
// pass the button into a variable using it's id propety
let theButton = document.getElementById("myButton");
theTxt = document.querySelector('h2');
// EVENT LISTENER
// add an event listener and function to trigger to that variable
theButton.addEventListener('click', myGreatFunction);

function myGreatFunction(){
    console.log("clicked!");
    //jay lays it down
   theBody.style.backgroundColor = "yellow";
   theTxt.textContent = "you pressed the button!"
}

// Es6 arrow notiona
document.addEventListener('keydown', theEvent => {
    console.log("key pressed!");
    // theTxt.style.backgroundColor = "pink";

})