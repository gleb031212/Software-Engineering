module.exports = exports = function(username, password, callback) {
    var testquery1 = "SELECT * FROM users WHERE UserName LIKE '"+username+"' AND Password LIKE '"+password+"'";
    connection.query(testquery1, function (err, returnlog){            
        if (err){
            console.log("Invalid username or password - SQL");
        } 

        else if (returnlog.length > 0) {
            console.log(returnlog);
            console.log('Login successful! - SQL');
            // console.log(returnlog[0].UserID);
            let callbackArray = [];
            callbackArray[0] = true;
            callbackArray[1] = returnlog[0].UserID;
            callbackArray[2] = returnlog[0].IsAdmin;
            callback(callbackArray);
        }
        else {
            console.log("Invalid username or password - SQL");
            let callbackArray = [];
            callbackArray[0] = false;
            callback(callbackArray);
        }
    })
}
const fs = require('fs');

var mysql = require('mysql2');
var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "softeng",
database: "parking_db"
});
connection.connect(function(err) {
if (err) throw err;
console.log("Connected Successfully! - login.js");
});