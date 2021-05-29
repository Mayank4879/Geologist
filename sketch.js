
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, ground, stone, rubber;
var sand1, sand2, sand3, sand4, sand5, sand6;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(100,50);
	ground = new Ground(400, 700, 800, 20);
	stone = new Stone(280, 600, 100, 100);
	rubber = new Rubber(600, 600, 60);
	sand1 = new Sand(400, 600, 10); 
	sand2 = new Sand(400, 600, 10);
	sand3 = new Sand(400, 600, 10);
	sand4 = new Sand(400, 600, 10);
	sand5 = new Sand(400, 600, 10);
	sand6 = new Sand(400, 600, 10);
	iron = new Iron(200,600,90,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
	hammer.display();
	ground.display();
	stone.display();
	rubber.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	iron.display();

  drawSprites();
 
}



