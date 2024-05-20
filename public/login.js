module.exports = {
    login2: function (username, password) {
        login(username, password);
    }
  };
const fs = require('fs');

function login(username, password) {
    console.log('Invalid username or password.')
    fs.readFile('accounts.csv', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        const rows = data.split('\n');
        
        for (let i = 0; i < rows.length; i++) {
            const columns = rows[i].split(',');
            const storedUsername = columns[0];
            const storedPassword = columns[1];
            
            if (storedUsername === username && storedPassword === password) {
                console.log('Login successful!');
                return;
            }
        }
        
       console.log('Invalid username or password.');
   });
}