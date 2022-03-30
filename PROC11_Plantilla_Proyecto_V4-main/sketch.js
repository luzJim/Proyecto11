var boat,boatimg
var mar,marimg

function preload(){
boatimg=loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
marimg=loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(400,200);
  mar.addImage(marimg);
  mar.velocityX=-3
 mar.scale=0.3

  boat=createSprite(100,200);
  boat.addAnimation("barco",boatimg);
  
  boat.scale=0.25
}


function draw() {
  background("blue");

  if (mar.x<0)
  {
    mar.x=mar.width/8
  }

 drawSprites();
}