const Account = require('./public/account.js');
//https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
const express = require('express');
const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');

const app = express();

app.use(express.json());
app.use(express.static("public"));
var mysql = require('mysql2');
var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "softeng",
database: "parking_db"
});
connection.connect(function(err) {
if (err) throw err;
console.log("Connected Successfully! - server.js");
});
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

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, './public/admin.html'));
});

app.get('/notify', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notify.html'));
});

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, './public/chat.html'));
});

app.post('/chat', (req, res) => {
    console.log(req, res);
});

app.listen(8080, () => {
    console.log('Server listening on port http://localhost:8080/ \n');    
});

//middleware and static files

express.static(path.join('public'));

app.get('/users', (req, res) => {
    connection.query('SELECT UserID, UserName, Password, Name, Email FROM users', (error, results) => {
      if (error) {
        console.error('Error fetching data:', error.stack);
        res.status(500).send('Error fetching data');
        return;
      }
      res.json(results);
    });
  });
  
  app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log('Received DELETE request for user ID:', userId);
    connection.query('DELETE FROM users WHERE UserID = ?', [userId], (error, results) => {
      if (error) {
        console.error('Error deleting user:', error.stack);
        res.status(500).send('Error deleting user');
        return;
      }
      res.sendStatus(204); // No Content
    });
  });
app.get('/saveCSV', (req, res) => {

    const username = req.query.username;
    const password = req.query.password;
    const name = req.query.name;
    const email = req.query.email;

    res.send(password);

    Account.createAccount2(username,password,name,email);
});
app.post('/allocate-space', (req, res) => {
  const parkName = req.body.parkName;

  const findParkQuery = 'SELECT ParkID FROM car_parks WHERE ParkName = ?';
  connection.query(findParkQuery, [parkName], (err, parkResult) => {
      if (err) return res.status(500).json({ success: false, message: 'Database error' });

      if (parkResult.length === 0) return res.status(404).json({ success: false, message: 'Park not found' });

      const parkID = parkResult[0].ParkID;
      const findSpaceQuery = 'SELECT SpaceID FROM space WHERE ParkID = ? AND Available = 0 LIMIT 1';
      connection.query(findSpaceQuery, [parkID], (err, spaceResult) => {
          if (err) return res.status(500).json({ success: false, message: 'Database error' });

          if (spaceResult.length === 0) return res.status(404).json({ success: false, message: 'No available spaces' });

          const spaceID = spaceResult[0].SpaceID;
          const updateSpaceQuery = 'UPDATE space SET Available = 1 WHERE SpaceID = ?';
          connection.query(updateSpaceQuery, [spaceID], (err, updateResult) => {
              if (err) return res.status(500).json({ success: false, message: 'Database error' });

              res.json({ success: true, spaceID: spaceID });
          });
      });
  });
});
