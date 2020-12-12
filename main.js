function storyBind() {
	var animal = document.getElementById("animal").value;
	var animal2 = document.getElementById("anotheranimal").value;
	var animal3 = document.getElementById("moreanimal").value;
	var relativespeed = document.getElementById("relativespeed").value;
	var verb = document.getElementById("verb").value;
	var number = document.getElementById("number").value;
	var adjective = document.getElementById("adjective").value;
	var message = document.getElementById("message").value;
	var motivationquote = document.getElementById("motivationquote").value;

	localStorage.setItem("animal1", animal);
	localStorage.setItem("animal2", animal2);
	localStorage.setItem("animal3", animal3);
	localStorage.setItem("relativespeed", relativespeed);
	localStorage.setItem("adjective", adjective);
	localStorage.setItem("verb", verb);
	localStorage.setItem("number", number);
	localStorage.setItem("message", message);
	localStorage.setItem("motivationquote", motivationquote);


}

function ans(a) {
	localStorage.setItem("yesno", a);
}


function Show() {
	for (var i = 0; i <= 7; i++) {
		document.getElementsByClassName("animal1")[i].innerHTML = localStorage.getItem("animal1");
	}
	for (var j = 0; j <= 8; j++) {
		document.getElementsByClassName("animal2")[j].innerHTML = localStorage.getItem("animal2");
	}
	document.getElementsByClassName("animal3")[0].innerHTML = localStorage.getItem("animal3");
	document.getElementsByClassName("relativespeed")[0].innerHTML = localStorage.getItem("relativespeed");
	document.getElementsByClassName("adjective")[0].innerHTML = localStorage.getItem("adjective");
	document.getElementsByClassName("agree")[0].innerHTML = localStorage.getItem("yesno");
	for (var k = 0; k <= 2; k++) {
		document.getElementsByClassName("verb")[k].innerHTML = localStorage.getItem("verb");
	}
	document.getElementsByClassName("number")[0].innerHTML = localStorage.getItem("number");
	document.getElementsByClassName("adjective")[0].innerHTML = localStorage.getItem("adjective");
	document.getElementsByClassName("message")[0].innerHTML = localStorage.getItem("message");
	document.getElementsByClassName("motivationquote")[0].innerHTML = localStorage.getItem("motivationquote");

}


function ClearData() {

	for (var i = 0; i <= 7; i++) {
		document.getElementsByClassName("animal1")[i].innerHTML = "null";
	}
	for (var j = 0; j <= 8; j++) {
		document.getElementsByClassName("animal2")[j].innerHTML = "null";
	}
	document.getElementsByClassName("animal3")[0].innerHTML = "null";
	document.getElementsByClassName("relativespeed")[0].innerHTML = "null";
	document.getElementsByClassName("adjective")[0].innerHTML = "null";
	document.getElementsByClassName("agree")[0].innerHTML = "null";
	for (var k = 0; k <= 2; k++) {
		document.getElementsByClassName("verb")[k].innerHTML = "null";
	}
	document.getElementsByClassName("number")[0].innerHTML = "null";
	document.getElementsByClassName("adjective")[0].innerHTML = "null";
	document.getElementsByClassName("message")[0].innerHTML = "<em>“ This is a meaningful message”</em>";
	document.getElementsByClassName("motivationquote")[0].innerHTML = "null";
}