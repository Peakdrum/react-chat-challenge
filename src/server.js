const express = require("express");
const twilio = require('twilio');
const os = require("os");


const accountSid = 'AC8b2595b05992b537cebc1d8456b1f88c';
const authToken = '521002ec94abf21fec43cb59b9bf4ff9';
const client = twilio(accountSid, authToken);

const app = express();
app.use(express.static("dist"));

app.post("/ping", (req, res) =>
  res.send('pong')
);

app.post("/sendMessage/:sender/:receiver/:message", (req,res)=>{
  client.messages.create({
    to:req.params.receiver,
    from:req.params.sender,
    body:req.params.message
}, function(error, message) {
    // The HTTP request to Twilio will run asynchronously. This callback
    // function will be called when a response is received from Twilio
    // The "error" variable will contain error information, if any.
    // If the request was successful, this value will be "falsy"
    if (!error) {
        // The second argument to the callback will contain the information
        // sent back by Twilio for the request. In this case, it is the
        // information about the text messsage you just sent:
        res.send('Success! The SID for this SMS message is:');
        console.log(message.sid);

        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        res.send('Oops! There was an error.');
        console.log(error)
    }
})
})

app.listen(8000, () => console.log("Listening on port 8000!"));