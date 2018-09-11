const nodemailer = require('nodemailer');
const secrets = require('./secrets');
const password = secrets.password;

module.exports.sendEmail = (req, res) => {
    const name = req.body.name;
    const phone = req.body.number;
    const email = req.body.email;
    const message = req.body.message;
    
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'hobsonelectricinc@gmail.com',
            pass: password
        }
    });

    const html = `
        <h3>You've Received an Inquiry From ${name}</h3>
        <p>Name: ${name}</p>
        <p>Phone Number: ${phone}</p>
        <p>Email Address: ${email}</p>
        <p>Message: ${message}</p>
    `;

    const mailOptions = {
        from: 'hobsonelectricinc@gmail.com', // sender address
        to: 'hobson75@gmail.com', // list of receivers
        subject: `New Website Inquiry from ${name}`,
        html: html //can be text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
    res.send('Success');
}