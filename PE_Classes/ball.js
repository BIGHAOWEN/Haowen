class Ball
{
    constructor()
    {
        this.x = 100;
        this.y = 100;
        this.size = 20;
        this.speed = 2;
    }
    
    bounce()
    {
        if(this.x > width)
    {
      this.speed = -this.speed;
    }
    }

    move()
    {
        this.x = this.x + this.speed;
    }
    
    display()
    {
        fill("red");
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}
