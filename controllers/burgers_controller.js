const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// Showing all burgers
router.get("/", (req, response) => {
    burger.selectAll((res) => {
        console.log(res);
        response.render("index", {
            burgers: res
        });
    });
});

// Adding a new burger
router.post("/burgers/create", (req, response) => {
    burger.insertOne(req.body.burger_name,(res) => {
        response.render("index", {
            burgers: res
        });
        response.redirect("/");
    });
});

// Moving from uneaten to devoured
// router.

module.exports = router