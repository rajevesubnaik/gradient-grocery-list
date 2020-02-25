var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var body = document.getElementById("gradient");
var color1;
var color2;

// returns the length if the inputed value
function inputLength() {
	return input.value.length;
}

// appends the list to the buttom and the delete button
function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	button.setAttribute("class", "delete");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

// if there is something in the input field then create the list and chane gradient
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		setGradientRandom();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		setGradientRandom();
	}
}

function toggleLiElement(elem) {
	elem.classList.toggle("done");
}

function deleteLiElement(elem) {
	elem.parentNode.remove();
}

// Function that gets the user input values and then changes the background
// style to them and also displays them
function setGradient () {
	// background: linear-gradient(to right, red , yellow); /* Standard syntax */
	body.style.background = "linear-gradient(to right, " + "rgb(" + color1 + ")" + ", " + "rgb(" + color2 + ")" + ")";;
	console.log(color1 + " This is color 1");
	console.log(color2 + " This is color 2");
}

// Function that generates a random number from 0 to 255

function noGenerator() {
	return Math.round(Math.random() * 255);
}

function randomColorNo() {
	var randomC = noGenerator() + "," + noGenerator() + "," + noGenerator();
	return randomC;
}

// Function that changes the color1 and color 2 values to the random ones
// and then runs the first function 'setGradient' with the new values

function setGradientRandom() {
	color1 = randomColorNo();
	color2 = randomColorNo();
	setGradient();
} 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//using Event Delegation for the Dynamic List Elements
ul.addEventListener("click", function(event) {
	if(event.target.nodeName === "LI"){
		toggleLiElement(event.target);
	}
	else if(event.target.nodeName === "BUTTON") {
		deleteLiElement(event.target);
	}
});



