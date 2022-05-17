class Draggable {
  constructor() {

    this.dragging = false;
    this.rollover = false;

     this.circleOneX = 60;
     this.circleOneY = 500;
     this.circleOneW = 240;
     this.circleOneH = 240;

     this.circleTwoX = 1100;
     this.circleTwoY = 50;
     this.circleTwoW = 330;
     this.circleTwoH = 330;

     this.bMoonX = -95;
     this.bMoonY = 30;
     this.bMoonW = 405;
     this.bMoonH = 405;

     this.wStarX = 800;
     this.wStarY = 170;
     this.wStarW = 214;
     this.wStarH = 214;

     this.bStarX = 950;
     this.bStarY = 550;
     this.bStarW = 146;
     this.bStarH = 146;
  }

  over() {
    // mouse over object
    if (mouseX > this.circleOneX && mouseX < this.circleOneX + this.circleOneW && mouseY > this.circleOneY && mouseY < this.circleOneY + this.circleOneH) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
    if (mouseX > this.circleTwoX && mouseX < this.circleTwoX + this.circleTwoW && mouseY > this.circleTwoY && mouseY < this.circleTwoY + this.circleTwoH) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
    if (mouseX > this.bMoonX && mouseX < this.bMoonX + this.bMoonW && mouseY > this.bMoonY && mouseY < this.bMoonY + this.bMoonH) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
    if (mouseX > this.wStarX && mouseX < this.wStarX + this.wStarW && mouseY > this.wStarY && mouseY < this.wStarY + this.wStarH) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
    if (mouseX > this.bStarX && mouseX < this.bStarX + this.bStarW && mouseY > this.bStarY && mouseY < this.bStarY + this.bStarH) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  // update() {
  //
  //   // Adjust location
  //   if (this.dragging) {
  //     this.circleOneX = mouseX + this.offsetX;
  //     this.circleOneY = mouseY + this.offsetY;
  //   }



  show() {

    stroke(0);
    image(co, this.circleOneX, this.circleOneY, this.circleOneW, this.circleOneH);
    image(ct, this.circleTwoX, this.circleTwoY, this.circleTwoW, this.circleTwoH);
    image(bm, this.bMoonX, this.bMoonY, this.bMoonW, this.bMoonH);
    image(ws, this.wStarX, this.wStarY, this.wStarW, this.wStarH);
    image(bs, this.bStarX, this.bStarY, this.bStarW, this.bStarH);
  }

  pressed() {
    // Did I click
    if (mouseIsPressed) {
    if (mouseX > this.circleOneX && mouseX < this.circleOneX + this.circleOneW && mouseY > this.circleOneY && mouseY < this.circleOneY + this.circleOneH) {
      // this.dragging = true;
      // relative location of click
      this.circleOneX = mouseX - 120;
      this.circleOneY = mouseY - 120;
    }
    }
    if (mouseIsPressed) {
    if (mouseX > this.circleTwoX && mouseX < this.circleTwoX + this.circleTwoW && mouseY > this.circleTwoY && mouseY < this.circleTwoY + this.circleTwoH) {
      this.circleTwoX = mouseX - 165;
      this.circleTwoY = mouseY - 165;
    }
    }
    if (mouseIsPressed) {
    if (mouseX > this.bMoonX && mouseX < this.bMoonX + this.bMoonW && mouseY > this.bMoonY && mouseY < this.bMoonY + this.bMoonH) {
      this.bMoonX = mouseX - 100;
      this.bMoonY = mouseY - 250;
    }
    }
    if (mouseIsPressed) {
    if (mouseX > this.wStarX && mouseX < this.wStarX + this.wStarW && mouseY > this.wStarY && mouseY < this.wStarY + this.wStarH) {
      this.wStarX = mouseX - 107;
      this.wStarY = mouseY - 107;
    }
    }
    if (mouseIsPressed) {
    if (mouseX > this.bStarX && mouseX < this.bStarX + this.bStarW && mouseY > this.bStarY && mouseY < this.bStarY + this.bStarH) {
      this.bStarX = mouseX - 73;
      this.bStarY = mouseY - 73;
    }
    }
  }

  // released() {
  //   // Quit dragging
  //   this.dragging = false;
  // }
}
