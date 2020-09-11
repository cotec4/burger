const connection = require("./connection.js");

const orm = {
    selectAll: (tableName, callback) => {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, tableName, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: (burger_name, callback) => {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?);";
        console.log(burger_name);
        connection.query(queryString, [burger_name, false], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: (id, callback) => {
        let queryString = "UPDATE burgers SET devoured = ? WHERE id = ?;";
        connection.query(queryString, [true, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;