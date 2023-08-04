var bomb,bombimg
var bones,bonesimg
var gold,goldimg
var ground,groundimg
var hook,hookimg
var rock,rockimg
var truck,truckimg
function preload(){
 bombimg=loadImage("bomb.png")
 goldimg=loadImage("gold.png")
 bonesimg=loadImage("bones.png")
 groundimg=loadImage("ground.jpg")
 hookimg=loadImage("hook.png")
 rockimg=loadImage("rock.png")
 truckimg=loadImage("truck.png")
}

function setup(){
  createCanvas(1200,700)
  truck=createSprite(600,200)
  truck.addImage(truckimg)
  truck.scale=.3

  

 
}

function draw(){
  background(groundimg);
 
  
drawSprites()
}
