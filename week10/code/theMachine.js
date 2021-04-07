console.log("the machine!");
let theP = "yr a hero"
// omg that was wild!!
$('h3').on("click", function() {
    console.log("hello?")
});



$('#myButton').on('click', potato);

function potato() {
    console.log("potato click!");
    $('h3').append(theP);
    $('h4').append("<p>"+ theP + "</p>");
  
}

$('#clickHere').click(function() {
    console.log("yellow click");
    $('#other').text("now the green text is this");
    $('div').css("background-color", "red")
    $('body').css("background-color", "blue");
    $('h3').remove(":contains('hello')");

})
