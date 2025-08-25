const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const HOST = 'localhost';

app.get('/', (_req, res) => {
    res.send('OK')
    console.log("request kommt an")
});

app.listen(PORT, HOST, () => {
    console.log(`Listening on https://${HOST}:${PORT}`);
});