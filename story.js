// story.js
document.getElementById("game").style.backgroundColor = "black";
let part1 = anime({
	targets: "#part1",
	opacity: [
		{value: 1, duration: 2000},
		{value: 0, duration: 2000}
	],
	easing: "easeInOutQuart",
});
let part2 = anime({
	targets: "#part2",
	opacity: [
		{value: 1, duration: 3000},
		{value: 0, duration: 3000}
	],
	easing: "easeInOutQuart",
	delay: 4000,
});
let part3 = anime({
	targets: "#part3",
	opacity: [
		{value: 1, duration: 3000},
		{value: 0, duration: 3000}
	],
	easing: "easeInOutQuart",
	delay: 10000,
});
Element.prototype.remove = function() {
	this.parentElement.removeChild(this);
};
function fadeout(){
	document.getElementById("black").remove();
	document.getElementById("game").style.backgroundImage = "url(background0.png)";
}
setTimeout(fadeout, 16000);

let buttons = anime({
	targets: "#buttons",
	delay: 16000,
	opacity: 1,
	duration: 2000,
	easing: "easeInOutQuart",
});