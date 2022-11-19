function create_video(un2) {
    let video = document.createElement("video");

	video.className = "video remote";
    video.id = "video_" + un2;
	video.setAttribute("width", "auto");
	video.setAttribute("height", "45%");
	video.setAttribute("controls", "controls");
	video.setAttribute("autoplay", "autoplay");

	document.getElementsByClassName("call_area")[0].appendChild(video);
}
