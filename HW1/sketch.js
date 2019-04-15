function setup() {
  createCanvas(800, 600);
  background(0, 233, 255);
}

function draw() {
  translate (width/2, height/2);
  
  // hair
  fill ('black');
  noStroke();
	ellipse(0, -95, 310, 300);
  
  // ear
  fill (245, 222, 215);
  noStroke();
  ellipse (-130,-5,70,100);
  ellipse (130,-5,70,100);
  
  // head
  fill (255, 234, 232);
  noStroke();
  ellipse (0,-0,270,340);
  
   // part of hair
  fill ('black');
  rotate(PI/45);
  ellipse(0, -125, 283, 120);
  
  
  // eye
  rotate(- PI/60);
  fill ('white');
  noStroke();
  ellipse (-70,-25,80,85);
  ellipse (70,-25,80,85);
  
  fill ('black');
  noStroke();
  ellipse (-70,-15,60);
  ellipse (70,-15,60);
  
  // mouth
  fill ('red')
  strokeWeight(10);
	ellipse (0,100,90,60);
  fill (255, 234, 232);
	rect(-100,45,200,50);
  
  // nose
  noFill ();
  stroke (255, 216, 205);
  strokeWeight (6);
  strokeCap(ROUND);
  arc(0, 28, 30, 30, 0, PI, PI + QUARTER_PI);
}