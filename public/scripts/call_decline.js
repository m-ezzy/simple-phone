function call_decline(un2) {
    conn[un2].close();
	call_incoming[un2] = {};
	document.getElementsByClassName("list_incoming_call")[0].style.visibility = "hidden";
}
