function create_video(un2) {
	let div = document.createElement("div");
	let text = document.createTextNode(un2);
	let video = document.createElement("video");

	div.className = "video_item";
	div.id = "video_item_" + un2;

	video.className = "video remote";
	video.id = "video_" + un2;
	video.setAttribute("width", "auto");
	video.setAttribute("height", "45%");
	video.setAttribute("controls", "controls");
	video.setAttribute("autoplay", "autoplay");

	div.appendChild(text);
	div.appendChild(video);
	document.getElementsByClassName("call_area")[0].appendChild(div);
}
