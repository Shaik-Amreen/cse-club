const task = require("../models/task")
const submission = require("../models/submission")
postTask = async (req, res) => {
    req.body = JSON.parse(decodeURIComponent(atob(req.body.data)))
    const { condition, responseDetails } = req.body    
    task.create(condition, (err, docs) => {
        if (!err) {
            return res.status(200).send({ data: btoa((encodeURIComponent(JSON.stringify({ message: "success" })))) });
        }
        else {
            return res.status(200).send({ data: btoa((encodeURIComponent(JSON.stringify({ message: "error" })))) });
        }
    })
}



findTask = (req, res) => {

}

findAllTask = async (req, res) => {
    req.body = JSON.parse(decodeURIComponent(atob(req.body.data)))
    const { condition, responseDetails } = req.body
    let response = await task.find(condition).select(responseDetails).lean()
    if (response.length > 0) {
        // let response = await submission.distinct()
        submission.find()
    }
    return res.status(200).send({ data: btoa((encodeURIComponent(JSON.stringify(response)))) });
}

updateTask = (req, res) => {
    task.updateOne({ taskId: req.body.taskId }, { $set: req.body }, (err1, docs1) => {
        res.send({ message: 'success', user: req.body.mail, token: tokenHashed })
    })
}
module.exports = { postTask, findTask, findAllTask, updateTask } 
