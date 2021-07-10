class App {
  constructor() {
    this.tickCount = 0;
    this.tickIntervalId = null;

    this.$svgEl = document.getElementById('asteroids');
    this.$background = makeRect(0,0,CONFIG.WINDOW_HEIGHT,CONFIG.WINDOW_HEIGHT);
    this.$asteroidLayer = makeLayer();
    this.$shipLayer = makeLayer();
    this.$upgradeLayer = makeLayer();
    this.$hudLayer = makeLayer();

    this.asteroids = [];
    this.ships = [];
    this.upgrades = [];
    this.scoreboard = new Scoreboard({mountPoint: this.$hudLayer});

    this.$svgEl.appendChild(this.$background);
    this.$svgEl.appendChild(this.$asteroidLayer);
    this.$svgEl.appendChild(this.$shipLayer);
    this.$svgEl.appendChild(this.$upgradeLayer);
    this.$svgEl.appendChild(this.$hudLayer);

    this.onGameStart();
  }

  spawnAsteroid() {
    const asteroid = new Asteroid(32, {mountPoint: this.$asteroidLayer, app: this});
  }

  spawnShip() {
    const ship = new Ship({mountPoint: this.$shipLayer, app: this});
  }

  onGameStart() {
    this.spawnAsteroid();
    this.spawnAsteroid();

    this.spawnShip();
    
    this.tickIntervalId = setInterval(this.tick.bind(this), 60);
  }

  onGameEnd() {
    console.log('GAME OVER')
    clearInterval(this.tickIntervalId);
  }

  onLevelUp() {
    this.scoreboard.level = this.scoreboard.level + 1;
    for(let i = 0; i < this.scoreboard.level; i++) {
      this.spawnAsteroid();
    }
  }

  hasCollision(ent1, ent2) {
    const hb1 = ent1.hitbox();
    const hb2 = ent2.hitbox();
    return (
      hb1.top < hb2.bottom && 
      hb1.bottom > hb2.top && 
      hb1.left < hb2.right && 
      hb1.right > hb2.left
    )
  }

  detectCollisions() {
    this.ships.forEach(ship => {
      this.asteroids.forEach(asteroid => {
        if(this.hasCollision(ship, asteroid)){
          ship.destroy();
          asteroid.destroy();
          if (this.scoreboard.lives <= 0) {
            this.onGameEnd();
          }
        }
      })
      this.upgrades.forEach(upgrade => {
        if(this.hasCollision(ship, upgrade)) {
          ship.upgradeGun();
          upgrade.destroy();
        }
      })
    })
  }

  tick () {
    this.tickCount++;
    if(Math.random() > 0.999) {
      new Upgrade({mountPoint: this.$upgradeLayer, app: this});
    }
    this.asteroids.forEach(asteroid => asteroid.tick());
    this.ships.forEach(ship => ship.tick());
    if(this.tickCount % 10 === 0) {
      this.scoreboard.score += this.scoreboard.level;
    }
    if(this.tickCount % 300 === 0) {
      this.onLevelUp();
    }

    this.detectCollisions();
  }

}