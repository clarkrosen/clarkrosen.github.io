var video;
var canvas;

function setup() {
  canvas = createCanvas(960, 800);
  canvas.parent('back')
  
 	video = createVideo(['assets/lol.mp4', 'assets/lol.webm']);
  video.loop();
  video.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  video.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 20, 82));
  for (var y=0; y<1080; y+=stepSize) {
    for (var x=0; x<1920; x+=stepSize) {
      var i = y * 1920 + x;
      var darkness = (255 - video.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}