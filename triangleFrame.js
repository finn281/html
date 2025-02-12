function setup() {
  createCanvas(1080, 1080);
  background(255);
}

function draw() {
  // Generate random coordinates for the triangle's vertices
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);
  let x3 = random(width);
  let y3 = random(height);

  // Choose a random color
  let randomPalette = floor(random(0, 8)); 
  switch (randomPalette) {
    case 0:
      fill(127, 161, 218); // faded_indigo
      break;
    case 1:
      fill(176, 226, 195); // dusty_mint
      break;
    case 2:
      fill(255, 70, 255); // pigeon_rose
      break;
    case 3:
      fill(random(100, 180));
      break;
    case 4:
      fill(random(100, 180));
      break;
    case 5:
      fill(random(100, 180));
      break;
          case 6:
      fill(random(100, 180));
      break;
    case 7:
      fill(random(100, 180));
      break;
  }

  stroke(0);
    /*triangle(700, 400, 425, 840, 500, 600);
    for (let i = 0; i < 40; i++) {
        triangle(700, 400, 825, 140, 1000, 200);
        triangle(700, 400, 425, 840, x3, y2);
        if (i==35) {
            background(255);
        }
        
}*/
   
    
    triangle(700, 400, 425, 840, x3, y2); 
    
    background(255, 255, 255, 8);
  /* triangle(288, 654, 525, 540, x3, y2); */
    
}