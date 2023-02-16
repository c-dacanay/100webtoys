//Questions for Dan: how to get fireflies to wobble?

class Vehicle {
  constructor(x, y) {
    // All the usual stuff
    this.position = createVector(x, y);
    this.r = 13;
    // this.maxspeed = 1.3;
    this.maxspeed = 1.3;
    this.maxforce = .1;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.offset = random(3);
  }

  applyBehaviors(vehicles) {
    let mouse = createVector(mouseX, mouseY);
    let separateForce = this.separate(vehicles);
    let fleeForce = this.flee(mouse);
    let seekForce = this.seek(createVector(width / 2, height * .7));

    separateForce.mult(sep);
    fleeForce.mult(fear);
    seekForce.mult(seek);

    // console.log(mouse);
    this.applyForce(separateForce);
    this.applyForce(fleeForce);
    this.applyForce(seekForce);
    // this.applyForce(wobble);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  flee(mouse) {
    let desired = p5.Vector.sub(mouse, this.position);
    let d = desired.mag();
    if (d < 100) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else if (bugspray) {
      desired.setMag(6);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
  // Separation
  // Method checks for nearby vehicles and steers away
  separate(vehicles) {
    let desiredseparation = desire;
    let sum = createVector();
    let count = 0;
    // For every boid in the system, check if it's too close
    for (let i = 0; i < vehicles.length; i++) {
      let d = p5.Vector.dist(this.position, vehicles[i].position);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        let diff = p5.Vector.sub(this.position, vehicles[i].position);
        diff.normalize();
        diff.div(d); // Weight by distance
        sum.add(diff);
        count++; // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      sum.div(count);
      // Our desired vector is the average scaled to maximum speed
      sum.normalize();
      sum.mult(this.maxspeed);
      // Implement Reynolds: Steering = Desired - Velocity
      sum.sub(this.velocity);
      sum.limit(this.maxforce);
    }
    return sum;
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.position);
    let d = desired.mag();

    // Normalize desired and scale to maximum speed
    desired.normalize();
    desired.mult(this.maxspeed);
    let arrive = 50;
    if (d < 50) {
      let m = map(d, 0, 100, 0, this.maxspeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxspeed);
    }
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force
    return steer;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {

    this.offset += 0.05;
    let alpha = 210 + (100 * sin(this.offset));
    // console.log(alpha)
    push();
    translate(this.position.x, this.position.y);
    fill(255, 250, 151, alpha);
    // console.log(alpha);
    ellipse(0, 0, this.r, (this.r - this.r / 2));
    // fill(0);
    // ellipse(1.1, 0, this.r*.8);
    pop();
  }
}