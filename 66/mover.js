// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
    constructor(x, y, m) {
      this.mass = m;
      this.position = createVector(x, y);
      this.velocity = createVector();
      this.acceleration = createVector();
      this.color = random(60, 80)
      this.strokeCol = random(200);
    }
  
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
  
    display() {
      stroke(this.color, 44, 100);
      // noStroke();
      strokeWeight(2);
      // noFill();
      fill(0, 0, 100, 70);
      // fill(this.color, 44, 100, 80);
      // fill(this.strokeCol, 44, 100);
      ellipse(this.position.x, this.position.y, this.mass * 16);
    }
  
    attract(other) {
      // Calculate direction of force
      let force = p5.Vector.sub(this.position, other.position);
      // Distance between objects
      let distance = force.mag();
      // Limiting the distance to eliminate "extreme" results for very close or very far objec
      distance = constrain(distance, 23.0, 20.0);
  
      // Calculate gravitional force magnitude
      let strength = (G * this.mass * other.mass) / (distance * distance);
      // Get force vector --> magnitude * direction
      force.setMag(strength);
      return force;
    }
  }