const peer = new Peer(getCookie("user_name"), {
	host: location.hostname, //"localhost" //"peer-server-1.herokuapp.com" //window.location.hostname
	debug: 2, //0 no logs //1 only errors //2 errors and warnings //3 all logs
	path: '/peer',
	port: (location.protocol == "http:") ? 8000 : 443 //8000 //443
});

console.log(location.protocol);

let stream_local = new MediaStream();
let conn = {};
let call_incoming = {};
let call_outgoing = {};
let currently_speaking = "";

navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream) => {
	stream_local = stream;
	document.getElementsByClassName("video local")[0].srcObject = stream;
});

peer.on('open', function () {
	console.log("peer is open! peer id = " + peer.id);
});
peer.on('connection', (connection) => {
	console.log(connection);
	conn[connection.peer] = connection;

	connection.on("data", (data) => {
		handle_conn_data(data);
	});
});
peer.on('call', function(call) {
	handle_incoming_call(call);
});
