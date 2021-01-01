const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world , engine , canvas;
var pendulum1 , pendulum2 , pendulum3 , pendulum4 , pendulum5 , pendulum6 , pendulum7;
var sling1 , sling2 , sling3 , sling4 , sling5 , sling6 , sling7; 
var mConstraint;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options ={
        mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world,mConstraint);
    // for the cradles
    pendulum1 = new Pendulum(380,450,"black");
    pendulum2 = new Pendulum(440,450,"black");
    pendulum4 = new Pendulum(500,450,"black");
    pendulum5 = new Pendulum(560,450,"black");
    pendulum6 = new Pendulum(620,450,"black");    
    pendulum7 = new Pendulum(780,450,"black");

    // for the Sling
    sling1 = new Sling(pendulum1.body, { x: 380 , y: 150 });
    sling2 = new Sling(pendulum2.body, { x: 440 , y: 150 });
    sling4 = new Sling(pendulum4.body, { x: 500 , y: 150 });
    sling5 = new Sling(pendulum5.body, { x: 560 , y: 150 });
    sling6 = new Sling(pendulum6.body, { x: 620 , y: 150 });
    sling7 = new Sling(pendulum7.body, { x: 780 , y: 150 });
}
function draw(){
    background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum4.display();
  pendulum5.display();
  pendulum6.display();
  pendulum7.display();
  sling1.display();
  sling2.display();
  sling4.display();
  sling5.display();
  sling6.display();
  sling7.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
function keyPressed() {
    if (keyCode === DOWN_ARROW) {

      Matter.Body.applyForce(pendulum7.body,pendulum7.body.position,{x:-60,y:-75});

    }
}

