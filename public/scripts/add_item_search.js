function add_item_search(v) {
    let div = document.createElement("div");
	let button = document.createElement("div");
	let text = document.createTextNode(v.user_name);
	let text2 = document.createTextNode("call");

	div.className = "item search";
	button.className = "button call_make";
	button.setAttribute("onclick", `call_make('${v.user_name}', 0)`);

	button.appendChild(text2);
	div.appendChild(text);
	div.appendChild(button);
	document.getElementsByClassName("list search")[0].appendChild(div);
}
