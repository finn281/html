let faded_indigo, dusty_mint, pigeon_rose;

function setup() {
  createCanvas(700, 700);
  frameRate(30);
  background(255);

  // Define colors
  faded_indigo = color(127, 161, 218);
  dusty_mint = color(63, 133, 115);
  pigeon_rose = color(255, 70, 255);
}

function draw() {
  if (mouseIsPressed) {
    let randomPalette = int(random(0, 3));
    
    switch (randomPalette) {
      case 0:
        stroke(faded_indigo);
             strokeWeight(random(10,15));
        break;
      case 1:
        stroke(dusty_mint);
             strokeWeight(random(10,20));
        break;
      case 2:
        stroke(pigeon_rose);
            strokeWeight(random(10,30));
        break;
    }
   
     
    if (mouseY < 350) {
      line(random(0, 700), 0, mouseX, mouseY);
        background(255, 255, 255, 8);
    } else {
      line(random(0, 700), 700, mouseX, mouseY);
        background(255, 255, 255, 8);
    }
  } else {
    background(255, 255, 255, 8);
  }
}
