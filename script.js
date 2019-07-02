var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function toRadians(degrees) {
    return degrees * (Math.PI/180)
}

// ctx.beginPath()
// // x, y, radius, 0, radian/pi
// ctx.fillStyle = "green"
// ctx.arc(500, 10, 12, 0, toRadians(360))
// ctx.fill()
// ctx.closePath

var startBtn = document.getElementById("startBtn");
var restartBtn = document.getElementById("restartBtn");

startBtn.onclick = function() {
    startBtn.style.display = "none";
    paddle1 = new Paddle(10);
    paddle2 = new Paddle(970);
    ball = new Ball();
    window.requestAnimationFrame(draw);
}

function Paddle(x) {
    this.color = "tomato";
    this.x = x;
    this.y = canvas.height / 2;
    this.width = 20;
    this.height = 120;
}

Paddle.prototype.drawPaddle = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.hitPaddle1 = function() {
    if(
        ball.x < paddle1.x + paddle1.width
        &&
        ball.x + ball.dx > paddle1.x
        &&
        ball.y < paddle1.y + paddle1.height
        &&
        ball.y + ball.dy > paddle1.y
        ) {
            ball.dx = - ball.dx;
    }
}

Paddle.prototype.hitPaddle2 = function() {
    if(
        ball.x < paddle2.x + paddle2.width
        &&
        ball.x + ball.dx > paddle2.x
        &&
        ball.y < paddle2.y + paddle2.height
        &&
        ball.y + ball.dy > paddle2.y
        ) {
            ball.dx = - ball.dx;
    }
}

function Ball() {
    this.color = "orange";
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.ballRadius = 10;

    // responsible for the speed and direction of the ball
    this.dy = 5.5;
    this.dx = 5.5;
}

Ball.prototype.drawBall = function() {
    ctx.beginPath();
// x, y, radius, 0, radian/pi
ctx.arc(this.x, this.y, this.ballRadius, 0, toRadians(360))
ctx.fillStyle = this.color;
ctx.fill();
}

Ball.prototype.checkBorder = function() {
    if(
        this.y + ball.dy > canvas.height - this.ballRadius
        ||
        this.y + ball.dy < ball.ballRadius
        ) {
        this.dy = - this.dy;
    }
}

Ball.prototype.checkLeftAndRight = function() {
    if(
        ball.x > canvas.width + 2 * ball.ballRadius
        ||
        ball.x < -2 * ball.ballRadius
        ) {
        return true;
    }
    return false;
}

// restartBtn.onclick = function() {
//     restartBtn.style.display = "none";
//     paddle1 = new Paddle(10);
//     paddle2 = new Paddle(970);
//     ball = new Ball();
//     window.requestAnimationFrame(draw);
// }

function draw() {
    // clear the canvas on each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ball.drawBall();
    
    // movement of the ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    ball.checkBorder();
    if(ball.checkLeftAndRight()) {
        restartBtn.style.display = "inline";
    }

    paddle1.drawPaddle();
    paddle1.hitPaddle1();
    paddle2.drawPaddle();
    paddle2.hitPaddle2();

    window.requestAnimationFrame(draw);

}

function keyDownHandler(event) {
    if(event.key == "z") {
        paddle1.y -= 5;
    }
    else if(event.key == "s") {
        paddle1.y += 5;
    }
    else if(event.key == "ArrowUp") {
        paddle2.y -= 5;
    }
    else if(event.key == "ArrowDown") {
        paddle2.y += 5;
    }
}

document.onkeydown = keyDownHandler;
