

var ground;
var Box1,Box2,Box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// function preload()
// {
// }

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

    Box1=new Box(330,height-120,150,8)

    
    Box2=new Box(252,height- 150,8,50)


   Box3=new Box(405,height-150,8,50)
	
	
	paper1=new Paper(40,200,10,60)
    
	ground = new Ground(200,height-100,1200,20)
  
    World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground.display()

  Box1.display()
  Box2.display()
  Box3.display()
  paper1.display()
  
 
//  drawSprites();
 
}

function keyPressed(){

 if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:8,y:-8})
  }
 
}

