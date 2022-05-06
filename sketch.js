// backgrounds
// let st;
let ma;
let as;
// button images
// stars
let stars = []
// switch statement
let gameState = 'start';
// loading images
//function preload() {
  // st =
  // ma =
  // as =
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
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

function draw() {
  switch (gameState) {
    case 'start':
      background(0);
      drawStars();
    //image(st, 0, 0);
    break;
    case 'main':
    //image(ma, 0, 0);
    break;
    case 'artist':
    //image(as, 0, 0);
    break;
  }
}

// clickables
function InitialButton() {

}
