// sketch by Aashna Soni
// https://github.com/aashnasoni

let symmetry=70; 
let angle = 360 / symmetry;
let saveButton;
let clearButton;
let xoff = 0;
console.log(symmetry)
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(0);
   colorPicker = createColorPicker('#ed225d');
  colorPicker.position(450, 500);
  saveButton = createButton('save');
  saveButton.mousePressed(saveSnowflake);
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  slider = createSlider(0.3, 32, 0, 0.1);
  //colorMode(HSB);

}

function saveSnowflake() {
  save('snowflake.png');
}

function clearCanvas() {
  background(0);
}


function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    

    if (mouseIsPressed) {
      let hu = map(sin(xoff), -1,1,0,255);
      xoff += 1;
      stroke(colorPicker.color());
      let angle = 360 / symmetry;
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        //let d = dist(mx, my, pmx, pmy);
        //let sw = map(d, 0, 16, 16, 2);
        let sw = slider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}












//Inspiration Credits:
// Kaleidoscope Snowflake
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/155-kaleidoscope-snowflake.html
// https://youtu.be/R3C2giDfmO8
