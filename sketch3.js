var portfolio;
var x = [];
var y = [];
var p = [];
var canvas;

var Particle = function(x, y) {
	this.x = 480;
	this.y = y;
	this.diameter = random(10,50);
	this.speed = random(0,30);
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
	this.x = 480;
	this.y = y;
	this.diameter = random(5,20);
	this.speed = random(0,30);
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
  canvas = createCanvas(960,windowHeight);
  canvas.parent('back')
  
  portfolio = createVideo(['assets/portfolio2.mov',
                         'assets/portfolio2.webm']);
  portfolio.parent('video')
  portfolio.loop();
}

 function draw() {
     background(255);
    for (var i = 0; i < p.length; i++) {
  	p[i].show();
  	p[i].fall();
}
 }
 
 function mouseMoved() {
	p.push( new Particle(windowWidth/2, mouseY) );
	p.push( new Splash(windowWidth/2, mouseY) );
 }
 
 
 
 
 
 