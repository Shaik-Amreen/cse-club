const studentData = require("../models/studentData")

createStudent = (req, res) => {

}

createStudents = (req, res) => {

}

findStudent = (req, res) => {

}

findStudents = (req, res) => {

}

updateStudent = (req, res) => {
    studentData.updateOne({ mail: req.body.mail }, { $set: req.body }, (err1, docs1) => {
        res.send({ message: 'success', user: req.body.mail, token: tokenHashed })
    })
}
module.exports = { createStudent, createStudents, findStudent, findStudents, updateStudent }