class Bullet extends Entity {
  constructor({mountPoint, app, position, angle, speed}) {
    super({mountPoint, app})
    this.size = 10;
    this.angle = angle;
    this.speed = speed;
    this.$el = makeBullet(5, 10, {stroke: 'white'});
    mountPoint.appendChild(this.$el);
    this.setPosition(position[0], position[1]);
    this._app.ships.push(this);
  }

  tick() {
    super.tick();
    setTimeout(() => {
      this.destroy();
    }, 500) 
  }

  destroy() {
    if(this.$el.parentElement === null) return;
    super.destroy();
    this._app.ships.splice(this._app.ships.indexOf(this), 1);
  }
}