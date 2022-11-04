const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    mail: { type: "string", required: true, index: { unique: true, dropDups: true } },
    password: { type: "string", required: true },
    token: { type: "string", required: true },
    role: { type: "number", required: true },
})



const users = mongoose.model("users", Schema)

module.exports = users

