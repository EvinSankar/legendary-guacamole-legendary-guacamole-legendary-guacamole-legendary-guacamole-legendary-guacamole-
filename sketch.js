var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var w1,w2,w3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;
    ball = Bodies.circle(50,600,20)
    World.add(world,ball)
	//Create the Bodies Here.
    w1 = new Ground (400,650,800,10)
	w2 = new Ground (500,550,10,200)
	w3 = new Ground (700,550,10,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  w1.display()
  drawSprites();
  w2.display()
  w3.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  if(keyDown("space")){
    force()
  }
}
function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0.01})
}

