function call_make(un2) {
	conn = peer.connect(un2);
	call_outgoing = peer.call(un2, stream_local);

	call_outgoing.on('stream', function(stream) {
		document.getElementsByClassName("video remote")[0].srcObject = stream;
		document.getElementsByClassName("button canvas")[0].style.visibility = "visible";
	});

	document.getElementsByClassName("controller")[0].style.visibility = "visible";
}
function call_end() {
	conn.close();
	call_incoming = '';
	call_outgoing = '';
	document.getElementsByClassName("video remote").srcObject = new MediaStream();
	document.getElementsByClassName("controller")[0].style.visibility = "hidden";
}
function call_accept(un2) {
	call_incoming.answer(stream_local);

	call_incoming.on('stream', function(stream) {
		document.getElementsByClassName("video remote").srcObject = stream;
	});

	document.getElementsByClassName("incoming_call_container")[0].removeChild(document.getElementsByClassName("incoming " + conn.peer)[0]);
	document.getElementsByClassName("controller")[0].style.visibility = "visible";
}
function call_decline(un2) {
    conn.close();
	call_incoming = '';
}
