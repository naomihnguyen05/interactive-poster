class Draggable {
  constructor() {

    this.dragging = false;
    this.rollover = false; 

     this.circleOneX = 0;
     this.circleOneY = 0;
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

  update() {

    // Adjust location
    if (this.dragging) {
      this.circleOneX = mouseX + this.offsetX;
      this.circleOneY = mouseY + this.offsetY;
    }

  }

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
    if (mouseX > this.circleOneX && mouseX < this.circleOneX + this.circleOneW && mouseY > this.circleOneY && mouseY < this.circleOneY + this.circleOneH) {
      this.dragging = true;
      // relative location of click
      this.offsetX = this.circleOneX - mouseX;
      this.offsetY = this.circleOneY - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}
