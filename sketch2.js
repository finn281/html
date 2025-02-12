let squareSize = 600; // Size of each square
let lineSpacing = 2; // Spacing between vertical lines
let offsets = [ [100, 100], [300, 300], [700, 1200] ]; // Added third offset
let rotation = 0; // For the new rotating square
let rotation2 = 0;

let faded_indigo, dusty_mint, pigeon_rose;

function setup() {
  createCanvas(700, 700);
  noStroke();
  
  faded_indigo = color(139, 141, 180);
  dusty_mint = color(135, 203, 193);
  pigeon_rose = color(246, 128, 178);
}

function draw() {
  background(170);
  drawBackgroundPattern(pigeon_rose);
  
  push();
  drawSquare(dusty_mint);
  pop();
  
  push();
  translate(offsets[1][0], offsets[1][1]);
  drawSquare(faded_indigo);
  pop();
  
  push();
  translate(offsets[2][0], offsets[2][1]);
  rotate(rotation);
  drawSquare(color(0, 255, 100));
  pop();
  
  // Animate the offsets to create hovering effect
  offsets[0][0] += sin(frameCount * 0.01) * 0.5;
  offsets[0][1] += cos(frameCount * 0.01) * 0.5;
  offsets[1][0] += sin(frameCount * 0.01 + PI) * 0.5;
  offsets[1][1] += cos(frameCount * 0.01 + PI) * 0.5;
  offsets[2][0] += sin(frameCount * 0.015 + PI/2) * 0.3;
  offsets[2][1] += cos(frameCount * 0.015 + PI/2) * 0.3;
  
  // Update rotation
  rotation += 0.006;
  rotation2 += 0.0001;
}

function drawSquare(c) {
  fill(c);
  for (let x = -squareSize / 2; x < squareSize / 2; x += lineSpacing) {
    rect(x, -squareSize / 2, lineSpacing / 2, squareSize);
  }
}

function drawBackgroundPattern(c) {
  fill(c);
  push();
  translate(width / 2, height / 2);
  rotate(radians(10));
  translate(-width / 2, -height / 2);
  for (let y = 0; y < height * 1.5; y += lineSpacing * 2) {
    rect(-width, y, width * 3, lineSpacing);
  }
  pop();
}
