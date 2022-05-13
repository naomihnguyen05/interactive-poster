class Draggable {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?

     this.circleOneX = 0;
     this.circleOneY = 0;
     this.circleOneW = 240;
     this.circleOneH = 240;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.circleOneX && mouseX < this.circleOneX + this.circleOneW && mouseY > this.circleOneY && mouseY < this.circleOneY + this.circleOneH) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.circleOneX = mouseX + this.offsetX;
      this.circleOneY = mouseY + this.offsetY;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    image(co, this.circleOneX, this.circleOneY, this.circleOneW, this.circleOneH);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.circleOneX && mouseX < this.circleOneX + this.circleOneW && mouseY > this.circleOneY && mouseY < this.circleOneY + this.circleOneH) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.circleOneX - mouseX;
      this.offsetY = this.circleOneY - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}
