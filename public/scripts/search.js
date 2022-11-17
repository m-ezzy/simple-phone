async function search() {
	document.getElementById("search_results").innerHTML = "";

	let q = document.getElementById("text_search").value;
	if (q == "") { return; }

	let response = await fetch("/search", {method: "POST", mode: 'no-cors', headers: {'Content-Type':'application/x-www-form-urlencoded'}, body: 'q=' + q});
	let data = await response.json();
	console.log(data);

	if (Object.keys(data).length == 0) { return; }

	Object.values(data).forEach(v => {
		let div = document.createElement("div");
		let button = document.createElement("div");
		let text = document.createTextNode(v.user_name);

		div.className = "search_item";
		button.className = "button call_make";
		button.setAttribute("onclick", `call_make('${v.user_name}')`);

		div.appendChild(text);
		div.appendChild(button);
		document.getElementById("search_results").appendChild(div);
	});
}
