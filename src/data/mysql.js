import mysql from 'mysql2';
import {
  database,
  host,
  port,
  username as user,
  password
} from '../config/dbConfig';
const sql = mysql.createConnection({
  host,
  port,
  user,
  password,
  database,
  connectTimeout: 5000
});

sql.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + sql.threadId);
});
export default sql