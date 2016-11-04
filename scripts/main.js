// var numOne = document.getElementById("num-one");
// var numTwo = document.getElementById("num-two");
// var addSum = document.getElementById("add-sum");

// numOne.addEventListener("input", add);
// numTwo.addEventListener("input", add);

// function add() {
// 	var one = parseFloat(numOne.value) || 0;
// 	var two = parseFloat(numTwo.value) || 0;
// 	sum = one+two;
// 	addSum.innerHTML = "Total: "+sum;
// }

var thrall = document.getElementById("thrall");
var sylvanas = document.getElementById("sylvanas");
var odyn = document.getElementById("odyn");

thrall.addEventListener("click", picLink);
sylvanas.addEventListener("click", picLink);
odyn.addEventListener("click", picLink);

function picLink() {
	var allImages = document.querySelectorAll("img");
	for (var i = 0; i < allImages.length; i++) {
		allImages[i].className = "hide";
	}
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide";
	}
}


