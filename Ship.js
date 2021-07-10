

class Ship extends Entity {
  constructor({mountPoint, app}) {
    super({mountPoint, app});
    this.size = 10;
    this.$el = makeShip(145, 145);
    mountPoint.appendChild(this.$el);
    this._app.ships.push(this);
    this.maxSpeed = 10;
    this._mountPoint = mountPoint
    this.boundHandler = null;

    this.bulletType = Bullet;

    this.addKeyListeners();
  }

  upgradeGun() {
    this.bulletType = BulletSpray;
  }

  spawnBullet() {
    const bullet = new this.bulletType({
      mountPoint: this._app.$shipLayer, 
      app: this._app,
      position: [
        this.$el.getAttribute('x'),
        this.$el.getAttribute('y')
      ],
      angle: this.angle,
      speed: 16
    });
  }

  handleWASD(event) {
    switch(event.key) {
      case 'w':
        if(this.speed < this.maxSpeed) this.speed++;
        break;
      case 's':
        if(this.speed > 0) this.speed--;
        break;
      case 'a':
        this.angle-=15;
        break;
      case 'd':
        this.angle+=15;
        break;
      case ' ':
        this.spawnBullet();
      default:
        break;
    }
  }

  addKeyListeners() {
    this.boundHandler = this.handleWASD.bind(this)
    const res = document.addEventListener('keypress', this.boundHandler, true)
  }

  destroy() {
    super.destroy();
    document.removeEventListener('keypress', this.boundHandler, true)
    this._app.ships.splice(this._app.ships.indexOf(this), 1);
    this._app.scoreboard.lives = this._app.scoreboard.lives - 1;
    setTimeout(() => {
      this._app.spawnShip();
    }, 2000)
  }

}
