//var end,end2,end3;
var hr,mn,sc;
var hrAngle, mnAngle,scAngle;

function setup() {
  createCanvas(450,450);
 
  angleMode(DEGREES);

 

}


function draw() {
  background(0);


  hr=hour();
  mn=minute();
  sc=second();

  //To create ab iterative rotation
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)



  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(8);
  line(10,20,120,0);
  pop();


  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  
}