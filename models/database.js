import util from 'util';
import mysql from 'mysql';

/*
let server_name = "localhost";
let db_user_name = "root";
let db_pass_word = "";
let db_name = "simple-phone";
*/

let server_name = "sql.freedb.tech";
let db_user_name = "freedb_jkhvcvnb";
let db_pass_word = "Ttkr?a**ugrP445";
let db_name = "freedb_skyland";


var db = mysql.createConnection({
	host: server_name,
	user: db_user_name,
	password: db_pass_word,
	database: db_name,
});

db.query = util.promisify(db.query).bind(db);

db.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	};
	console.log("databse connected!");
});
export default db;
