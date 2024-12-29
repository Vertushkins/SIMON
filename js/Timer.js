class Timer {

	constructor(){
		this.centiseconds = 0;
		this.seconds = 0;
		this.timer_interval;

		this.display_centiseconds_digit_first = document.getElementById("centiseconds-digit-first");
		this.display_centiseconds_digit_second = document.getElementById("centiseconds-digit-second");
		this.display_seconds_digit_first = document.getElementById("seconds-digit-first");
		this.display_seconds_digit_second = document.getElementById("seconds-digit-second");
	}

	turn_on(){
		this.timer_interval = setInterval(() => {
			this.centiseconds++;
			if (this.centiseconds === 100) {
				this.seconds++;
				this.centiseconds = 0;
			}
			if (this.seconds === 60) {
				this.seconds = 0;
			}

			this.display_centiseconds_digit_first.innerHTML = this.centiseconds % 10;
			this.display_centiseconds_digit_second.innerHTML = (this.centiseconds <= 9)? "0" : this.centiseconds.toString()[0];
			this.display_seconds_digit_first.innerHTML = this.seconds % 10;
			this.display_seconds_digit_second.innerHTML = (this.seconds <= 9)? "0" : this.seconds.toString()[0];

		}, 10);
	}

	turn_off(){
		clearInterval(this.timer_interval);

		setTimeout(() => {
			this.display_centiseconds_digit_first.innerHTML = 0;
			this.display_centiseconds_digit_second.innerHTML = 0;
			this.display_seconds_digit_first.innerHTML = 0;
			this.display_seconds_digit_second.innerHTML = 0;
		}, KEEP_TIMER_TIME);

		const sum = this.seconds*1000 + this.centiseconds*10;
		this.seconds = 0; this.centiseconds = 0;
		
		return sum;
	}
}