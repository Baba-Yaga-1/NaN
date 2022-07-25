const express = require('express');

const webpush = require('web-push');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.use(bodyParser.json());

const publicVapidKey = 'BPLt2NBuxYbd3p8awYstRQlFs6heydB3-BAm8G_VNfnXA-yhm8arGit5piov1RMR9jlRohfnm_z-5fRlUbUkt8k';
const privateVapidKey = 'KDXtSdCS1K00eQaQEpOPypCTlTxHkOxj3JCRiVZifhQ';

//setting vapid keys details
webpush.setVapidDetails(
    'mailto:test@test.com', 
    publicVapidKey,
    privateVapidKey);

//subscribe route
app.post('/subscribe', (req, res)=>{
    //get push subscription object from the request
    const subscription = req.body;

    //send status 201 for the request
    res.status(201).json({})

    //create paylod: specified the detals of the push notification
    const payload = JSON.stringify({title: 'Push Notification using Node.js' });

    //pass the object into sendNotification fucntion and catch any error
    webpush.sendNotification(subscription, payload).catch(err=> console.error(err));
})

//set the static path 
app.use(express.static(path.join(__dirname, "client")));

app.listen(5000, ()=>{
    console.log("Port is running on 5000");
});