# Express intro

## NPM 
To initialize with npm `npm init`
    - makes a package.json
    -- `npm init --yes` goes through everything. 

To get a new library `npm install <package>`
    - this case is `npm install express`
    - This gives is a folder called node_modules

## server folder
Go get all of express
- const express = require('express');
Call express function, create a server, save in app
- const app = express();
- const PORT = 5000;
START THE SERVER!
- app.listen(PORT, () => {
    console.log(`server running on PORT`, PORT)
});

In terminal, run server.js
- node server/server.js

START SCRIPT IN PACKAGE.JSON
` "start" : "node server/server.js",`

to actually start: 
`npm start`

tell the server to grab the public folder 
app.use(express.static('server/public'));

stop this ride:
ctrl + c

stop all the rides:
`killall node`
