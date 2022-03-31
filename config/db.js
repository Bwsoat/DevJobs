const mongoose = require("mongoose");
require("dotenv").config({path: "dev.env"})

mongoose.connect(process.env.DATABASE, {useNewUrlParser:true});

mongoose.connection.on("error", (error) => {
    console.log(error);
})