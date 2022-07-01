const express = require("express");
const ind = express();
ind.get("/", function (req, res) {
    res.send("Hii from the express");
})

ind.get("/api/main", function (req, res) {
    res.send("Namaste from api");
})

ind.listen(5001, function () {
    console.log("listening the port");
})
