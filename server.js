const Account = require('./account.js');
//https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
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

app.get('/saveCSV', (req, res) => {
    // const formData = Object.values(req.body);

    const username = req.query.username;
    const password = req.query.password;
    const name = req.query.name;
    const email = req.query.email;


    // res.send(email);
    res.send(password);



    // console.log(req.query.email);

    // const csvRow = `${formData.join(',')}\n`;

    Account.createAccount2(username,password,name,email);

    // fs.appendFile('accounts.csv', email, (err) => {
    //     // console.log(email);
    //     if (err){
    //         console.error("Error writing to file ",err);
    //         // res.status(500).send("Error saving data");
    //     }
    //     else {
    //         // res.status(200).send('Data saved successfully');
    //     }
    // })
});