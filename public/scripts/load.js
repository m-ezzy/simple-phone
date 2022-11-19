function load() {
	
}

let theme = 0;
function change_theme() {
	if (theme == 24) {
		theme = 0;
	} else {
		theme++;
	}
	document.getElementById("container").style.backgroundImage = "url(../assets/images/" + theme + ".jpg)";
}
/*
document.body.onload = function() {
	console.log(document.getElementsByClassName("button"));

	Object.values(document.getElementsByClassName("button")).forEach(element => {
		element.onmouseleave = function() {
			this.style.animationName = "";
		}
		element.onclick = function() {
			this.style.animationName = "scaler";
		}
	});
}
*/
