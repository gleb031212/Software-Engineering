document.getElementById('formData').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

});

