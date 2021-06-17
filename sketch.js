const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var rope ;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  // Pyramid 2 level 1
  b17 = new Block (620,170,30,40);
  b18 = new Block (650,170,30,40);
  b19 = new Block (680,170,30,40); 
  b20 = new Block (710,170,30,40);
  b21 = new Block (740,170,30,40);
  b22 = new Block (770,170,30,40);

  // Pyramid 2 level 2
  b23 = new Block (650,130,30,40);
  b24 = new Block (680,130,30,40);
  b25 = new Block (710,130,30,40);
  b26 = new Block (740,130,30,40);

  // Pyramid 2 level 3
  b27 = new Block (680,90,30,40);
  b28 = new Block (710,90,30,40);

  // Pyramid 2 level 4 and 5
  b29 = new Block (695,50,30,40);
  b30 = new Block (695,20,15,15);
 
  // new object Polygon
  polygon = new Polygon (); 

  // new object Rope
  rope = new Rope (polygon.body,{x:100,y:100});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill("maroon");
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  fill("firebrick");
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  fill("indianred");
  b27.display();
  b28.display();
  fill("lightcoral");
  b29.display();
  fill("antiquewhite");
  b30.display();

  polygon.display();
  rope.display();

  fill ("lightsalmon");
  text("Drag  the stone and release to lauch towards the blocks",25,30);
}
function mouseDragged () {
  Matter.Body.setPosition(polygon.body,{x : mouseX, y: mouseY});
}

function mouseReleased (){
  rope.fly();
}
