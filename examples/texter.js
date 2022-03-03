// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.FROM_PHONE;
const toPhone = process.env.TO_PHONE;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hello from a bot!",
    from: fromPhone,
    to: toPhone,
  })
  .then((message) => console.log("Message sent!", message.sid))
  .catch((error) => {
    console.error(error);
  });
