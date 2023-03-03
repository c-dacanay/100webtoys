class Firework {
  constructor() {
    this.rnd = random(1);
    // this.type = null;
    if (this.rnd < 0.2) {
      this.firework = new Particle(random(width), height, true);
      this.type = 'particle'
      this.size = random(100, 250);
    } else if (this.rnd < 0.4) {
      this.firework = new Flare(random(width), height, true);
      this.type = 'flare'
      this.size = random(80, 180);
    } else if (this.rnd < 0.6) {
      this.firework = new Burst(random(width), height, true);
      this.type = 'burst'
      this.size = random(60, 100);
    } else {
      this.firework = new Chunky(random(width), height, true);
      this.type = 'chunky'
      this.size = random(30, 60);
    }
    this.exploded = false;
    this.particles = [];
  }

  done() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {

    for (let i = 0; i < this.size; i++) {
      let p;
      if (this.type === 'particle') {
        p = new Particle(this.firework.pos.x, this.firework.pos.y);
      } else if (this.type === 'flare') {
        p = new Flare(this.firework.pos.x, this.firework.pos.y);
      } else if (this.type === 'burst') {
        p = new Burst(this.firework.pos.x, this.firework.pos.y);
      } else {
       p = new Chunky(this.firework.pos.x, this.firework.pos.y);
    }
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
      this.particles[i].update();
    }
  }
}