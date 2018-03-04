const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/api/whoami', (req, res) => {
    
});

app.listen(port, console.log(`Listening on port ${port}`));
