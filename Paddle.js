class Paddle{
    constructor(x){
        this.x = x,
        this.width = 20,
        this.height = 100,
        this.y = 170,
        this.velocityY = 0
    }
    show(){
        rect(this.x, this.y, this.width, this.height)
    }
    change_dir(speed){
        this.velocityY = speed
    }
    move(){
        this.y = this.velocityY + this.y
    }
    update(){
        if(this.y >= height-50 || this.y <= 50){
            this.velocityY *= -1
        }
    }
    
}