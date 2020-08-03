const containerB = document.getElementById("container");
const test = document.getElementById("test");
const pop = document.getElementById("pop");
const navL = document.getElementById("navL");
const frame = document.getElementById("frame");
const img1_txt = document.getElementById("img1_txt");
const pop2 = document.getElementById("pop2");
const img2_txt = document.getElementById("img2_txt");


setTimeout(function () {
	containerB.style.background =
		"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(../imagessource/ubut3.jpg) center /cover ";
	containerB.style.transition = "0.3s";
	navL.style.color = "white";
}, 1400);

setTimeout(function () {
	frame.style.display = "block";
	frame.style.transition = "0.4s";
}, 1800);

setTimeout(function () {
	pop.style.display = "block";
	pop.style.transition = "0.4s";
}, 2500);

setTimeout(function () {
	img1_txt.style.display = "block";
}, 3200);

setTimeout(function () {
	img1_txt.style.display = "none";
	pop.style.display = "none";
}, 7000);

setTimeout(function () {
	pop2.style.display = "block";
}, 8000);

setTimeout(function () {
	img2_txt.style.display = "block";
}, 8500);
