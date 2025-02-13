let shapes = [];
let imgLayer;
const numShapes = 15;
let positions = [];
let velocities = [];
let shapeBlendModes = [];
let bg;
const blendModes = [
  'screen', 'multiply','difference', 
  'exclusion', 'dodge', 'burn'
];

const shapeURLs = [
 "https://i.imgur.com/BwBo4DI.png",
 "https://i.imgur.com/r2ZnR7S.jpeg",
 "https://i.imgur.com/xbreYni.jpeg",
    "https://i.imgur.com/RlXTIgQ.jpeg"
];

function preload() {
  bg = loadImage("https://i.imgur.com/bdHiuLB.jpeg");
  for (let i = 0; i < numShapes; i++) {
    shapes.push(loadImage(shapeURLs[i % 4]));
  }
}

function setup() {
  createCanvas(494, 1400, WEBGL);
  pixelDensity(1);
  imgLayer = createGraphics(width, height);
  imgLayer.pixelDensity(1);

  for (let i = 0; i < numShapes; i++) {
    shapes[i].resize(random(60, 400), 300);
    positions.push([random(width), random(height)]);
    velocities.push([random(-2, 2), random(-2, 2)]);
    shapeBlendModes.push(blendModes[floor(random(blendModes.length))]);
  }
}

function draw() {
  // Clear both main canvas and image layer
  clear();
  imgLayer.clear();
  
  // Draw background first
  push();
  imageMode(CENTER);
  translate(0, 0, 0);
  image(bg, 0, 0, width, height);
  pop();
  
  // Draw shapes with blend modes
  imgLayer.push();
  for (let i = 0; i < numShapes; i++) {
    positions[i][0] += velocities[i][0];
    positions[i][1] += velocities[i][1];
    
    if (positions[i][0] <= 0 || positions[i][0] >= width - 50) {
      velocities[i][0] *= -1;
    }
    if (positions[i][1] <= 0 || positions[i][1] >= height - 50) {
      velocities[i][1] *= -1;
    }
    
    imgLayer.drawingContext.globalCompositeOperation = shapeBlendModes[i];
    imgLayer.tint(255, 200);
    imgLayer.image(shapes[i], positions[i][0], positions[i][1]);
  }
  imgLayer.pop();
  
  // Draw the combined layer
  push();
  imageMode(CENTER);
  translate(0, 0, 1);
  image(imgLayer, 0, 0, width, height);
  pop();
}