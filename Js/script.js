// function hideBtn(x) {
// 	x.style.display = "none";
// }
// function removeClass(t) {
// 	let all = document.querySelectorAll(".text");
// 	for (i = 0; i < all.length; i++) {
// 		all[i].classList.remove("text");
// 	}
// }
// function fontSize() {
// 	let a = document.getElementById("pp");
// 	let s = 50;
// 	a.style.fontSize = `${s}px`;
// 	document.getElementById("out").innerHTML = s;
// }

// function New(x) {
// 	var content = x.innerText || x.textContent;
// 	console.log(content);
// 	if (content == "New") {
// 		x.innerHTML = "old";
// 	} else {
// 		x.innerHTML = "New";
// 	}
// }

// add and remove class

// document.getElementById("ppp").classList.remove("text");
// document.getElementById("ppp").classList.toggle("text");
// document.getElementById("ppp").classList.add("text");

// add and remove class

// menu bar
let totalBars = document.querySelectorAll(".bar-container .menu-bar div");
let x = document.querySelectorAll(".bar");

let changeMenuIcon = function () {
	let a;
	for (let activeBar = 0; activeBar < totalBars.length; activeBar++) {
		a = totalBars[activeBar].classList.toggle("active");
	}
	console.log(a);
	if (a == true) {
		document.getElementById("bar").style.transform = "translate(210px, 0)";
		x.forEach(function (ele) {
			ele.onclick = function () {
				x.forEach(function (ele2) {
					ele2.classList.remove("active");
				});
				this.classList.add("active");
			};
		});
	} else {
		document.getElementById("bar").style.transform = "translate(-300px, 0)";
	}
};
// menu bar
// testimonials
var swiper = new Swiper(".slide-content", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: "true",
	fade: "true",
	grabCursor: "true",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
	},
});
