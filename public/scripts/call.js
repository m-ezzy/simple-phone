function make_call(un2, t) {
	t.style.animationPlayState = "running";
	create_video(un2);
	document.getElementsByClassName("controller")[0].style.visibility = "visible";

	conn = peer.connect(un2);
	call_outgoing = peer.call(un2, stream_local);

	call_outgoing.on('stream', function(stream) {
		document.getElementById("video_" + un2).srcObject = stream;
	});
}
function end_call() {
	conn.close();
	call_incoming = '';
	call_outgoing = '';
	document.getElementsByClassName("incoming_call_container")[0].style.visibility = "hidden";
	document.getElementsByClassName("call_area")[0].removeChild(document.getElementsByClassName("video remote")[0]);
	document.getElementsByClassName("controller")[0].style.visibility = "hidden";
}
function accept_call(un2) {
	create_video(un2);
	call_incoming.answer(stream_local);

	call_incoming.on('stream', function(stream) {
		document.getElementById("video_" + un2).srcObject = stream;
	});

	document.getElementsByClassName("incoming_call_container")[0].style.visibility = "hidden";
	document.getElementsByClassName("incoming_call_container")[0].removeChild(document.getElementsByClassName("incoming " + conn.peer)[0]);
	document.getElementsByClassName("controller")[0].style.visibility = "visible";
}
function decline_call(un2) {
    conn.close();
	call_incoming = '';
	document.getElementsByClassName("incoming_call_container")[0].style.visibility = "hidden";
}
