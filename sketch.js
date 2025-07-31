function setup() {
  createCanvas(400, 400);
}


let olhoX;
let olhoY;



function draw() {
  background('#52B5E6');
  stroke(100);
  strokeWeight(4);
  
  //rosto
  fill('#B94F2E')
  circle(200, 200, 300);
  
  //olhos
  fill('white')
   circle(150, 150, 60);
   circle(250, 150, 60);
  
  //boca
  fill('#9E9E9E(172,40,172')
  line(150, 270, 250, 235);
  
  //nariz
  fill('black')
  triangle(200, 180, 170, 220, 220, 220);
  
  //sombramcelhas
  line(120, 96, 178, 116);
  line(224, 119, 279, 102);
  
  //pupilas
  //circle(150, 150, 10);
 // circle(250, 150, 10);
  
  //código omitido
  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  
    //novas pupilas
  circle(olhoX, olhoY, 10);
  circle(olhoX + 100, olhoY, 10);
  

  
  
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  
 }
  
 }
  
  
  
  
  
  
  
  
