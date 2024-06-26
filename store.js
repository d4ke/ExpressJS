"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppData = void 0;
var typeorm_1 = require("typeorm");
var studentModel_1 = require("./studentModel");
exports.AppData = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "croprotation",
    password: "VeryVeryStrongPass",
    entities: [studentModel_1.Student]
});
exports.AppData.initialize()
    .then(function () {
    console.log("Connected to database.");
})
    .catch(function (err) {
    console.log("error: ", err);
});
