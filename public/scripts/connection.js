function getCookie(cookie_key) {
	const name = cookie_key + "=";
	const cDecoded = decodeURIComponent(document.cookie); //to be careful
	const cArr = cDecoded.split('; ');
	let res = '';
	cArr.forEach(val => {
		if (val.indexOf(name) === 0) {
			res = val.substring(name.length);
		}
	});
	return res;
}

const peer = new Peer(getCookie("user_name"), {
	host: location.hostname, //"localhost" //"peer-server-1.herokuapp.com" //window.location.hostname
	debug: 1,
	path: '/call',
	port: 443 //8000 //443
});

let stream_local;
let conn = {};
let call_incoming = {};
let call_outgoing = {};

navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream) => {
	stream_local = stream;
	document.getElementsByClassName("video local")[0].srcObject = stream;
});

peer.on('open', function () {
	console.log("peer is open! peer id = " + peer.id);
});
peer.on('connection', function(connection){
    conn[connection.peer] = connection;
});
peer.on('call', function(call) {
	/*console.log(conn, call);*/
	call_incoming[call.metadata.user_name] = call;
	create_incoming_call_item(call.metadata.user_name);
	document.getElementsByClassName("incoming_call_container")[0].style.visibility = "visible";
});
