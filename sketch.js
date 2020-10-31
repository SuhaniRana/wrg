
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1, ground1, stone1, boy, mango1;

function preload()
{
	BoyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new tree(220,370);
	ground1 = new Ground(450,700,950,60);
	stone1 = new Stone(160,500,100,100);
	stone1.scale = 0.2;

	boy = createSprite(200, 600, 200,60);
	boy.addImage(BoyImage)
	boy.scale = 0.1

	mango1 = new Mango(700,350,50,50);
	mango2 = new Mango(760,340,50,50);
	mango3 = new Mango(700,290,50,50);
	mango4 = new Mango(750,290,50,50);
	mango5 = new Mango(800,400,50,50);
	mango6 = new Mango(600,450,50,50);
	mango7 = new Mango(650,390,50,50);
	mango8 = new Mango(820,310,50,50);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree1.display();
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  drawSprites();
 
}



