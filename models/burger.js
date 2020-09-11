const orm = require("../config/orm.js");

const burger = {
    selectAll: (callback) => {
        orm.selectAll("burgers", (response) => {
            callback(response);
        });
    },
    insertOne: (burger_name, callback) => {
        orm.insertOne(burger_name, (response) => {
            callback(response);
        });
    },
    updateOne: (cols, condition, callback) => {
        orm.updateOne(cols, condition, (response) => {
            callback(response);
        });
    }
};

module.exports = burger;