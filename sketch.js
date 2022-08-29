var sea,ship;
var seaImg,shipImg;
var bock;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png")
  shipImg2=loadImage("ship-1.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");
bock=createSprite(10,210,10,140);
  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;
  ship = createSprite(230,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  ship.addImage("stopingShip",shipImg2);
}


function draw() {
  background(0);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
 
  //sea.x = -3;
  //sea.velocityX = -3;
  sea.velocityX = 3;
  bock.velocityX=1.5;
  ship.velocityX=0.1;
   
 if(bock.collide(ship)) {
  ship.addAnimation("stopingship",shipImg2)
  sea.velocityX=0;
  bock.velocityX=0;
  ship.velocityX=0;
 }
 
  
    
  drawSprites();
}
