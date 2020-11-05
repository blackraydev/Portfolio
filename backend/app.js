const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "brwebagency@gmail.com",
        pass: "5159081186hfvbkm"
    }
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send_mail', (req, res) => {
    const mail = {
        from: `"${req.body.email}" <black2001ray@gmail.com>`,
        to: "brwebagency@gmail.com",
        subject: "Сообщение в портфолио",
        html:  `<div style="display: flex; justify-content: flex-start; align-items: center; margin-bottom: 5px">
                    <p style="color: rgb(100, 100, 125); margin: 0; font-size: 20px; font-weight: 600"> From: </p> <p style="margin: 0; margin-left: 5px; font-size: 20px"> ${req.body.email} </p> <br/>
                </div>
                <div style="display: flex; justify-content: flex-start; align-items: center">
                    <p style="color: rgb(100, 100, 125); margin: 0; font-size: 20px; font-weight: 600"> Name: </p> <p style="margin: 0; margin-left: 5px; font-size: 20px"> ${req.body.fio} </p> <br/>
                </div>
                <div style="margin-top: 15px">
                    <p style="color: rgb(100, 100, 125); margin: 0; font-size: 20px; font-weight: 600"> Message: </p> <p style="margin: 0; font-size: 20px"> ${req.body.message} </p> <br/>
                </div>`
    }

    transport.sendMail(mail, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log("Message sent successfully from ", info.messageId);
    })

    res.redirect("http://localhost:3000/");
});