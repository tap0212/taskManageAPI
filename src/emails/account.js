const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.envnSENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tapan.awasthi02@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app. ${name}. Let me know how you get along with the app.`

    })
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tapan.awasthi02@gmail.com',
        subject: 'This is a GoodBye!',
        text: `GoodBye!. ${name}. Let US Know Is There any Thing We Did You Liked .`

    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}