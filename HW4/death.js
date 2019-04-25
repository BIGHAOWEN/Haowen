class Death
{
    constructor()
    {
    this.w = 27;
    this.h = 55;
    this.leftX = 0;
    this.rightX = 375;
    this.y = 430;

    }
    
    
    displayLeft()
    {
        image(death_left, this.leftX, this.y);
    }
    
    
    displayRight()
    { 
        image(death_right, this.rightX, this.y);
    }
    
    
    disappear()
    {
        this.leftX = this.leftX -20;
        this.rightX = this.rightX +60;
    }
   
}