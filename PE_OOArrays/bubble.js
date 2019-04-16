 class Bubble
{
    constructor()
    {
        // Create a new snowflake with a default
        // x, y, size, and speed
        this.x = random(0, width);
        this.y = random(-100, height);
        this.size = random(5, 50);
        this.Alpha = random(50, 100);
        this.speed = 1;
    }

    move()
    {
        this.y = this.y - this.speed;
        this.y %= height;
    }
    
     wrap()
    {
        if(this.y < -100)
        {
           this.y = 400;
        }
    }
    
    display()
    {
        push();
        noStroke();
        fill (255,255,0, this.Alpha);
        ellipse(this.x, this.y, this.size, this.size);
        pop();
    }
}
