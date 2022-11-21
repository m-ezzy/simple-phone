import path from 'path';
import url from 'url';
import http from 'http';
//import https from 'https';
import express from "express";
import peer from 'peer';
import cookieParser from 'cookie-parser';

import routes from "./routes/default.js";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || "8000";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const peerServer = peer.ExpressPeerServer(server, {
	/*proxied: true,*/
	debug: 3,
	path: '/peer',
	port: 443, //8000 //443
	ssl: {}
});

app.use(peerServer);

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//not using body-parser

app.use("/", routes);

server.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});
