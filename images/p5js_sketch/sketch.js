var textX = 140;

function setup() {
  createCanvas(400, 400);
  //background("#7777ff");
}

function draw() {
  background(173,216,230);
  fill ("white");
  stroke ("black");
  strokeWeight(3); 
  ellipse(199,180,120,120); //face
  
 
  fill ("yellow"); 
  rect(100,172,80,20); //body
  
  //left eye
  fill ("white"); 
  ellipse(180,160,15,15);
  
  //left eye
  fill ("white");
  ellipse(155,160,15,15);
  
  //left eyeball 
  fill ("black");
  ellipse (155,160,5,15)
  
  //right eyeball
  fill ("black");
  ellipse (180, 160, 5, 15);
  
  
  //hat
  fill ("blue");
  stroke ("black");
  strokeWeight (3);
  ellipse (200, 125, 70, 35);
  
   //left feet
  fill ("white");
  stroke ("black");
  strokeWeight (3); 
  ellipse (230, 230, 40, 20);
  
  
  //text
  fill ("blue");
  noStroke();
  textFont ('Courier New')
  text("DUCKY THE DUCK", 145, 80);
  
  if (textx>400){     
     textx = 0;   
  }else{     
     textx=textX + 5;   
  }
   

}
