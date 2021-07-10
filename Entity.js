class Entity {
  constructor({mountPoint, app} = {mountPoint: null, app: null}) {
    this.size = 0;
    this.$el = null;
    this._app = app;
    this.angle = 0;
    this.speed = 0;
  }

  setPosition(x, y) {
    this.$el.setAttribute('x', `${x}`);
    this.$el.setAttribute('y', `${y}`);
  }

  tick() {
    let x = this.$el.getAttribute('x');
    let y = this.$el.getAttribute('y');

    if(x > 300) x = -this.size;
    if(y > 300) y = -this.size;
    if(x < -this.size) x = 300;
    if(y < -this.size) y = 300;

    this.setPosition(
      Number(x)+(Math.sin((this.angle)*(Math.PI/180))*this.speed),
      Number(y)+(Math.cos((this.angle+180)*(Math.PI/180))*this.speed)
    )

    this.$el.setAttribute("transform", `translate(${x}, ${y}) rotate(${this.angle} 0 0)`);
  }

  hitbox() {
    if(this.$el === null) return null;
    return this.$el.getBoundingClientRect();
  }

  destroy() {
    const parent = this.$el.parentElement;
    parent.removeChild(this.$el);
  }
}