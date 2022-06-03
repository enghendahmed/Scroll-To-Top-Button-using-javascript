/*Start Scroll to top button */

let button = document.querySelector(".up");

/* How to disappear button at the top of the page and show it before the end of the page   */
window.onscroll = function () {
	/*console.log((this.scrollY));*/
	
	if (this.scrollY >= 2500) {
		button.classList.add("show");
	} else{
		button.classList.remove("show");
	}
};

/* How to click on the button and it pull me up in the page */
button.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});

};


/*End Scroll to top button */