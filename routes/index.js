const express = require("express");
const router = express.Router();

module.exports = function() {
    router.get("/", (req, res) => {
        res.send("Todo listo y operativo");
    } );
    return router
}