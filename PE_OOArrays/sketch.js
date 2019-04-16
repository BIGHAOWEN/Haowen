var myBubble = [];
var numBubbles;

function setup(){
    createCanvas(400, 400);
    numBubbles = 100;
    for(var i=0; i<numBubbles; i++)
    {
        myBubble[i] = new Bubble();
    }
}

function draw(){
  background(255);
  
    for(var i=0; i<numBubbles; i++)
    {
        myBubble[i].move();
        myBubble[i].wrap();
        myBubble[i].display();
    }
}



