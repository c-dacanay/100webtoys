// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Eye {
    constructor(x, y, r) {
      this.radius = r;
      this.x = x;
      this.y = y;
      this.color = 0;
    }
  
    update() {
      // edit this
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
  
    display() {
      stroke(0)
      fill(this.color, 44, 200, 0);
      ellipse(this.x, this.y, this.radius);
      
      noStroke()

      fill(this.color, 500, 500, 50);
      //top eyelid
      //x, y, width, height
      rect(this.x - (this.radius * .5), this.y - (this.radius * .5), this.radius, this.radius * .2);

      //pupils
      fill(0, 0, 0, 80);
      ellipse(this.x + (mouseX * .03) - (this.radius * .1), this.y + (mouseY * .06) - (this.radius * .03), this.radius/2);
    }
  }