const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies

var s,si,bi,ai,us,ds

function preload(){
  si=loadImage("snake.png")
  bi=loadImage("back.jpg")
  ai=loadImage("apple.jpg")
  us=loadImage("Us.png")
  ds=loadImage("ds.png")
}

function setup() {
  createCanvas(1350,650);
 s=createSprite(150,500)
 s.addImage(si)

}

function draw() {
  background(bi);  
  if(keyDown("LEFT_ARROW")){

    s.x=s.x-3
  }
  if(keyDown("UP_ARROW")){
    s.addImage(us)
    s.y=s.y-3
  }
  if(keyDown("DOWN_ARROW")){
    s.addImage(ds)
    s.y=s.y+3
  }

  if(keyDown("RIGHT_ARROW")){
    s.addImage(si)
    s.x=s.x+3
  }



  drawSprites();
}