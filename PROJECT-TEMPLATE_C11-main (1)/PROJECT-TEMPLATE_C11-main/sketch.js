let ship,shipIng
let sea,seaIng
function preload(){
shipIng=loadAnimation("ship-1.png","ship-2.png")
seaIng=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaIng)
  sea.velocityX=-3
  sea.scale=0.3

  ship=createSprite(130,200,30,30)
  ship.addAnimation("movimento",shipIng)
  ship.scale=0.25
}

function draw() {
  background("blue");
  sea.velocityX=-3
    drawSprites();

 
}
