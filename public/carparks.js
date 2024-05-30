function allocateSpace() {
    const parkName = document.getElementById('destinations').value;

    fetch('/allocate-space', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ parkName: parkName })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('result').innerHTML = `Space allocated: ${data.spaceID}`;
        } else {
            document.getElementById('result').innerHTML = `Error: ${data.message}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = 'An error occurred while allocating space.';
    });
}