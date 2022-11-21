function call_accept(un2) {
	add_item_video_container(un2);
	call_incoming[un2].answer(stream_local);

	call_incoming[un2].on('stream', function(stream) {
		document.getElementById("video_" + un2).srcObject = stream;
	});

	let users = JSON.parse(call_incoming[un2].metadata.group_call_users);
	if(users.length != 0) {
		users.forEach(un => {
			call_make(un, 1);
		});
	}

	document.getElementsByClassName("list_incoming_call")[0].style.visibility = "hidden";
	document.getElementsByClassName("list_incoming_call")[0].removeChild(document.getElementById("iic_" + un2));
	document.getElementsByClassName("controller")[0].style.visibility = "visible";
}
