var leydy=0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(117, 141, 247 );

  //castle
    fill(54,54,54);
    triangle(40, 105, 100, 10, 170, 105);
    rect(40, 105, 130, 400);
    rect(170 ,140,500,365);
    rect(500, 105, 130, 400);
    rect(220, 110, 30, 30);
    rect(290, 110, 30, 30);
    rect(360, 110, 30, 30);
    rect(430, 110, 30, 30);

    //Windows
   
    fill(0, 0, 0, mouseY);
    rect(200, 200, 60, 60);
    rect(420, 200, 60, 60);
   
   //Door 
   fill(66, 43, 1);
   arc(330, 455, 150,350 ,PI,degrees(0))
   fill(0);
   ellipse(375,370,20,20)
  
  //Grass
    fill(21, 133, 21);
    rect(0, 450, mouseX, 100, leydy);
       
    //Stars
    fill(255,255,255,130)
    ellipse(200,50,10,10)
    ellipse(25,10,10,10,10)
    ellipse(350,125,10,10)
    ellipse(35,200,10,10)
    ellipse(460,50,10,10)
   
}
