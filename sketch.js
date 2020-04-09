let player;

const ROTATE_AMOUNT = 0.1;

function setup() {
  createCanvas(400, 400);
  var rightEdge = createSprite(400,200,1,400);
  var leftEdge = createSprite(0,200,1,400);
  var topEdge = createSprite(200,0,400,1);
  var bottomEdge = createSprite(200,400,1,400);
  player = new Player();
  
}

function draw() {
  background(0);
  player.update();
  player.draw();
  if (player.collide(topEdge)) {
      player.respawn();
  }
  if (player.collide(bottomEdge)) {
      player.respawn();
  }
  if (player.collide(rightEdge)) {
      player.respawn();
  }
  if (player.collide(leftEdge)) {
      player.respawn();
  }
      
}
function keyPressed() {
  
   if (keyCode == LEFT_ARROW) {
  	player.rotateAmount = -ROTATE_AMOUNT;
  } else if (keyCode == RIGHT_ARROW) {
		player.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode == UP_ARROW && player.gear < 4) {
  	player.gear++;
  } else if (keyCode == DOWN_ARROW && player.gear > 1) {
		player.gear--;  
  }
}


function keyReleased() {
	if (keyCode == RIGHT_ARROW  || keyCode == LEFT_ARROW)  {
  	player.rotateAmount = 0;
  } 
}