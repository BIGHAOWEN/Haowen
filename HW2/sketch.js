var myTimer;
var randomRed;
var randomBlue;
var randomGreen;
var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;

function setup() {
  createCanvas(400, 400);
  myTimer= 0;  
  randomRed= random(0, 255);
  randomGreen= random(0, 255);
  randomBlue= random(0, 255);
  strokeWeight(20.0);
  stroke(255, 100);
} 

function draw() {
  background(randomRed, randomGreen, randomBlue); 
	changeBackground();
 	followTank();
  drawoObstacles();
}

function changeBackground() {
  if(myTimer> 60)  {
  	myTimer= 0;     
  	randomRed= random(0, 255);     
  	randomGreen= random(0, 255);     
  	randomBlue= random(0, 255);
  }
  else  {
    myTimer= myTimer+ 1;
  }
}
  
function followTank() {
  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);
  fill("white");
  segment(x, y, angle1);
  ellipse(x, y, 20, 20);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function drawoObstacles() {
  fill("Red");
	ellipse(400,0,randomRed,randomRed);
  fill("Blue");
  ellipse(0,0,randomBlue,randomBlue);
  fill("black");
  rect(randomRed,300,60,60);
  fill(randomRed,randomGreen,randomBlue) ;
  triangle(200, 175, 225, 225, 175, 225);  
}
	