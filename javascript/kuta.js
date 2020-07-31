const containerB = document.getElementById("container");
const test = document.getElementById("test");
const pop = document.getElementById("pop");
const navL = document.getElementById("navL");

setTimeout(function () {
	containerB.style.background =
		"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../imagessource/ubut3.jpg) center /cover ";
	containerB.style.transition = "0.3s";
}, 1000);

setTimeout(function () {
	pop.style.display = "block";
	pop.style.transition = "0.4s";
	navL.style.color = "white";
}, 1200);
