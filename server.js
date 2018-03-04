const express = require('express');
const path = require('path');
const headerParser = require('./api/header-praser.js');


const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/whoami', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(headerParser(req)));
});

app.listen(port, console.log(`Listening on port ${port}`));
