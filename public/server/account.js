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

function test(){
    console.log();
}

// var testquery2 = "DELETE FROM users WHERE Name='Test'";
// connection.query(testquery2, function (err, usersResponse){
//     if (err) throw err;
//     if (usersResponse.length > 0) {
//         console.log(usersResponse);
//     }
// })


//driverArray[driverCount] = new Driver(line.split(',')[0],line.split(',')[3],line.split(',')[1],line.split(',')[2]);

//createAccount("Benjamaxo","passwordsarecool","Ben Stannard","bpstannard@gmail.com");
//createAccount("Benjamaxo","passwordsarecool","Ben Stannard","bpstannard@gmail.com");
//createAccount("SamRaider","cybersecisbad","Sam Pyle","samraider69@gmail.com");
var testquery = "SELECT * FROM users";
connection.query(testquery, function (err, usersResponse){
    if (err) throw err;
    if (usersResponse.length > 0) {
        //console.log(usersResponse);
    }
})

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

        else if (usersResponse.length > 0) {
            //console.log(usersResponse);
        }
    })
};





