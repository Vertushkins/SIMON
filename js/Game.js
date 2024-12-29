class Game {
	constructor(){
		this.inGame = false;

		this.panel = new Panel();
		this.display_round = new Round();
		this.timer = new Timer();

		this.color_sequence = [];

		document.getElementById("start").addEventListener("click", () => this.play());
	}


	gen_new_color() {
		const colors = ["green", "red", "yellow", "blue"];
		const new_color = colors[Math.floor(Math.random()*colors.length)];
		this.color_sequence.push(new_color);

		return (new_color);
	}


	delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async play() {
		this.inGame = true;

		while (this.inGame) {

			this.display_round.update();

			await this.delay(START_TIME);
			this.panel.show_color_sequence(this.gen_new_color());

			await this.delay(GAP_TIME + PIECE_TIME*this.display_round.get_round());
        	await this.try_to_answer();
		}

	}


	try_to_answer() {
		this.timer.turn_on()

		let timeout;
		let stopGame;

    	const promise = new Promise(resolve => {
    		stopGame = resolve;
        	timeout = setTimeout(resolve, FULL_TIME);
    	});

    	promise.then((gameOver) => {
    		this.timer.turn_off();
    		clearTimeout(timeout);
			
			if (gameOver) {
				this.game_over();
			}
			else {
				this.panel.blink_green_lamp();
			}
    	});

		let current_color_index = 0;
		let choosed_color;

		const timer_to_check_color = setInterval(() => {
			choosed_color = this.panel.check_choosed_color();

			if (current_color_index === this.color_sequence.length) {
				clearInterval(timer_to_check_color);
				stopGame(false);
			}

			else if (choosed_color !== "" && choosed_color === this.color_sequence[current_color_index]) {
				current_color_index++;
			}

			else if (choosed_color !== "" && choosed_color !== this.color_sequence[current_color_index]) {
				clearInterval(timer_to_check_color);
				stopGame(true);
			}

		}, 60);

		return promise;

	}


	game_over() {
		this.inGame = false;

		this.panel.blink_red_lamp();

		this.display_round.reset();
		this.panel.reset();

		this.color_sequence = [];
	}
}