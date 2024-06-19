const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

const app = express()
const router = express.Router()

const students = [{"name": "d4ke", "start": "01.06.2024", "last": "", "end": ""}]

app.use(express.json())
app.use(bodyParser.json())

app.get("/students", getStudents)
app.post("/students", newStudent)
app.delete("/student/:name", deleteStudent)
app.put("/student/:name", updateStudent)

app.listen(3000, () => {
    console.log("App started on port 3000...")
})

function getStudents (req, res) {
    res.send(students)
}

function newStudent (req, res) {
    const student = req.body
    students.push(student)
    res.status(201).end("Student added")
} 

function deleteStudent (req, res) {
    for (let i = 0; i < students.length; i++) {
        // console.log(students[i].name, req.params.name)
        if (students[i].name == req.params.name) {
            students.splice(i,1)
            res.status(200).send("Student deleted")
            return
        }
    }
    res.status(403).send("Student not found")
}

function updateStudent (req, res) {
    for (let value of students) {
        if (value.name == req.body.name) {
            value.start = value.start || req.body.start
            value.last = value.last || req.body.last
            value.end = value.end || req.body.end
            res.status(200).send("Student updated")
            return
        }
    }

    res.status(403).send("Student not found")
}