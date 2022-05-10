// backgrounds
let ma;
let as;
// let db;
// images
let sm;
let ag;
let mb;
// button images
var galleryImg;
var asImg;
var homeImg;
var playImg;
var addImg;
var xImg;
// stars
let stars = []
// switch statement
let gameState = 'start';
// Font
let myFontb;
// drawing tool
var pensize = 1;
var pen = 1;
var r = 0, g = 0, b = 0;
let drawStart = true;
// music
let soundBack;

function preload() {
  // font
  myFontb = loadFont('Font/sitka-bold.ttf');
  // backgrounds
  ma = loadImage('assets/main-02.jpg');
  as = loadImage('assets/artiststatement-03.jpg');
  // db = loadImage('assets/drawingbackground-01.jpg');
  // image
  sm = loadImage('assets/statement-09.png');
  // buttons
  galleryImg = loadImage('assets/gallerybutton-04.png');
  asImg = loadImage('assets/asbutton-05.png');
  homeImg = loadImage('assets/homebutton-06.png');
  playImg = loadImage('assets/playbutton-07.png');
  addImg = loadImage('assets/addbutton-08.png');
  xImg = loadImage('assets/xbutton-10.png');
  // music
  // soundBack = new Howl({ src: ['assets/solitude.mp3'], loop: true, volume: 0.03});
  //soundBack.play();
  // artwork pictures
  ag = loadImage('assets/andrewgarfieldport.jpg');
  mb = loadImage('assets/mannequinbodies.jpeg');

}


function setup() {
  createCanvas(1366, 768);
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

// doodling play screen
function drawPencil(pensize,x,y) {
  strokeWeight(pensize);
  stroke(r,g,b);
  fill(r,g,b);
  ellipse(x,y,3 * pensize,3 * pensize);
  triangle(x-1.5*pensize,y,x+1.5*pensize,y,x,y-3 * pensize);
}

function drawRainbow(pensize, px, py, x, y) {
  strokeWeight(pensize);
  stroke(255, 0, 0);
  line(px, py, x, y);
  py = py + pensize;
  y = y + pensize;
  stroke(255, 128, 0);
  line(px, py, x, y);
  py = py + pensize;
  y = y + pensize;
  stroke(255, 255, 0);
  line(px, py, x, y);
  py = py + pensize;
  y = y + pensize;
  stroke(0, 255, 0);
  line(px, py, x, y);
  py = py + pensize;
  y = y + pensize;
  stroke(0, 255, 255);
  line(px, py, x, y);
  py = py + pensize;
  y = y + pensize;
  stroke(0, 64, 128);
  line(px, py, x, y);
  py = py + pensize;
  y = y + pensize;
  stroke(128, 0, 128);
  line(px, py, x, y);
  py = py + pensize;
  y = y + pensize;
}

function drawButtons() {
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(20);
  //shapes
  noFill();
  rect(0, 20, 20, 20);
  rect(0, 40, 20, 20);
  rect(0, 60, 20, 20);
  rect(0, 80, 20, 20);
  rect(0, 100, 20, 20);
  rect(0, 120, 20, 20);
  fill(255, 0, 0); //red
  rect(0, 200, 20, 20);
  fill(255, 128, 0); //orange
  rect(0, 220, 20, 20);
  fill(255, 255, 0); //yellow
  rect(0, 240, 20, 20);
  fill(0, 255, 0); //green
  rect(0, 260, 20, 20);
  fill(0, 255, 255); //blue
  rect(0, 280, 20, 20);
  fill(0, 64, 128); //indigo
  rect(0, 300, 20, 20);
  fill(128, 0, 128); //purple
  rect(0, 320, 20, 20);
  fill(0); //purple
  rect(0, 340, 20, 20);

  noFill();
  rect(0, 530, 20, 20);
  rect(0, 550, 20, 20);
  rect(0, 570, 20, 20);
  stroke(r,g,b);
  fill(r,g,b);
  //shapes
  line(4, 24, 16, 36);
  ellipse(10, 50, 16, 12);
  rect(3, 64, 14, 12);
  fill(228, 160, 140);
  stroke(0);
  ellipse(10, 90, 12, 12);
  //colors and pen
  drawRainbow(2, 4, 105, 16, 105);
  drawPencil(2,10,132);
  strokeWeight(1);
  //pensize
  fill(0);
  stroke(0);
  ellipse(10, 540, 5, 5);
  ellipse(10, 560, 7.5, 7.5);
  ellipse(10, 580, 10, 10);

  if (drawStart == true) {
    // image(db, 0, 0);
    background(230);
    drawStart = false;
  }
  if (mouseIsPressed) {
    var px = pmouseX,
      py = pmouseY,
      x = mouseX,
      y = mouseY;
    if (x < 20) {
      if (y > 530 && y < 550) pensize = 1;
      else if (y > 550 && y < 570) pensize = 3;
      else if (y > 570 && y < 590) pensize = 5;
      else if (y > 20 && y < 40) pen = 1;
      else if (y > 40 && y < 60) pen = 2;
      else if (y > 60 && y < 80) pen = 3;
      else if (y > 80 && y < 100) pen = 4;
      else if (y > 100 && y < 120) pen = 5;
      else if (y > 120 && y< 140) pen = 6;
      //select color
      else if (y > 200 && y < 220) {
        r = 255;
        g = 0;
        b = 0; //red
      } else if (y > 220 && y < 240) {
        r = 255;
        g = 128;
        b = 0; //orange
      } else if (y > 240 && y < 260) {
        r = 255;
        g = 255;
        b = 0; //yellow
      } else if (y > 260 && y < 280) {
        r = 0;
        g = 255;
        b = 0; //green
      } else if (y > 280 && y < 300) {
        r = 0;
        g = 255;
        b = 255; //blue
      } else if (y > 300 && y < 320) {
        r = 0;
        g = 64;
        b = 128;
      } //indigo
      else if (y > 320 && y < 340) {
        r = 128;
        g = 0;
        b = 128;
      } //purple
      else if (y > 340 && y < 360) {
        r = 0;
        g = 0;
        b = 0;
      } //BLACK
    } else {//paint
      if (pen == 1) {
        strokeWeight(pensize);
        stroke(r, g, b);
        line(px, py, x, y);
      } else if (pen == 2) {
        strokeWeight(pensize);
        stroke(r, g, b);
        fill(r, g, b)
        ellipse(x, y, 3 * pensize, 3 * pensize);
      } else if (pen == 3) {
        strokeWeight(pensize);
        stroke(r, g, b);
        fill(r, g, b)
        rect(x, y, 3 * pensize, 3 * pensize);
      } else if (pen == 4) {
        noStroke();
        fill(255);
        ellipse(x, y, 3 * pensize, 3 * pensize);
      } else if (pen == 5)
        drawRainbow(pensize, px, py, x, y);
      else if (pen == 6)
        drawPencil(pensize,x,y);

    }
  }
  //use esc to empty canvas
  if (keyIsPressed)
    if (keyCode == ESCAPE) {
      background(230);
    }
}

// flashing stars
function drawStars() {
  for (i = 0; i < 500; i++){
    let x = stars[i].x;
		let y = stars[i].y;
    fill(255);
    ellipse(x,y,random(1,3),random(1,3));
	}
}

// Born to Be text
function titleScreen() {
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('BORN TO BE', 680, 380);
  textFont(myFontb);
}

// switch statements
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
    image(ma, 0, 0, 1366, 768);
    click3.draw();
    click4.draw();
    click7.draw();
    click8.draw();
    click9.draw();
    click10.draw();
    click11.draw();
    click12.draw();
    click13.draw();
    click14.draw();
    break;
    case 'artist':
    image(as, 0, 0, 1366, 768);
    drawStars();
    image(sm, 0, 0, 1366, 768);
    click5.draw();
    click6.draw();
    break;
    case 'play':
    drawPencil();
    drawRainbow();
    drawButtons();
    click6.draw();
    break;
    case 'popupart1':
    popupArt1();
    break;
    case 'popupart2':
    popupArt2();
    break;
    case 'popupart3':
    popupArt3();
    break;
    case 'popupart4':
    popupArt4();
    break;
    case 'popupart5':
    popupArt5();
    break;
    case 'popupart6':
    popupArt6();
    break;
    case 'popupart7':
    popupArt7();
    break;
  }
}

// pop up art screens
function popupArt1() {
  push();
  rectMode(CENTER);
  fill(255);
  strokeWeight(0.7);
  stroke(150);
  rect(685, 400, 700, 500, 10);
  textAlign(CENTER);
  textSize(16);
  textFont('myFontb');
  fill(0);
  text('ANDREW GARFIELD PORTRAIT',830, 280);
  imageMode(CENTER);
  image(ag, 530, 420, 252, 336);
  textAlign(LEFT);
  textSize(13);
  textFont('myFontb');
  fill(0);
  text('This is an Andrew Garfield portrait I drew',710, 320);
  text('using charcoal and eraser. I based this drawing',710, 335);
  text('off of a magazine layout photo I found of him.',710, 350);
  text('I learned how to visualize shapes and lines from',710, 365);
  text('a small photo in order to expand it into a larger',710, 380);
  text('drawing. This was drawn on an 18 x 24 inch sheet.',710, 395);
  pop();
  click15.draw();
}

function popupArt2() {
  push();
  rectMode(CENTER);
  fill(255);
  strokeWeight(0.7);
  stroke(150);
  rect(685, 400, 700, 500, 10);
  textAlign(CENTER);
  textSize(16);
  textFont('myFontb');
  fill(0);
  text('MANNEQUIN BODIES',830, 280);
  imageMode(CENTER);
  image(mb, 530, 420, 252, 336);
  textAlign(LEFT);
  textSize(13);
  textFont('myFontb');
  fill(0);
  text('This is a charcoal drawing I drew of a body of',710, 320);
  text('a mannequin. The mannequin was placed under',710, 335);
  text('studio lighting in order to give it shadow and',710, 350);
  text('highlight. I paid very close attention to detail',710, 365);
  text('during this because I wanted to replicate the exact',710, 380);
  text('light, shade, and curvy features of it!',710, 395);
  pop();
  click15.draw();
}

// clickables
function InitialButton() {
click1 = new Clickable();
click1.image = galleryImg;
click1.locate (545, 400);
click1.resize(100, 33);
click1.text = "  ";
click1.strokeWeight = 0;
click1.cornerRadius = 100;
click1.onRelease = function () {
  gameState = 'main'
}
click2 = new Clickable();
click2.image = asImg;
click2.locate (655, 400);
click2.resize(150, 33);
click2.text = "   ";
click2.strokeWeight = 0;
click2.cornerRadius = 100;
click2.onRelease = function () {
  gameState = 'artist'
}
click3 = new Clickable();
click3.image = homeImg;
click3.locate (1080, 20);
click3.resize(100, 33);
click3.text = "   ";
click3.strokeWeight = 0;
click3.cornerRadius = 100;
click3.onRelease = function () {
  gameState = 'start'
}
click4 = new Clickable();
click4.image = asImg;
click4.locate (1190, 20);
click4.resize(150, 33);
click4.text = "   ";
click4.strokeWeight = 0;
click4.cornerRadius = 100;
click4.onRelease = function () {
  gameState = 'artist'
}
click5 = new Clickable();
click5.image = homeImg;
click5.locate (1120, 20);
click5.resize(100, 33);
click5.text = "   ";
click5.strokeWeight = 0;
click5.cornerRadius = 100;
click5.onRelease = function () {
  gameState = 'start'
}
click6 = new Clickable();
click6.image = galleryImg;
click6.locate (1230, 20);
click6.resize(100, 33);
click6.text = "  ";
click6.strokeWeight = 0;
click6.cornerRadius = 100;
click6.onRelease = function () {
  gameState = 'main'
}
click7 = new Clickable();
click7.image = playImg;
click7.locate (630, 655);
click7.resize(100, 33);
click7.text = "  ";
click7.strokeWeight = 0;
click7.cornerRadius = 100;
click7.onRelease = function () {
  drawStart = true;
  gameState = 'play'
}
click8 = new Clickable();
click8.image = addImg;
click8.locate (300, 250);
click8.resize(30, 30);
click8.text = "  ";
click8.strokeWeight = 0;
click8.cornerRadius = 100;
click8.onRelease = function () {
  gameState = 'popupart1'
}
click9 = new Clickable();
click9.image = addImg;
click9.locate (400, 200);
click9.resize(30, 30);
click9.text = "  ";
click9.strokeWeight = 0;
click9.cornerRadius = 100;
click9.onRelease = function () {
  gameState = 'popupart2'
}
click10 = new Clickable();
click10.image = addImg;
click10.locate (620, 300);
click10.resize(30, 30);
click10.text = "  ";
click10.strokeWeight = 0;
click10.cornerRadius = 100;
click10.onRelease = function () {
  gameState = 'popupart3'
}
click11 = new Clickable();
click11.image = addImg;
click11.locate (480, 530);
click11.resize(30, 30);
click11.text = "  ";
click11.strokeWeight = 0;
click11.cornerRadius = 100;
click11.onRelease = function () {
  gameState = 'popupart4'
}
click12 = new Clickable();
click12.image = addImg;
click12.locate (750, 150);
click12.resize(30, 30);
click12.text = "  ";
click12.strokeWeight = 0;
click12.cornerRadius = 100;
click12.onRelease = function () {
  gameState = 'popupart5'
}
click13 = new Clickable();
click13.image = addImg;
click13.locate (950, 530);
click13.resize(30, 30);
click13.text = "  ";
click13.strokeWeight = 0;
click13.cornerRadius = 100;
click13.onRelease = function () {
  gameState = 'popupart6'
}
click14 = new Clickable();
click14.image = addImg;
click14.locate (950, 320);
click14.resize(30, 30);
click14.text = "  ";
click14.strokeWeight = 0;
click14.cornerRadius = 100;
click14.onRelease = function () {
  gameState = 'popupart7'
}
click15 = new Clickable();
click15.image = xImg;
click15.locate (355, 170);
click15.resize(30, 30);
click15.text = "  ";
click15.strokeWeight = 0;
click15.cornerRadius = 100;
click15.onRelease = function () {
  gameState = 'main'
}
}
