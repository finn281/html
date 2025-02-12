let overlayImage;

function preload() {
  // Load the image before setup to ensure it is ready
  overlayImage = loadImage("https://i.imgur.com/kiOzysT.jpeg");
}

function setup() {
  createCanvas(700, 700);
  frameRate(2);
}

function draw() {
  background(255);
  
  // Define color palette
  let palette = [
    color(176, 226, 195),  // MINT
    color(156, 162, 159),  // LIGHTGREY
    color(61, 59, 73),     // DARKGREY
    color(59, 59, 59),     // DARKGREY2
    color(205, 167, 225),  // PINK
    color(255, 70, 255),   // NEONPINK
    color(127, 161, 218),  // BABYBLUE
    color(63, 133, 115)    // DARKGREEN
  ];
  
  let numGradients = 15;
  
  for (let i = 0; i < numGradients; i++) {
    let startColor = random(palette);
    let endColor = random(palette);
    let isHorizontal = random(1) > 0.5;
    let x = random(width);
    let y = random(height);
    let gradientWidth = random(100, 400);
    let gradientHeight = random(90, 200);
    
    if (isHorizontal) {
      for (let j = 0; j < gradientWidth; j++) {
        let inter = map(j, 0, gradientWidth, 0, 1);
        let c = lerpColor(startColor, endColor, inter);
        strokeWeight(30);
        stroke(c);
        line(x + j, y, x + j, y + gradientHeight);
      }
    } else {
      for (let j = 0; j < gradientHeight; j++) {
        let inter = map(j, 0, gradientHeight, 0, 1);
        let c = lerpColor(startColor, endColor, inter);
        strokeWeight(30);
        stroke(c);
        line(x, y + j, x + gradientWidth, y + j);
      }
    }
  }
  
  // Blend mode setup

    blendMode(LIGHTEST);
  
  
  // Resize image to fit canvas if needed
  overlayImage.resize(width, height);
  
  // Draw the overlay image
  image(overlayImage, 0, 0);
  
  // Reset blend mode
  blendMode(BLEND);
}
