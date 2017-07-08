const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port',(process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', function(req, res){

    res.send('Hello Youtube!')
})

app.get("/webhook", function (req, res) {
  if (req.query["hub.verify_token"] === "sagnik") {
    console.log("Verified webhook");
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    console.error("Verification failed. The tokens do not match.");
    res.sendStatus(403);
  }
});

app.listen(app.get('port'),function(){
    console.log('running on port', app.get('port'))
})