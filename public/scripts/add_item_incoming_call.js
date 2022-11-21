function add_item_incoming_call(un2) {
	let div = document.createElement("div");
	let accept = document.createElement("div");
	let decline = document.createElement("div");

	let text = document.createTextNode(un2);
	let text2 = document.createTextNode("accept");
	let text3 = document.createTextNode("decline");

	div.className = "item_incoming_call";
	div.id = "iic_" + un2;
	accept.className = "button call_accept";
	decline.className = "button call_decline";
	accept.setAttribute("onclick", `call_accept('${un2}')`);
	decline.setAttribute("onclick", `call_decline('${un2}')`);

	accept.appendChild(text2);
	decline.appendChild(text3);
	div.appendChild(text);
	div.appendChild(accept);
	div.appendChild(decline);
	document.getElementsByClassName("list_incoming_call")[0].appendChild(div);
}
