const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1,stand2;
var engine, world;

function setup() {
  engine = Engine.create;
  world = World.create;
  createCanvas(800,400);
  ground = new Ground(400,0,800,10)
  stand1 = new Ground(300, 150, 50,10);
}

function draw() {
  background(255,255,255);
  ground.display();
  stand1.display();  
  drawSprites();
}