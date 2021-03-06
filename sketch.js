var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1,wall2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(350,680, 200,30);
	groundSprite.shapeColor='red'

	wall1=createSprite(250,680,20,100);
	wall1.shapeColor='red'
	wall2=createSprite(450,680,20,100);
	wall2.shapeColor='red'

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1});
	var opctions={
        restitution:1
	}
	packageSprite.depth = helicopterSprite.depth;
    helicopterSprite.depth = helicopterSprite.depth + 1;
    

	//Create a Ground
	ground = Bodies.rectangle(width/2,700,width,20, );
 	World.add(world, ground);
	 var opctions={
        isStatic:true
	}
     
	 wall1=Bodies.rectangle(width/2,700,width,100,{isStatic:true})
	 World.add(world,wall1)
	 var opctions={
        isStatic:true
	}
	wall2=Bodies.rectangle(width/2,700,width,100,{isStatic:true})
	 World.add(world,wall2)
	 var opctions={
        isStatic:true
	}
	

	Engine.run(engine);



	
	World.add(world, packageBody);
		
		
	  }
  



function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	
	
	

}



