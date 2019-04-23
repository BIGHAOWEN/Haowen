class roadMarking
{
    constructor()
    {
    this.w = 10;
    this.h = 200;

    this.x = floor(width/2 - this.w/2);
    this.y = 0;
    this.Speed = 7;
    }

    update() 
    {
        this.y = this.y + this.speed;
        this.y %= height;
    }
    
    offscreen () 
    {
        if(this.y > 300)
        {   
        this.y = 0
        }
    }
    
    show()
    {
        push();
        strokeWeight(3);
        fill("yellow");
        rect(this.x, this.y, this.w, this.h);
        pop();
    }
    