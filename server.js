// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { get } = require('express/lib/response');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
app.listen(port , ()=>{
    console.log(`The server is running in port ${port}`);
})

// Get rout to send to send all data saved in the server to the client side 
app.get('/all' , (req , res)=>{
    res.send(projectData);
})
// Post rout to resive data from the client side 
app.post('/send' , (req,res)=>{
    holder={
        temp:req.body.temp,
        date:req.body.date,
        feel:req.body.feel
    }
    projectData.temp=holder.temp;
    projectData.date=holder.date;
    projectData.feel=holder.feel;
})