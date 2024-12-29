class Round {
	constructor() {
		this.round = 0;

		this.display_round_digit_first = document.getElementById("round-digit-first");
		this.display_round_digit_second = document.getElementById("round-digit-second");
	}

	get_round() {
		return this.round;
	}

	update() {
		this.round++;

		this.display_round_digit_first.innerHTML = this.round % 10;
		this.display_round_digit_second.innerHTML = (this.round <= 9)? "0" : this.round.toString()[0];
	}

	reset() {
		this.display_round_digit_first.innerHTML = 0;
		this.display_round_digit_second.innerHTML = 0;

		const round = this.round;
		this.round = 0;

		return round;
	}
}