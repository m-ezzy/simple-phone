function make_call(un2) {
	/*t.style.animationPlayState = "running";*/
	
	create_video(un2);
	document.getElementsByClassName("controller")[0].style.visibility = "visible";

	let users;
	if(Object.keys(conn).length == 0) {
		users = JSON.stringify([]);
	} else {
		users = JSON.stringify(Object.keys(conn));
	}

	conn[un2] = peer.connect(un2);
	call_outgoing[un2] = peer.call(un2, stream_local, {metadata: {"user_name": getCookie("user_name"), "group_call_users": users}});

	call_outgoing[un2].on('stream', function(stream) {
		document.getElementById("video_" + un2).srcObject = stream;
	});
}
function end_call() {
	Object.values(conn).forEach(conn => {
		conn.close();
	});
	conn = {};
	call_incoming = {};
	call_outgoing = {};

	Object.values(document.getElementsByClassName("video remote")).forEach(element => {
		document.getElementsByClassName("call_area")[0].removeChild(element);
	});

	document.getElementsByClassName("controller")[0].style.visibility = "hidden";
}
function accept_call(un2) {
	create_video(un2);
	call_incoming[un2].answer(stream_local);

	call_incoming[un2].on('stream', function(stream) {
		document.getElementById("video_" + un2).srcObject = stream;
	});

	console.log(call_incoming[un2].metadata.group_call_users);
	console.log(JSON.parse(call_incoming[un2].metadata.group_call_users));

	let users = JSON.parse(call_incoming[un2].metadata.group_call_users);
	if(users.length != 0) {
		users.forEach(un => {
			make_call(un);
		});
	}

	document.getElementsByClassName("incoming_call_container")[0].style.visibility = "hidden";
	document.getElementsByClassName("incoming_call_container")[0].removeChild(document.getElementById("incoming_" + un2));
	document.getElementsByClassName("controller")[0].style.visibility = "visible";
}
function decline_call(un2) {
    conn[un2].close();
	call_incoming = {};
	document.getElementsByClassName("incoming_call_container")[0].style.visibility = "hidden";
}
