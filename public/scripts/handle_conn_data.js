function handle_conn_data(data) {
	let d = JSON.parse(data);
	console.log(data, d);

	let un2 = JSON.parse(data).user_name;

	if(d.purpose == "mic") {
		Object.values(document.getElementsByClassName("video remote")).forEach(element => {
			element.muted = "true";
		});
		document.getElementById("video_" + un2).muted = "false";

		currently_speaking = un2;
	} else if (d.purpose == "canvas") {
	}
}
