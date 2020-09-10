const connection = require("./connection.js");

const orm = {
    selectAll: (tableName) => {
        let queryString = "SELECT * FROM ?;";
        connection.query(queryString, tableName, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: (burger_name, devoured) => {
        let queryString = "INSERT INTO burgers VALUES (??, ??)";
        connection.query(queryString, [burger_name, devoured], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: (id) => {
        let queryString = "UPDATE burgers SET ?? WHERE ??";
        connection.query(queryString, [{devoured: true}, {id: id}], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;