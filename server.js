const Account = require('./public/account.js');
//https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
const express = require('express');
const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    console.log('index.html')
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './public/register.html'));
});

app.get('/carparks', (req, res) => {
    res.sendFile(path.join(__dirname, './public/carparks.html'));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, './public/reserve.html'));
});

app.listen(8080, () => {
    console.log('listening on port 8080');    
});

//middleware and static files

express.static(path.join('public'));

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