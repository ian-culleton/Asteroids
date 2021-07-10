class Upgrade extends Entity {
  constructor({mountPoint, app}) {
    super({mountPoint, app});
    this.$el = makeCircle(
      Math.random() * CONFIG.WINDOW_WIDTH, 
      Math.random() * CONFIG.WINDOW_HEIGHT, 
      {stroke: 'green'}
    );
    mountPoint.appendChild(this.$el);
    this._app.upgrades.push(this);
  }

  
}