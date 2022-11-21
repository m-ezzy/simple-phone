function getCookie(cookie_key) {
	const name = cookie_key + "=";
	const cDecoded = decodeURIComponent(document.cookie); //to be careful
	const cArr = cDecoded.split('; ');
	let res = '';
	cArr.forEach(val => {
		if (val.indexOf(name) === 0) {
			res = val.substring(name.length);
		}
	});
	return res;
}
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

document.body.onload = function() {
	let text = document.createTextNode(getCookie("user_name"));
	document.getElementsByClassName("item_video_container local")[0].appendChild(text);
	/*
	console.log(document.getElementsByClassName("button"));

	Object.values(document.getElementsByClassName("button")).forEach(element => {
		element.onmouseleave = function() {
			this.style.animationName = "";
		}
		element.onclick = function() {
			this.style.animationName = "scaler";
		}
	});
	*/
}

