//give us ENTIRETY OF express NOT ./
//we don't give it ./ it assumes it's in the node Modules
const express = require('express');

//call express function, create a server, save in app
const app = express();
const PORT = 5000;

//Serve static files! HTML,CSS, JS, ETC
//hey app, I want you to use something. that's in express.static. hey express, send them to the public folder.
app.use(express.static('server/public'));

//SERVE DATA
const people = ["Gabin", "Joshua", "Joe"];

//GET ROUTE/REQUEST
//hey app when people coming knocking at this address, do this function  
app.get('/data', (req, res) => {
    console.log('you got to /data!');
    //ALL SERVER REQUESTS NEED A RESPONSE
    res.send(people);
});

//START UP SERVER

//listen takes the port and a callback
app.listen(PORT, () => {
    //this will run when server starts
    console.log(`server running on PORT`, PORT);
});


