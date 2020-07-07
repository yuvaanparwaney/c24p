const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  trash = new TrashCan();
  paper = new Paper();
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  trash.display();
  paper.display();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:67,y:-67});
  }
}