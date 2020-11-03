
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
   createCanvas(800,600);

   rectMode(CENTER);

   engine = Engine.create();
   world = engine.world;

   RoofObject = new Roof(200,100, width/4, 20);
   
   
   Bob1=new Bob(width/2-40*2,height/4+200,40) 
   Bob2=new Bob(width/2-40,height/4+200,40);
   Bob3=new Bob(width/2,height/4+200,40);
   Bob4=new Bob(width/2+40,height/4+200,40);
   Bob5=new Bob(width/2+40*2,height/4+200,40);

  
    Rope1 = new Rope(Bob1.body,RoofObject.body, -40*2, 0);
    Rope2 = new Rope(Bob2.body,RoofObject.body, -40*1, 0);
    Rope3 = new Rope(Bob3.body,RoofObject.body,  0, 0);
    Rope4 = new Rope(Bob4.body,RoofObject.body,  40*1, 0);
    Rope5 = new Rope(Bob5.body,RoofObject.body,  40*2, 0);
  
   Engine.run(engine);
}	

function draw(){

  rectMode(CENTER);

  background("aqua");

  RoofObject.display();

  Rope1.display()
  Rope2.display()
  Rope3.display()
  Rope4.display()
  Rope5.display()	

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
}

function keyPressed(){
   if(keyCode===UP_ARROW){
     Matter.body.applyForce(Bob1.body, Bob1.body.position, {x: -50, y:-45});
   }
}
