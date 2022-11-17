import express from "express";

import db from '../models/database.js';

let router = express.Router();

router.post("/", async (req, res) => {
	let user_name = req.cookies.user_name;
	let q = req.body.q;

	let query = `SELECT user_name FROM users WHERE user_name LIKE '${q}%' AND user_name != '${user_name}'`;
	let rows = await db.query(query).catch(err => { throw err });
    console.log(rows);

	res.contentType('text/json');
	res.send(JSON.parse(JSON.stringify(rows)));
});

export default router;
