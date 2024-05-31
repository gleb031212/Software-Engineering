module.exports = {
    createAccount2: function (username, password, name, email) {
        createAccount(username, password, name, email);
    }
  };
const Driver = require('./driver');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');


var mysql = require('mysql2');
var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "softeng",
database: "parking_db"
});
connection.connect(function(err) {
if (err) throw err;
console.log("Connected Successfully! - account.js");
});

function createAccount(username, password, name, email) {
    var testquery1 = "INSERT INTO users (Name,UserName,Password,Email,IsAdmin) VALUES ('"+ name +"', '"+ username +"', '"+ password +"', '"+ email +"', 0)";
    connection.query(testquery1, function (err, usersResponse){            
        console.log(username, password, name, email);
        if (err){
            if(err.errno==1062) { //1062 is the error code for duplicate UNIQUE entry.
                console.log("Duplicate!");
            }
            else{
                console.log(err);
            }
        } 
    })
};






