module.exports = {
    createAccount2: function (username, password, name, email) {
        createAccount(username, password, name, email);
    }
  };
const Driver = require('./driver');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');
var emailArray = [];
var usernameArray = [];
var driverArray = [];
var driverCount = 0;
async function loadDatabase() {
    if(fs.existsSync('accounts.csv')) {
    return new Promise(function(resolve,reject){
    // CITATION 1 From https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
    // Variable names are changed.
    // Also uses a promise as well, in order to run our functions in a certain order despite async nature.
    // This is used to find emails and usernames, and add them to their respective arrays
    var inputLines = readline.createInterface({
        input: fs.createReadStream('accounts.csv')
      });
      
      inputLines.on('line', function (line) {
        emailArray.push(line.split(',')[3]);
        usernameArray.push(line.split(',')[0]);
        driverArray[driverCount] = new Driver(line.split(',')[0],line.split(',')[3],line.split(',')[1],line.split(',')[2]);

        // console.log(driverArray[driverCount].getEmail());
        // console.log(driverArray[driverCount].getBalance());

        driverCount = driverCount + 1;
      });
      
      inputLines.on('close', function () {
          resolve("Promise Complete, Array IS READY");
      });
    }
    // END CITATION 1
)}}
;

async function asyncStartProgram() {
    const testResponse = await loadDatabase();
    createAccount("Benjamaxo","passwordsarecool","Ben Stannard","bpstannard@gmail.com");
    createAccount("Benjamaxo","passwordsarecool","Ben Stannard","bpstannard@gmail.com");
    createAccount("SamRaider","cybersecisbad","Sam Pyle","samraider69@gmail.com");
}

function createAccount(username, password, name, email) {
    console.log(username, password, name, email);
    let isDuplicate = 0;
    for (let i = 0; i < emailArray.length; i++) {
        if (emailArray[i] == email || usernameArray[i] == username) {
            console.log('Duplicate Email or Username Detected, Account Creation Failed\n');
            isDuplicate = 1;
            break;
        }
    }
    var dbEntry = username+","+password+","+name+","+email+"\n";

    if (isDuplicate == 0) {
        fs.appendFileSync('accounts.csv', dbEntry, (err) => {
            if (err){
                throw err;
            } 
        });

        console.log('Account Successfully Created');
        driverArray[driverCount] = new Driver(username,email,password,name);

        // console.log(driverArray[driverCount].getEmail());
        // console.log(driverArray[driverCount].getBalance());

        driverCount = driverCount + 1;
        usernameArray.push(username);
        emailArray.push(email);
    }

};

asyncStartProgram();