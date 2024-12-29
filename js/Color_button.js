class Color_button {

	constructor(button, color, color_off, color_on, rgba) {
		this.color = color;

		this.color_on = color_on;
		this.color_off = color_off;
		this.rgba = rgba;

		this.clicked = false;

		this.button = button;
		this.button.addEventListener("click", () => this.click());
	}

	blink() {
		this.button.style.background = this.color_on;
		this.button.style.boxShadow = `0px 0px 33px 14px rgba(${this.rgba})`;
		setTimeout(() => {
			this.button.style.background = this.color_off;
			this.button.style.boxShadow = "";
		}, BLINK_TIME);
	}

	click() {
		this.button.style.background = this.color_on;
		this.button.style.boxShadow = `0px 0px 33px 14px rgba(${this.rgba})`;
		this.clicked = true;
		setTimeout(() => {
			this.button.style.background = this.color_off;
			this.button.style.boxShadow = "";
		}, CLICK_TIME);
	}
}