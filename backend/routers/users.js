const express = require("express")
var router = express.Router()
const users = require("../controllers/users")


router.post("/generateOtp", users.generateOtp)
router.post("/verifyOtp", users.verifyOtp)


module.exports = router


