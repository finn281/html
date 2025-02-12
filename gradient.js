let colors;
let currentIndex = 0;
let nextIndex = 1;
let lerpAmount = 0;

function setup() {
  // Create a full-window canvas and set it as a background
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Make sure the canvas stays behind all other elements

  // Define colors
  colors = [
    color(139, 141, 180), // faded_indigo
    color(135, 203, 193), // dusty_mint
    color(246, 128, 178)  // pigeon_rose
  ];

  noStroke();
}

function draw() {
  // Create a gradient that cycles between colors
  let currentColor = lerpColor(colors[currentIndex], colors[nextIndex], lerpAmount);
  setGradient(0, 0, width, height, currentColor, colors[nextIndex]);

  // Update lerpAmount to cycle through colors smoothly
  lerpAmount += 0.01;
  if (lerpAmount >= 1) {
    lerpAmount = 0;
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % colors.length; // Cycle to the next color
  }
}

function setGradient(x, y, w, h, c1, c2) {
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let col = lerpColor(c1, c2, inter);
    stroke(col);
    line(x, i, x + w, i);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
