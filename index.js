"use strict";

let date= new Date();
let copyright = document.querySelector(".copyright");
copyright.innerHTML=`Copyright © ${date.getFullYear()}`;

let popup = document.getElementById("visible");
function formClick() {
	popup.classList.add("visible");	
}

function formClose(argument) {
	popup.classList.remove("visible");	

}
