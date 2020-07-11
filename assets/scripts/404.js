let rocket = new Rocket(window.innerWidth/2, window.innerHeight/2),
    sky = new starSky(),
    fire = [];

function preload() {
  img = loadImage("https://image.flaticon.com/icons/png/512/123/123369.png");
}

function setup() {
  	createCanvas(windowWidth, windowHeight);
	  background(0);
		setRocketAngle(rocket);
    let d = Math.sqrt(Math.pow(mouseX - rocket.x-64, 2) + Math.pow(mouseY - rocket.y-64, 2));
    rocket.setV(d/50);
	  sky.init(30);
	}

function draw() {
  	rocket.move();
  	sky.move(rocket.vX, rocket.vY);
  
  	noStroke();
  	clear();
		fill('#000000');
		rect(0, 0, windowWidth, windowHeight);
  	fill('#FFFFFF');
  	for(let i = 0; i < sky.stars.length; i++) {
     	ellipse(sky.stars[i].x, sky.stars[i].y, sky.stars[i].r); 
    }
  
  	translate(rocket.x, rocket.y);
  	rotate(rocket.angle);
		const traingleLength = 3 + 10*rocket.v/2;
		const c1 = color("#17b9d6");
		const c2 = color("rgba(0, 0, 0, 0)");
		
		for (let i = 0; i < traingleLength; i++) {
			const ratio = i / traingleLength;
			stroke(lerpColor(c1, c2, 1 * ratio));
			line(-45 - i, -4 - 8 * (1 - ratio), -45 - i, 4 + 8 * (1 - ratio));
		}
	  
  	fill("#FF5722");
    rotate(PI/2);
  	image(img, -64, -64, 128, 128);
}

function mouseMoved() {
  setRocketAngle(rocket);
  let d = Math.sqrt(Math.pow(mouseX - rocket.x-64, 2) + Math.pow(mouseY - rocket.y-64, 2));
  rocket.setV(d/50);
}

function setRocketAngle(r) {
	let dX = mouseX - r.x,
      	dY = mouseY - r.y,
      	angle = Math.atan(dY/dX);
  
  	angle = dX < 0 ? angle + PI : angle;
	rocket.rotate(angle);
}

function Rocket(x = 100, y = 100) {
	this.x = x;
  	this.y = y;
  	this.vX;
  	this.vY;
  	this.v = 0;
  	this.angle = 0;
}

Rocket.prototype.move = function() {
	// this.x += this.vX;
	// this.y += this.vY;
  	
  this.vX = this.v * Math.cos(this.angle);
	this.vY = this.v * Math.sin(this.angle);
}

Rocket.prototype.rotate = function(angle) {
	this.angle = angle;
}

Rocket.prototype.setV = function(v) {
  this.v = v;
	this.vX = this.v * Math.cos(this.angle);
	this.vY = this.v * Math.sin(this.angle); 
}

Rocket.prototype.getV = function() {
	return this.v;
}

function starSky() {
	this.stars = []; 
}

starSky.prototype.init = function(n) {
	for(let i = 0; i < n; i++) {
     	 this.stars.push({
			x: random(0, window.innerWidth),
			y: random(0, window.innerHeight),
			r: random(4, 10)
         });
    }
}

starSky.prototype.move = function(vX, vY) {
	 for(let i = 0; i < this.stars.length; i++) {
		this.stars[i].x += (-vX/9)*this.stars[i].r;
		this.stars[i].y += (-vY/9)*this.stars[i].r;
       
       	if(this.stars[i].x < 0)
          this.stars[i].x = window.innerWidth;
       	if(this.stars[i].x > window.innerWidth)
          this.stars[i].x = 0;
       	if(this.stars[i].y < 0)
          this.stars[i].y = window.innerHeight;
       	if(this.stars[i].y > window.innerHeight)
          this.stars[i].y = 0;
     }
}
                        
function random(min, max) {
 	return Math.floor(Math.random() * (max - min) + min); 
}