const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

app.use("/", routes());

app.set("view engine", "express-handlebars");

app.set("views", path.join(__dirname, "./views"));

app.listen(5000);