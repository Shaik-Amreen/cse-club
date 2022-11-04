const Users = require("../models/users")
const studentData = require("../models/studentData")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWTSECRET = "csewebclub"
const studentDataController = require('./studentData')



const encodeBuffer = (buffer) => buffer.toString("base64")
const encodeString = (string) => encodeBuffer(Buffer.from(string))
const encodeData = (data) => encodeString(JSON.stringify(data))
const encrypt = (data) => {
    if (Buffer.isBuffer(data)) return encodeBuffer(data)
    if (typeof data === "string") return encodeString(data)
    return encodeData(data)
}

exports.register = (async (req, res, next) => {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    const tokenHashed = encrypt(jwt.sign({ subject: req.body.mail }, JWTSECRET))
    let data = await Users.findOne({ mail: req.body.mail })
    if (data) {
        if (data.password) {
            res.send({ message: 'registered' })
        }
        else {
            studentDataController.updateStudent(req)
        }
    }
    else {
        res.send({ message: 'notenrolled' })
    }
})

exports.findValidMail = async (req, res) => {
    const user = await Users.findOne({ 'mail': req.body.mail }).lean();
    if (user) {
        if (user.password) {
            res.send({ message: 'success' })
        }
        else {
            res.send({ message: "notEnrolled" })
        }
    }
    else {
        res.send({ error: "notRegistered" })
    }
}

exports.findoneUsers = async (req, res) => {
    const { mail, password } = req.body
    const user = await Users.findOne({ 'mail': mail }).lean();
    const tokenHashed = encrypt(jwt.sign({ subject: mail }, JWTSECRET))
    if (user) {
        if (user.password) {
            (bcryptjs.compareSync(password, user.password)) ?
                (res.send({ 'token': tokenHashed, 'mail': mail, 'status': 'ok', role: user.role }))
                :
                res.send({ message: "invalidPassword" })
        }
        else { res.send({ message: "notRegistered" }) }
    }
    else {
        return res.send({ message: 'notEnrolled' })
    }
}



exports.findUsers = (req, res) => {
    Users.find((err, docs) => {
        !err
            ? res.send(docs)
            : res.send({ message: "error" })
    })
}



exports.changepassword = (req, res) => {
    passwordhashed = bcryptjs.hashSync(req.body.password, 10)
    Users.updateOne(
        { mail: req.body.mail },
        { $set: { password: passwordhashed } },
        function (err, docs) {
            if (!err && docs.nModified != 0) {
                res.send({ message: "success" })
            }
            else {
                res.send({ message: "error" })
            }
        }
    )
}

exports.forgotpassword = (req, res) => {
    Users.findOne(
        { mail: req.body.mail },
        (err, docs) => {
            if (!err && docs != null) {
                var digits = "0123456789"
                var OTP = ""
                for (let i = 0; i < 6; i++) {
                    OTP += digits[Math.floor(Math.random() * 10)]
                }
                let mailDetails = {
                    from: "placementscycle@mail.com",
                    to: docs.mail,
                    subject: "Verification code - ARIKYA ",
                    html: `<p>Hey forgot password !
          <strong> ${OTP}</strong> is the your verification code . </p>
          <br/>
          <br/>
          Best Regards ,
          <br/><strong>ARIKYA</strong>`,
                }
                let mailcontent = `Hey ! ${OTP} is the OTP .`
                collectmail = { content: mailcontent, subject: mailDetails.subject }
                if (mail(mailDetails, collectmail)) { res.send({ 'error': 'Connection is poor' }) } else { res.send({ 'otp': OTP }); }
            } else {
                res.send({ error: "error" })
            }
        }
    )
}

exports.feedmail = (req, res) => {
    let mailDetails = {
        from: "Arikya",
        to: ['shaikamreenkousar@gmail.com', '19691a0559@mits.ac.in'],
        subject: `Feedback - WEBCLUB`,
        html: `${req.body.feed} by ${req.body.name} ${req.body.mail}`,
    }
    res.send(mail(mailDetails))
}
