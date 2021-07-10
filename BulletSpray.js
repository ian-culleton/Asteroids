class BulletSpray extends Bullet {
  constructor({mountPoint, app, position, angle, speed}) {
    super({mountPoint, app, position, angle, speed});
    this.sprayBullet1 = new Bullet({mountPoint, app, position, angle: angle-15, speed: speed / 2});
    this.sprayBullet2 = new Bullet({mountPoint, app, position, angle: angle+15, speed: speed / 2});
  }

  tick() {
    super.tick();
    this.sprayBullet1.tick();
    this.sprayBullet2.tick();
  }
}