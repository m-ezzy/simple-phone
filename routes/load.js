import { Router } from "express";
import db from '../models/database.js';

let router = Router();

router.post("/", async (req, res) => {
	let query = `SELECT user_name FROM users WHERE user_name != ${req.user_name}`;
	let rows = await db.query(query).catch(err => { throw err });

	res.contentType('text/json');
	res.send(JSON.parse(JSON.stringify(rows)));
});
export default router;
