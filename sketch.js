
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// var character, objective
// var enemy, healthPacks;
// var backgroundImg,



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background("black");


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



