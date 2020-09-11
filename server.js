const express = require("express");
const exphbs = require("express-handlebars")
const orm = require("./config/orm.js");
const app = express();
let PORT = process.env.PORT || 8800;

app.use(express.static("assets"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});