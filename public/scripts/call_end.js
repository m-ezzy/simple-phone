function call_end() {
	Object.values(conn).forEach(conn => {
		conn.close();
	});
	conn = {};
	call_incoming = {};
	call_outgoing = {};

	Object.values(document.getElementsByClassName("item_video_container remote")).forEach(element => {
		document.getElementsByClassName("list_video_container")[0].removeChild(element);
	});

	document.getElementsByClassName("controller")[0].style.visibility = "hidden";
}
