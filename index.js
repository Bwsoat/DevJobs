const mongoose = require("mongoose");
require("./config/db");

const express = require("express");
const path = require("path");
const {engine} = require("express-handlebars");
const routes = require("./routes");
require("dotenv").config({ path : "dev.env"});
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();

app.set("view engine", "handlebars");

app.engine("handlebars",
    engine({
        defaultLayout: "layout"
    })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());

app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE
    })
}));

app.use("/", routes());

app.listen(process.env.PUERTO);