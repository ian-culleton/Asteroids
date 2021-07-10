


class Asteroid extends Entity {
  constructor(size, {mountPoint, app}) {
    super({mountPoint, app});
    this.size = size;
    this.$el = makeAsteroid(
      Math.random() * 300, 
      Math.random() * 300,
      this.size
    );
    mountPoint.appendChild(this.$el);
    this._app.asteroids.push(this);
    this.angle = Math.floor(Math.random() * 360);
    this.speed = 1;
  }

  destroy() {
    super.destroy();
    this._app.scoreboard.score += 10;
    if(this.size > 8) {
      const asteroid1 = new Asteroid(this.size / 2, {mountPoint: this._app.$asteroidLayer, app: this._app});
      const asteroid2 = new Asteroid(this.size / 2, {mountPoint: this._app.$asteroidLayer, app: this._app});

      asteroid1.setPosition(
        this.$el.getAttribute('x'),
        this.$el.getAttribute('y')
      )
      asteroid2.setPosition(
        this.$el.getAttribute('x'),
        this.$el.getAttribute('y')
      )

      asteroid1.angle = this.angle + 45;
      asteroid2.angle = this.angle - 45;

      asteroid1.speed = this.speed + 1;
      asteroid2.speed = this.speed + 1;
    }
  }
}