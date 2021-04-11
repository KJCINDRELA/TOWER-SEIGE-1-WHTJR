
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3,ground4;
var holder;
var box1;
var ball;
var polygon;
var sling;
var polygonIMG;

function preload()
{
   polygonIMG=loadImage("yellow.png");
}

function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //ball = createSprite(100,200,20)

  ground1 = new Ground(500,520,250,20);
  ground2 = new Ground(900,250,250,20);
  ground3 = new Ground(600,750,1200,20);
  ground4 = new Ground(80,600,20,10);

  box1 = new Box(400,490,30,40);
  box2 = new Box(430,490,30,40);
  box3 = new Box(460,490,30,40);
  box4 = new Box(490,490,30,40);
  box5 = new Box(520,490,30,40);
  box6 = new Box(550,490,30,40);
  box7 = new Box(580,490,30,40);

  box8 = new Box(430,440,30,40);
  box9 = new Box(460,440,30,40);
  box10 = new Box(490,440,30,40);
  box11 = new Box(520,440,30,40);
  box12 = new Box(550,440,30,40);

  box13 = new Box(460,410,30,40);
  box14 = new Box(490,410,30,40);
  box15 = new Box(520,410,30,40);

  box16 = new Box(490,370,30,40);

  box17 = new Box(830,215,30,40);
  box18 = new Box(860,215,30,40);
  box19 = new Box(890,215,30,40);
  box20 = new Box(920,215,30,40);
  box21 = new Box(950,215,30,40);

  box22 = new Box(860,175,30,40);
  box23 = new Box(890,175,30,40);
  box24 = new Box(920,175,30,40);

  box25 = new Box(890,135,30,40);

  ball = Bodies.circle(80,530,20);
  slingshot = new SlingShot(this.ball,{x:100,y:200});
  
  World.add(world,ball);


  

  //Engine.run(engine);
}

function draw() {
  background("white"); 
  rectMode(CENTER);
  //Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  
  fill("lightgreen");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("lightblue");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("pink")
  box13.display();
  box14.display();
  box15.display();
  fill("orange");
  box16.display();
  fill("lightgreen");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("lightblue");
  box22.display();
  box23.display();
  box24.display();
  fill("pink");
  box25.display();


  //slingshot.display();

  imageMode(CENTER)
  image(polygonIMG ,ball.position.x,ball.position.y,40,40);
   
  //drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}