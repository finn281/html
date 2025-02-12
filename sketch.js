let faded_indigo, dusty_mint, pigeon_rose;

function setup() {
  createCanvas(700, 700);
  background(255);

  // Initialize colors
  faded_indigo = color(127, 161, 218);
  dusty_mint = color(63, 133, 115);
  pigeon_rose = color(255, 70, 255);
}

function draw() {
  stroke(0);

  if (mouseIsPressed) {
    // Pick a random palette
    let randomPalette = int(random(0, 3));

    // Switch colors based on randomPalette
    switch (randomPalette) {
      case 0:
        fill(faded_indigo);
        break;
      case 1:
        fill(dusty_mint);
        break;
      case 2:
        fill(pigeon_rose);
        break;
    }
  } else {
    // Default fill color when mouse is not pressed
    fill(random(100, 180));
  }

  // Draw a triangle
  triangle(mouseX, mouseY, mouseY * 2, mouseY * 2, mouseX * 3, mouseY * 3);
}
