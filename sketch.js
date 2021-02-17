const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var fairy,fairyImage;
var star,starImage;
var backgroundImage;
var background;

var engine,world 

function preload(){
  fairyImage = loadImage("images/fairy1.png");
  backgroundImage = loadImage("images/starnight.png");
  starImage = loadImage("images/star.png");
   
 
}

function setup() {
  createCanvas(800, 750);


  background = createSprite(0,0,500,250);
  background.addImage(backgroundImage);

  fairy = createSprite(100,600,100,100);
  fairy.addImage(fairyImage);
  fairy.scale = 0.2;

  star = createSprite(750,25,20,20);
  star.addImage(starImage);
  star.scale = 0.2;

  engine=Engine.create();
world=engine.world;


}


function draw() {
  
  if(keyDown("right")){
    fairy.x = fairy.x + 3
  }

  if(keyDown("left")){
    fairy.x = fairy.x -3;
  }
  
  





drawSprites()
}
