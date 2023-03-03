class Particle {
  constructor(x, y, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    if (this.firework) {
      this.shoot();
    } else {
      this.shape();
    }
    this.acc = createVector(0, 0);
  }

  shoot() {
    this.vel = createVector(0, random(-15, -8));
  }

  shape() {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 9));
  }
  
  applyForce(force) {
    this.acc.add(force)
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.92);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    if (this.lifespan <= 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    if (!this.firework) {
      strokeWeight(5)
      stroke(255, this.lifespan);
    } else {
      strokeWeight(5);
      stroke(255);
    }

    if (this.lifespan < 255 && this.lifespan > 200) {
      strokeWeight(8);
      stroke(212, 96, 126);
    }
    point(this.pos.x, this.pos.y);
  }
}

class Burst extends Particle {

  shape() {
    this.vel = p5.Vector.random2D();
    this.vel.mult(12);
  }
  
  shoot() {
    this.vel = createVector(0, random(-13, -10));
  }
  update() {
    if (!this.firework) {
      this.vel.mult(0.92);
      this.lifespan -= 12;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    if (!this.firework) {
      strokeWeight(5)
      stroke(83, 168, 196, this.lifespan);
    } else {
      strokeWeight(5);
      stroke(83, 168, 255);
    }

    if (!this.firework && this.lifespan < 200) {
      strokeWeight(8);
      stroke(83, 168, 255);
    }
    point(this.pos.x, this.pos.y);
  }
}


class Chunky extends Particle {
  shape() {
    this.vel = createVector(random(.5, -.5), random(-3, 3));
    this.vel.mult(floor(random(-4, -5)));
  }

  show() {
    if (!this.firework) {
      strokeWeight(random(1, 8));
      stroke(246, 228, 136, this.lifespan);
    } else {
      strokeWeight(6);
      stroke(246, 228, 136);
    }
    
    point(this.pos.x, this.pos.y);
  }
}

class Flare extends Particle {

  constructor(x, y, firework) {
    super();
    this.pos = createVector(x, y);
    this.firework = firework;
    if (this.firework) {
      this.shoot();
    } else {
      this.shape();
    }
    this.lifespan = 900;
    this.a = 1;
  }

  shoot() {
    this.vel = createVector(0, random(-15, -10));
  }

  shape() {
    this.vel = createVector(random(-2, 2), noise(3) * -1);
    this.vel.mult(random(6, 12));
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    if (!this.firework) {
      strokeWeight(3)
      stroke(212, 96, 126, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(212, 96, 126);
    }

    if (!this.firework && this.lifespan < 200) {
      this.a++;
      stroke(212, 50 * this.a, 50 * this.a);
    }
    point(this.pos.x, this.pos.y);
  }
}