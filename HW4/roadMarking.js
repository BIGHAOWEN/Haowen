class roadMarking
{
    constructor()
    {
    this.w = 10;
    this.h = 200;

    this.x = width/2
    this.y = 0;
    this.Speed = 7;
    }

    update() 
    {
        this.y = this.y + this.Speed;
        //this.y %= height;
    }
    
    offscreen () 
    {
        if(this.y > 400)
        {   
        this.y = 0
            console.log("offscreen");
        }
        else
            console.log(this.y);
    }
    
    show()
    {
        push();
        strokeWeight(3);
        fill("yellow");
        rect(this.x, this.y, this.w, this.h);
        console.log(this.y);
        pop();
    }
}
    