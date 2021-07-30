class Ball{
    constructor(){
        this.x = 200,
        this.y = 200,
        this.radius = 20,
        this.velocityY = 2,
        this.velocityX = 3
    }
    show(){
        circle(this.x, this.y, this.radius);
    }
    move(){
        this.y += this.velocityY;
        this.x +=this.velocityX;
    }
    // Bouncing the ball of the top edge and the bottom edge
    update(){
        if(this.y >= height || this.y <= 0){
            this.velocityY *= -1;
        }
    }
    reset(){
        this.x = 200;
        this.y = 200
    }
}