function call_make(un2, directly) {
	if (Object.keys(conn).includes(un2)) {
		return;
	}
	add_item_video_container(un2);
	document.getElementsByClassName("controller")[0].style.visibility = "visible";

	let users;
	if(Object.keys(conn).length == 0) {
		users = JSON.stringify([]);
	} else {
		users = JSON.stringify(Object.keys(conn));
		currently_speaking = getCookie("user_name");
	}

	conn[un2] = peer.connect(un2);
	conn[un2].on("data", (data) => {
		console.log(data);
		handle_conn_data(data);
	});

	call_outgoing[un2] = peer.call(un2, stream_local, {metadata: {"user_name": getCookie("user_name"), "group_call_users": users, "add_me_directly": directly}});

	call_outgoing[un2].on('stream', function(stream) {
		document.getElementById("video_" + un2).srcObject = stream;
	});
}
