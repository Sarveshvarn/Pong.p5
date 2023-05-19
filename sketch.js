let leftScore = 0;
let rightScore = 0;

function setup() {
    createCanvas(600, 400);
    ding = loadSound("ding.mp3");
    puck = new Puck();
    left = new Paddle(true);
    right = new Paddle(false);
}

function draw() {
    background(51)
    
    puck.checkPaddleRight(right);
    puck.checkPaddleLeft(left);
    
    left.show();
    right.show();
    left.update();
    right.update();
    
    puck.update();
    puck.edges();
    puck.show();
    
    fill(255);
    textSize(32);
    text(leftScore, 32, 40);
    text(rightScore, width-64, 40);
}

function keyReleased() {
    left.move(0);
    right.move(0);
}

function keyPressed() {
    console.log(key);
    if (key == 'W') {
        left.move(-10);
    } else if (key == 'S') {
        left.move(10);
    }

    if (key == 'ArrowUp') {
        right.move(-10);
    } else if (key == 'ArrowDown') {
        right.move(10);
    }
}
