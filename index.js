const express = require("express");
const path = require("path");
const {engine} = require("express-handlebars");
const routes = require("./routes");

const app = express();

app.set("view engine", "handlebars");

app.engine("handlebars",
    engine({
        defaultLayout: "layout"
    })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes());

app.listen(5000);