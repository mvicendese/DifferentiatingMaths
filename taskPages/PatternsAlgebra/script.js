let time = 0;
let wave = [];
let slider;

function setup() {
  createCanvas(1200, 400);
  slider = createSlider(0,360,0)
}

function draw() {
  background(220);
	translate(200,200);
	let radius =100;
	
	stroke(255);
	noFill();
	ellipse(0,0,radius*2);
	
	let x = radius *cos(time);
	let y = -radius*sin(time);
	wave.push(y);
	fill(255);
	line(0,0,x,y);
	ellipse(x,y,8);
	
	
	translate(150,0);
	
	beginShape();
	noFill();
	for(let i = 0; i < wave.length; i++){
		vertex(i,wave[i]);
    line(x-150,y,i,y);
	}
	endShape();
	time += 0.05;
  if(wave.length>500){
		wave.pop();
	}
}
