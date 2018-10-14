let blue = anime({
	targets: "#glitch #blue",
	translateX: [
		{value: 5, duration: 50, easing: "linear"},
		{value: 0,  duration: 50, easing: "linear"}
	],
	delay: 2000,
	loop: true,
});

let red = anime({
	targets: "#glitch #red",
	translateX: [
		{value: -5, duration: 50, easing: "linear"},
		{value: 0,  duration: 50, easing: "linear"}
	],
	delay: 2000,
	loop: true
});