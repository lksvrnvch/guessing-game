class GuessingGame {
    constructor() {
		this.start = null,
		this.stop = null,
		this.center = null;
	}

    setRange(min, max) {
		this.start = min;
		this.stop = max;
    }

    guess() {
		this.center = Math.round((this.start + this.stop)/2);
		return this.center;
    }

    lower() {
		this.stop = this.center;
    }

    greater() {
		this.start = this.center;
    }
}

module.exports = GuessingGame;
