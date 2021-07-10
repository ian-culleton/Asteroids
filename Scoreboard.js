class Scoreboard {
  constructor({mountPoint}) {
    this._lives = 3;
    this._score = 0;
    this._level = 1;

    this.$el = makeText({text: this.scoreboardText(), x: 10, y:15});
    this.$el.setAttribute('fill', 'white');
    mountPoint.appendChild(this.$el);
  }

  scoreboardText() {
    return `Lives: ${this._lives} Score: ${this._score} Level: ${this._level}`
  }

  onChange() {
    this.$el.textContent = this.scoreboardText();
  }

  set lives(val) {
    this._lives = val;
    this.onChange();
  }

  get lives() {
    return this._lives
  }

  set score(val) {
    this._score = val;
    this.onChange();
  }

  get score() {
    return this._score;
  }

  set level(val) {
    this._level = val;
    this.onChange();
  }

  get level() {
    return this._level;
  }
}