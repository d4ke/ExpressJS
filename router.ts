import express = require("express")
// import { GetStudents } from "./controller";
import { AppData } from "./store";
import { Student } from "./studentModel";

export const router = express.Router();

router.get("/students", async (req: express.Request, res: express.Response) => {
    try {
        const students = await AppData.manager.find(Student);
        res.json(students)
    } catch (err) {
        res.status(500).send(err.message)
    } 
})