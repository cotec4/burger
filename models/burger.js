const orm = require("../config/orm.js");

const burger = {
    selectAll: (callback) => {
        orm.selectAll("burgers", (response) => {
            callback(response);
        });
    },
    insertOne: (cols, vals, callback) => {
        orm.insertOne(cols, vals, (response) => {
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