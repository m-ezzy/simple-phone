async function search() {
	document.getElementsByClassName("list search")[0].innerHTML = "";

	let q = document.getElementById("text_search").value;
	if (q == "") { return; }

	let response = await fetch("/search", {method: "POST", mode: 'no-cors', headers: {'Content-Type':'application/x-www-form-urlencoded'}, body: 'q=' + q});
	let data = await response.json();
	console.log(data);

	if (Object.keys(data).length == 0) { return; }

	Object.values(data).forEach(v => {
		add_item_search(v);
	});
}
