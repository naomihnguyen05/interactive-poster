// backgrounds
let ma;
let as;
// let db;
// images
let sm;
let ag;
let mb;
let fp;
let ad;
let sc;
let wa;
// button images
var galleryImg;
var asImg;
var homeImg;
var playImg;
var addImg;
var xImg;
var play2Img;
let gal;
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
// Kaleidoscope
let symmetry = 8;
let angle = 360 / symmetry;
let musicBox;
let x;
// music
let soundBack;
// draggable
let drag;
let co;

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
  play2Img = loadImage('assets/playbutton2-17.png');
  gal = loadImage('assets/gal-18.png');
  // music
  // soundBack = new Howl({ src: ['assets/solitude.mp3'], loop: true, volume: 0.03});
  // soundBack.play();
  // artwork pictures
  ag = loadImage('assets/andrewgarfieldport.jpg');
  mb = loadImage('assets/mannequinbodies.jpeg');
  fp = loadImage('assets/flowerpot.jpeg');
  ad = loadImage('assets/addiction.jpeg');
  sc = loadImage('assets/scissors.jpg');
  wa = loadImage('assets/wirearms.jpg');
  // draggable images
  co = loadImage('assets/draggable-11.png');

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
  drag = new Draggable();
// Kaleidoscope
angleMode(DEGREES);
}

function drawDraggables() {
  drag.pressed();
  drag.over();
  drag.show();
}

// function mousePressed() {
//   drag.pressed();
// }
//
// function mouseReleased() {
//   // Quit dragging
//   drag.released();
// }

function drawKal() {
  translate(width / 2, height / 2);

  //reptition loop:

  for (let i = 0; i < symmetry; i++) {

    push();

    rotate(i*angle);
    //mirroring
    if (i % 2 == 1) {
      scale(-1, 1);
    }
    //animation:

    musicBox = frameCount * 5;
    rotate( musicBox/ 8.0);

    //drawing shapes
    blendMode(ADD);
    noStroke();

    //pink rect
    fill(255, 72, 176);
    rect(400, 100, 20, 300);

    //purple outlines
    strokeWeight(10);
    stroke(147, 129, 255);


    //light blue rect
    fill(190, 227, 219);
    rect(100, 100, 20, 50);

    push();
    fill(253, 231,0 );
    translate(100,100);
    rotate(x*60);
    triangle(30, 75, 90, 20, 100, 80);
    pop();
    x=+

    //blue squares
    push()
    rotate(musicBox/4);
    fill(0, 121, 191);
    rect(30, 20, 55, 55);
    pop()

    // red squares
    push()
    rotate(musicBox/4);
    fill(154, 3, 30);
    rect(80, 100, 55, 55);
    pop()

    // neon green rect
    push()
    rotate(musicBox/4);
    fill(233, 255, 112);
    rect(400, 100, 90, 55);
    pop()

    //green circle
    fill(0, 169, 92);
    circle(80, 180, 25);

    //orange circle
    fill(255, 151, 112);
    circle(300, 240, 100);

    //green arc
    noFill();
    strokeWeight(15);
    stroke(125, 148, 125);
    arc(180, 55, 300, 300, 0, 90);
    pop();
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
    break;
    case 'main':
    image(ma, 0, 0, 1366, 768);
    click3.draw();
    click4.draw();
    click7.draw();
    click16.draw();
    click8.draw();
    click9.draw();
    click10.draw();
    click11.draw();
    click12.draw();
    click13.draw();
    drawDraggables();
    // mousePressed();
    // mouseReleased();
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
    case 'play2':
    background(0);
    image(gal, 1230, 20, 115, 35);
    drawKal();
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

function popupArt3() {
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
  text('DAINTY SUNS',830, 280);
  imageMode(CENTER);
  image(fp, 530, 420, 252, 336);
  textAlign(LEFT);
  textSize(13);
  textFont('myFontb');
  fill(0);
  text('Dainty Suns is an oil painting of a flower pot.',710, 320);
  text('I wanted to create a painting using warm colors',710, 335);
  text('to represent the fall season.',710, 350);
  pop();
  click15.draw();
}

function popupArt4() {
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
  text('SEEING COLORS',830, 280);
  imageMode(CENTER);
  image(ad, 530, 420, 300, 217);
  textAlign(LEFT);
  textSize(13);
  textFont('myFontb');
  fill(0);
  text('This is an abstract oil painting I did to replicate',710, 320);
  text('the feeling of a drug addiction. Drug addictions',710, 335);
  text('are seen as harmful to your body. However, we do not',710, 350);
  text('hear enough about what it feels like to an addicted',710, 365);
  text('user. The colors represent the ecstatic feeling when',710, 380);
  text('taking a drug. The words intertwined in the colors',710, 395);
  text('represents the feeling of being trapped within the',710, 410);
  text('constraints of the drug.',710, 425);
  pop();
  click15.draw();
}

function popupArt5() {
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
  text('VISUALIZING CHANGE', 690, 390);
  imageMode(CENTER);
  image(sc, 680, 300, 480, 100);
  textAlign(LEFT);
  textSize(13);
  textFont('myFontb');
  fill(0);
  text('The concept of this piece was understanding change.',565, 420);
  text('Change to me is like a pair of scissors. Scissors',565, 435);
  text('can be used to create change to objects with one',565, 450);
  text('swift movement. After selecting scissors as my main',565, 465);
  text('item of change, I tried to visualize the scissors in',565, 480);
  text('different mediums. From left to right the scissors are',565, 495);
  text('drawn in: charcoal, watercolors, pencil on grey paper,',565, 510);
  text('color pencil, and pencil on white paper.',565, 525);
  pop();
  click15.draw();
}

function popupArt6() {
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
  text('TOUCH', 690, 430);
  imageMode(CENTER);
  image(wa, 680, 300, 450, 180);
  textAlign(LEFT);
  textSize(13);
  textFont('myFontb');
  fill(0);
  text('Touch was inspired from "The Creation of Adam" by' ,565, 455);
  text('Michelangelo. The painting is of Adam and God almost',565, 470);
  text('touching one another to present the breath of life. ',565, 485);
  text('This piece of mine is an abstract wire sculpture. Unlike',565, 500);
  text(' the painting, The fingers touch and have no direct',565, 515);
  text('connection to the religion. It uses the fingers touching',565, 530);
  text('as a connection between humanity.',565, 545);
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
click7.locate (580, 655);
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
click16 = new Clickable();
click16.image = play2Img;
click16.locate (700, 655);
click16.resize(100, 33);
click16.text = "  ";
click16.strokeWeight = 0;
click16.cornerRadius = 100;
click16.onRelease = function () {
  gameState = 'play2'
}
}
