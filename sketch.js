var right_paddle, left_paddle
var ball
var score_left = 0
var score_right = 0
function setup(){
    createCanvas(400, 400);
    rectMode(CENTER)
    left_paddle = new Paddle(10)
    right_paddle = new Paddle(390)
    ball = new Ball()
}
function draw(){
    background("pink")
    left_paddle.show()
    right_paddle.show()
    text("Player 1 score =",35,50)
    text(score_left,125,50)
    text("Player 2 score =",240,50)
    text(score_right,330,50)
    left_paddle.move()
    right_paddle.move()
    left_paddle.update()
    right_paddle.update()
    ball.show()
    ball.move()
    ball.update()
    if(ball.x >= width){
        score_left++;
        ball.reset()
    }
    if(ball.x <= 0){
        score_right++;
        ball.reset()
    }
    if(ball.x >= width-right_paddle.width && ball.y <= (right_paddle.y+50) && ball.y >= (right_paddle.y-50)){
        ball.velocityX *= -1
    }
    if(ball.x <= left_paddle.width && ball.y <= (left_paddle.y+50) && ball.y >= (left_paddle.y-50)){
        ball.velocityX *= -1
    }
}
function keyPressed(){
    if(keyCode == UP_ARROW){
        right_paddle.change_dir(-2)
    }
    if(keyCode == DOWN_ARROW){
        right_paddle.change_dir(2)
    }
    if(keyCode == 65){
        console.log(keyCode)
        left_paddle.change_dir(-2)
    }
    if(keyCode == 90){
        console.log(keyCode)
        left_paddle.change_dir(2)
    }
}