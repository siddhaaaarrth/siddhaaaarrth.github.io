let x1,y1,z1
function setup() {
  createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES);
  x = 0
  y = 0;
  z = 0
  x1=0
  y1=-20
  z1=0
  
  
  // orbitControl();
  // camera(400, -300, 300, x,y,z);
  background(220);
  camera(400, -300, 300, 0,0,0)
  surface()
}

function draw() {
  
  

  ball()
 
  
  

}
  
function ball()
{

 
  
  push()
  translate(x1,y1,z1)
  sphere(10)
  pop()
   if (keyIsDown(UP_ARROW))
    {
      z1=z1-10
    }
  if (keyIsDown(DOWN_ARROW))
    {
      z1=z1+10
    }
  if (keyIsDown(LEFT_ARROW))
    {
      x1=x1-10
    }
  if (keyIsDown(RIGHT_ARROW))
    {
      x1=x1+10
    }
 
}
function surface()
{
  
  for (let i = 0; i <= 15; i++) {

    push()
    translate(x,y,z)
    box(20,20,20)
    pop()
    
    t = random(1, 4);
    f = floor(t);
    if (f == 1) {
      x=x+20;
    }
      if (f == 2) {
      x=x-20;
    }
      if (f == 3) {
      z=z+20;
    }
      if (f == 4) {
      z=z-20;
    }
   
  }
 
  // noLoop()

}
