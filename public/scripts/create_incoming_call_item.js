function create_incoming_call_item(conn) {
	let div = document.createElement("div");
	let accept = document.createElement("div");
	let decline = document.createElement("div");

	let text = document.createTextNode(conn.peer);
	let text2 = document.createTextNode("accept");
	let text3 = document.createTextNode("decline");

	div.className = "incoming " + conn.peer;
	accept.className = "button accept";
	decline.className = "button decline";
	accept.setAttribute("onclick", `accept_call('${conn.peer}')`);
	decline.setAttribute("onclick", `decline_call('${conn.peer}')`);

	accept.appendChild(text2);
	decline.appendChild(text3);
	div.appendChild(text);
	div.appendChild(accept);
	div.appendChild(decline);
	document.getElementsByClassName("incoming_call_container")[0].appendChild(div);
}
