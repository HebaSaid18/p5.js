/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  // Put drawings here
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(69);
  }
  ellipse(mouseX, mouseY, 50, 80);
}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};
