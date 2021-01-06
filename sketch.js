//author: sayf
//video by: weidi

// When the mouse moves to the left - rotate counterclockwise
// When the mouse moves to the right - rotate clockwise

//setup is to initiate the whole program
//It only runs once

// initialize variables
let gap = 10;
let circleNum = 40;
let firstCircleSize = 20;
let angle = 0;
let ptNum = 100;
let rectSize = 600;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(RADIANS);
}

//draw loops forever
function draw() {
	background(0);
	//a customized shape for  mouse
	noCursor();
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 5, 5);

	//main graph
	push();
	translate(width/2, height/2);
	rotate(angle);
	angle = angle+map(mouseX, 0, width, -0.1, 0.1);

	noFill();
	stroke(255);
	strokeWeight(1);
	for (let i = 0; i < circleNum; i++) {
		arc(0, 0, firstCircleSize + gap * i, firstCircleSize + gap * i, angle * i, 360-angle/2);
	}
	pop();




	//title
	push();
	translate(width/2, height-120);
	noStroke();
	textFont('Arial');
	textSize(15);
	textAlign(CENTER, CENTER)
	text('KIRITIGA',0,0)
	textSize(30)
	text('<3',0,25)
	pop();

	//border of the album cover
	noFill();
	stroke(255);
	strokeWeight(5);
	rectMode(CENTER)
	rect(width/2,height/2,rectSize, rectSize);

	//random noise as background

	push();
	translate(60,60);
	stroke(255);
	strokeWeight(1);
	for(let i=0; i<ptNum; i++){
		point(random(rectSize), random(rectSize));
	};
	pop();
}

// Want circle to rotate based on mouse position
