// backgrounds
// let st;
let ma;
let as;
// button images
var galleryImg;
var asImg;
var homeImg;
// stars
let stars = []
// switch statement
let gameState = 'start';
// loading images
// Font
let myFontb;

function preload() {
  // font
  myFontb = loadFont('Font/sitka-bold.ttf');
  // backgrounds
  ma = loadImage('assets/main-02.jpg')
  as = loadImage('assets/artiststatement-03.jpg')
  // buttons
  galleryImg = loadImage('assets/gallerybutton-04.png');
  asImg = loadImage('assets/asbutton-05.png');
  homeImg = loadImage('assets/homebutton-06.png')
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  InitialButton();
  textFont(myFontb);
  for (i = 0; i < 500; i++){
    let star = {
			x:random(0,width),
			y:random(0,height)
		};
    stars.push(star);
}
}

function drawStars() {
  for (i = 0; i < 500; i++){
    let x = stars[i].x;
		let y = stars[i].y;
    fill(255);
    ellipse(x,y,random(1,3),random(1,3));
	}
}

function titleScreen() {
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('BORN TO BE', 810, 490);
  textFont(myFontb);
}

function draw() {
  switch (gameState) {
    case 'start':
      background(0);
      titleScreen();
      drawStars();
      click1.draw();
      click2.draw();
    //image(st, 0, 0);
    break;
    case 'main':
    image(ma, 0, 0, windowWidth, windowHeight);
    click3.draw();
    click4.draw();
    break;
    case 'artist':
    image(as, 0, 0, windowWidth, windowHeight);
    click5.draw();
    click6.draw();
    break;
  }
}

// clickables
function InitialButton() {
click1 = new Clickable();
click1.image = galleryImg;
click1.locate (680, 520);
click1.resize(100, 33);
click1.text = "  ";
click1.strokeWeight = 0;
click1.cornerRadius = 100;
click1.onRelease = function () {
  gameState = 'main'
}
click2 = new Clickable();
click2.image = asImg;
click2.locate (790, 520);
click2.resize(150, 33);
click2.text = "   ";
click2.strokeWeight = 0;
click2.cornerRadius = 100;
click2.onRelease = function () {
  gameState = 'artist'
}
click3 = new Clickable();
click3.image = homeImg;
click3.locate (1330, 20);
click3.resize(100, 33);
click3.text = "   ";
click3.strokeWeight = 0;
click3.cornerRadius = 100;
click3.onRelease = function () {
  gameState = 'start'
}
click4 = new Clickable();
click4.image = asImg;
click4.locate (1450, 20);
click4.resize(150, 33);
click4.text = "   ";
click4.strokeWeight = 0;
click4.cornerRadius = 100;
click4.onRelease = function () {
  gameState = 'artist'
}
click5 = new Clickable();
click5.image = homeImg;
click5.locate (1380, 20);
click5.resize(100, 33);
click5.text = "   ";
click5.strokeWeight = 0;
click5.cornerRadius = 100;
click5.onRelease = function () {
  gameState = 'start'
}
click6 = new Clickable();
click6.image = galleryImg;
click6.locate (1500, 20);
click6.resize(100, 33);
click6.text = "  ";
click6.strokeWeight = 0;
click6.cornerRadius = 100;
click6.onRelease = function () {
  gameState = 'main'
}
}
