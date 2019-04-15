var bg=255;

var score = 0;

var ballX;

var ballY;

var Size=20;

var xpos=0;

var ypos;

var zpos=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bg);
  shoot1();
  shoot2();
  escape();
  sizeUp();
  Reset();
}

 // If the "q" key is pressed, shoot lots of ellipse from top right corner.
function shoot1() {
  ypos=random(0,200);
  xpos=random(200,400);
  if(keyIsPressed && key == 'q'){
  for(var i=0;i<10; i++){
  stroke(0);
  fill("yellow");
  ellipse(xpos,ypos,50,50);
  }
  }
}

 // If the "w" key is pressed, shoot a ellipse honrizontally.
function shoot2() {
  if(keyIsPressed && key == 'w'){
  stroke(0);
  fill("red");
  zpos=zpos+4;
  ellipse(zpos,300,50,50);
  }
}


 // The blue ball moves with mouse.
  function escape(){
    fill("blue");
    stroke(255);
    ellipse(mouseX, mouseY, Size, Size);
  }


 // The blue ball size up and background get darker when the mouse is pressed.
  function sizeUp(){
  if (mouseIsPressed === true) {
    Size=Size+0.1
    bg=bg-1
  }
  }
    
  
// If the "c" key is pressed, reset everything
function Reset(){
  if(keyIsPressed && key == 'c'){
    bg=255
    zpos = 0;
    Size=20;
  }
}