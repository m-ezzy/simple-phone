function add_item_video_container(un2) {
	let div = document.createElement("div");
	let text = document.createTextNode(un2);
	let video = document.createElement("video");

	div.className = "item_video_container remote";
	div.id = "ivc_" + un2;

	video.className = "video remote";
	video.id = "video_" + un2;
	video.setAttribute("width", "100%");
	video.setAttribute("height", "auto");
	/*video.setAttribute("controls", "controls");*/
	video.setAttribute("autoplay", "true");

	div.appendChild(text);
	div.appendChild(video);
	document.getElementsByClassName("list_video_container")[0].appendChild(div);
}
