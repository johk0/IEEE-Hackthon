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

// add and remove class

// menu bar
let totalBars = document.querySelectorAll(".menu-bar");
let totalLists = document.querySelectorAll(".bar");

let changeMenuIcon = function () {
	let a;
	for (let activeBar = 0; activeBar < totalBars.length; activeBar++) {
		a = totalBars[activeBar].classList.toggle("active");
	}
	console.log(a);
	if (a == true) {
		document.getElementById("bar").style.transform = "translate(50px, 0)";
	} else {
		document.getElementById("bar").style.transform = "translate(-150px, 0)";
	}
};
// menu bar
