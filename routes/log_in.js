import express from "express";
import db from '../models/database.js';

let router = express.Router();

router.post("/", async (req, res) => {
	const user_name = req.body.user_name;
	const pass_word = req.body.pass_word;

	let query = `SELECT user_name,pass_word FROM users WHERE user_name='${user_name}' AND pass_word='${pass_word}'`;
	let rows = await db.query(query).catch(err => { console.log(err); });

	if (rows.length) {
		res.cookie("user_name", user_name, {maxAge: '3600000'}); //1 hour
		//res.contentType('text/html');
		res.redirect("/");
	} else {
		let query2 = `SELECT * FROM users WHERE user_name='${user_name}'`;
		let rows2 = await db.query(query2).catch(err => { console.log(err); });

		res.contentType('text/json');
		if (rows2.length) {
			res.send(`pass word ${pass_word} is incorrect !`);
		} else {
			res.send(`user name ${user_name} is incorrect !`);
		}
	}
});
export default router;
