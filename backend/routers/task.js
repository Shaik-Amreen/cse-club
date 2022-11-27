const express = require("express")
var router = express.Router()
const task = require("../controllers/task")

router.post("/findAllTask", task.findAllTask)
router.post("/postTask", task.postTask)

module.exports = router


