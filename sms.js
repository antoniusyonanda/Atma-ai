require('dotenv').load();

const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_TOKEN
);

client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: +6283869200003,
    body: "You just sent an SMS from Node.js using Twilio!"
}).then((messsage) => console.log(message.sid));