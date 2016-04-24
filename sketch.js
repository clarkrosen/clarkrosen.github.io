var logo;

var ground;
var player;

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

var p = [];


function preload() {
logo = loadAnimation("assets/0.png", "assets/22.png")
}

function setup() {
  canvas = createCanvas(windowWidth, 200); 
	canvas.parent('middle_panel');
	
	var img = loadImage("assets/lol.png");
	
	player = createSprite(1000, height/2);
	player.addImage(img);
	
  ground = new Group();
  
    
  FB.init({
        appId: '1186723288007631',
        status: true, 
        cookie: true, 
        xfbml: true
    });    
    
   FB.ui({
  method: 'share',
  href: 'https://clarkrosen.github.io/index.html',
}, function(response){});


}

function draw() {
  
    background(255,255,255);
    
    for (var i = 0; i < p.length; i++) {
  	p[i].show();
  	p[i].fall();
}
    
    if(mouseY < 100)
    logo.play();
    else
    logo.stop();

   animation(logo, windowWidth/2, 100);
   
  camera.zoom = .2;
  
  
  drawSprites();

     player.velocity.x -= 1;

  for (var i = 0; i < ground.length; i++) {
    //25 is the half the width of the sprite
    if (d.position.x < player.position.x - width/2 - 25) {

      d.position.x = player.position.x + width/2 + 25;

    }
  }

}

function mouseDragged() {

  	p.push( new Particle(windowWidth/2, mouseY) );
  	p.push( new Splash(windowWidth/2, mouseY) );

  }
  
 (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
