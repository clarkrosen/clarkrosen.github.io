var playing = false;
var fingers;
var button;
var x = [];
var y = [];
var p = [];
var canvas;

var Particle = function(x, y) {
	this.x = x;
	this.y = y;
	this.diameter = random(10,50);
	this.speed = random(0,10);
	this.color = color(random(255), random(255), random(255));
	this.show = function() {
	  fill(this.color);
	  noStroke();
	  ellipse(this.x, this.y, this.diameter, this.diameter)
	}
	this.fall = function() {
	  this.x = this.x + this.speed;
	}
}

var Splash = function(x, y) {
	this.x = x;
	this.y = y;
	this.diameter = random(5,20);
	this.speed = random(0,10);
	this.color =  color(random(255), random(255), random(255));
	this.show = function() {
	  fill(this.color);
	  ellipse(this.x, this.y, this.diameter, this.diameter)
	}
	this.fall = function() {
	  this.x = this.x - this.speed;
	}
}

function setup() {
  canvas = createCanvas(windowWidth,500);
  canvas.parent('bg');
  fingers = createVideo(['assets/smog2.mov',
                         'assets/smog2.webm']);
  fingers.parent('video')
  fingers.loop();
}


 function draw() {
    for (var i = 0; i < p.length; i++) {
  	p[i].show();
  	p[i].fall();
}
 }
 
 function mouseMoved() {
	p.push( new Particle(windowWidth/2, mouseY) );
	p.push( new Splash(windowWidth/2, mouseY) );
 }
 
 
 
 
 
 
 