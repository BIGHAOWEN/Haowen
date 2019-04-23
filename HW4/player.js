class Player
{
    constructor()
    {
    this.w = 80;
    this.h = 144;

    this.x = floor(width/2 - this.w/2);
    this.y = floor((3 * height/4) - this.h/2);

    }

    
    show()
    {
        image(im_car_red, this.x, this.y);
    }
    
    turnLeft() 
    {
        this.x -= 5;
        this.x = constrain(this.x, 0, width-this.w);
    }
    
    turnRight() 
    {
        this.x += 5;
        this.x = constrain(this.x, 0, width-this.w);
    }
}