const mysql = require("mysql");
let PORT = process.env.PORT || 8800;

const connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;