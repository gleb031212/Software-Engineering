const express = require('express');
const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, () => {
    console.log('listening on port 8080');    
});

app.post('/saveCSV', (req, res) => {
    const formData = Object.values(req.body);

    const csvRow = `${formData.join(',')}\n`;

    fs.appendFile('accounts.csv', csvRow, (err) => {
        if (err){
            console.error("Error writing to file ",err);
            res.status(500).send("Error saving data");
        }
        else {
            res.status(200).send('Data saved successfully');
        }
    })
});