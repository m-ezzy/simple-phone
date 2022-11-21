function handle_incoming_call(call) {
    if(call.metadata.add_me_directly) {
        add_item_video_container(call.metadata.user_name);
	    call.answer(stream_local);

	    call.on('stream', function(stream) {
		    document.getElementById("video_" + call.metadata.user_name).srcObject = stream;
	    });
    } else {
    	call_incoming[call.metadata.user_name] = call;
	    add_item_incoming_call(call.metadata.user_name);
	    document.getElementsByClassName("list_incoming_call")[0].style.visibility = "visible";
    }
}
