const navT = document.getElementById("navT");
const tg_btn = document.getElementById("tg_btn");
const togContent = document.getElementById("togContent");
const navtoggle = document.getElementById("navtoggle");
const clickNav = document.getElementsByClassName("clicked");

tg_btn.addEventListener("click", clicked);

function clicked() {
	if (togContent.className == "clicked") {
		togContent.classList.remove("clicked");
	} else {
		togContent.classList.add("clicked");
	}
}

