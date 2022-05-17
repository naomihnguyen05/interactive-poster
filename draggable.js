class Draggable {
  constructor() {

    this.dragging = false;
    this.rollover = false;

     this.circleOneX = 60;
     this.circleOneY = 500;
     this.circleOneW = 240;
     this.circleOneH = 240;
  }

  over() {
    // mouse over object
    if (mouseX > this.circleOneX && mouseX < this.circleOneX + this.circleOneW && mouseY > this.circleOneY && mouseY < this.circleOneY + this.circleOneH) {
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
    // Different fill based on state
    // if (this.dragging) {
    //   fill(50);
    // } else if (this.rollover) {
    //   fill(100);
    // } else {
    //   fill(175, 200);
    // }
    image(co, this.circleOneX, this.circleOneY, this.circleOneW, this.circleOneH);
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
  }

  // released() {
  //   // Quit dragging
  //   this.dragging = false;
  // }
}
