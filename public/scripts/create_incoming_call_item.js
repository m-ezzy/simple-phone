function create_incoming_call_item(conn) {
	let div = document.createElement("div");
	let accept = document.createElement("div");
	let decline = document.createElement("div");
	let text = document.createTextNode(conn.peer);

	div.className = "incoming " + conn.peer;
	accept.className = "button accept";
	decline.className = "button decline";
	accept.setAttribute("onclick", `call_accept('${conn.peer}')`);
	decline.setAttribute("onclick", `call_decline('${conn.peer}')`);

	div.appendChild(text);
	div.appendChild(accept);
	div.appendChild(decline);
	document.getElementsByClassName("incoming_call_container")[0].appendChild(div);
}
