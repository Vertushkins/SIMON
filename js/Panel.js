class Panel {
	constructor() {
		const color_buttons = document.getElementsByClassName("color-button");

		this.buttons = [
			new Color_button(color_buttons[0], 'green', '#1d4025', '#38e04f', [0, 255, 0, 0.4]),
			new Color_button(color_buttons[1], 'red', '#4d1919', 'red', [255, 0, 0, 0.4]),
			new Color_button(color_buttons[2], 'yellow', '#52571f', 'yellow', [255, 251, 0, 0.4]),
			new Color_button(color_buttons[3], 'blue', '#1f2957', 'blue', [0, 0, 255, 0.4])
		];

		this.button_sequence = [];

		this.green_lamp = document.getElementById("green-lamp");
		this.red_lamp = document.getElementById("red-lamp");
	}

	show_color_sequence(new_color) {
		switch(new_color){
			case ("green"):
				this.button_sequence.push(this.buttons[0]);
				break;
			case ("red"):
				this.button_sequence.push(this.buttons[1]);
				break;
			case ("yellow"):
				this.button_sequence.push(this.buttons[2]);
				break;
			case ("blue"):
				this.button_sequence.push(this.buttons[3]);
				break;
		}

		this.button_sequence.forEach((button, index) => {
			const wait = setTimeout(() => {button.blink()}, index*PIECE_TIME);
		});
	}


	check_choosed_color() {
		let choosed_color = ""

		this.buttons.forEach((button) => {
			if (button.clicked) {
				button.clicked = false;
				choosed_color = button.color;
			}
		});

		return(choosed_color);
	}


	blink_green_lamp() {
		this.green_lamp.style.background = "#38e04f";
		this.green_lamp.style.boxShadow = `0px 0px 26px -3px rgba(0, 255, 0, 0.4)`;
		setTimeout(() => {
			this.green_lamp.style.background = '#1d4025';
			this.green_lamp.style.boxShadow = "";
		}, BLINK_TIME*2);
	}


	blink_red_lamp() {
		this.red_lamp.style.background = "red";
		this.red_lamp.style.boxShadow = `0px 0px 26px -3px rgba(255, 0, 0, 0.4)`;
		setTimeout(() => {
			this.red_lamp.style.background = '#4d1919';
			this.red_lamp.style.boxShadow = "";
		}, BLINK_TIME*2);
	}


	reset() {
		this.button_sequence = [];
	}
}