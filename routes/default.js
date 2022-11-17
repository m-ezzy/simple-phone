import path from 'path';
import url from 'url';

import { Router } from "express";
let router = Router();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
	res.contentType('text/html');
    console.log(req.cookies.user_name);

	if (req.cookies.user_name) {
		//res.redirect(`localhost:8000/index.html`);
		//res.redirect(`../../public/index.html`);
		//res.contentType('text/html');
		res.sendFile(path.resolve(__dirname, "../views/index.html"));
		//res.sendFile(`C:/xampp/htdocs/all/nodejs/expressjs/simple-phone/views/index.html`);
	} else {
		//res.redirect(`../public/authentication.html`);
		//res.redirect(`localhost:8000/auth.html`);
		//res.redirect(`C:/xampp/htdocs/all/nodejs/expressjs/skyland-nodejs/public/authentication.html`);
		res.sendFile(path.resolve(__dirname, "../views/auth.html"));
		//res.sendFile(`C:/xampp/htdocs/all/nodejs/expressjs/simple-phone/views/auth.html`);
	}
});

import log_in from "./log_in.js";
import load from "./load.js";
import search from "./search.js";

router.use('/auth/log_in', log_in);
router.use('/load', load);
router.use('/search', search);
//router.use('/call', require('./call'));

export default router;
