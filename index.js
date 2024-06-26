"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require("reflect-metadata");
var router_1 = require("./router");
var app = express();
app.use(express.json());
app.use("/", router_1.router);
// app.get("/", (req, res) => {
//     res.status(200).send("Hello kitty!")
// })
app.listen(3000, function () {
    console.log("server started on port 3000...");
});
