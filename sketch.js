var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var astronaut;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  astronaut = createSprite(300,200);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg);
  drawSprites();
  textSize(25);
  fill(225);
  text("Instructions",2,25);
  textSize(15);
  fill(225);
  text("Up Arrrow = Brushing",2,50);
  textSize(15);
  fill(225);
  text("Down Arrow = Gyming",2,68);
  textSize(15);
  fill(225);
  text("Left Arrrow = Eating",2,87);
  textSize(15);
  fill(225);
  text("Right Arrow = Sleeping",2,105);
  textSize(15);
  fill(225);
  text("m key = Moving",2,123);
  
  
   edges= createEdgeSprites();
   astronaut.collide(edges);
  


if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
   }

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
   }


if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
   }


if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("sleeping",sleep);
  astronaut.changeAnimation("sleeping");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
   }

if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  //astronaut.y = 350;
  astronaut.velocityX = 100;
  astronaut.velocityY = 90;
   }
}