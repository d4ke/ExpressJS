import { Student } from "./studentModel";
import { AppData } from "./store";
// import express = require("express");
import { Request, Response } from "express";

export async function GetStudents(req: Request, res: Response) {
    try {
        const students = await AppData.manager.find(Student);
        res.json(students)
    } catch (err) {
        res.status(500).send(err.message)
    } 
}