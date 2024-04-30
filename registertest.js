document.getElementById('formData').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    try {
        const response = await fetch('/saveCSV', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        console.log(formData);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
});

