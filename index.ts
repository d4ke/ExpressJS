import express = require("express")
import "reflect-metadata";
import { router } from "./router"


const app = express()

app.use(express.json()) 
app.use("/", router)

// app.get("/", (req, res) => {
//     res.status(200).send("Hello kitty!")
// })


app.listen(3000, () => {
    console.log("server started on port 3000...");
})