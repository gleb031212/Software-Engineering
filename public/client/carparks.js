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
            if (document.getElementById('destinations').value == "University Car Park"){
                document.getElementById('ma').style.display = "block"
                document.getElementById('co').style.display = "none"
                document.getElementById('sp').style.display = "none"
                document.getElementById('su').style.display = "none"
                document.getElementById('wa').style.display = "none"
                document.getElementById('ch').style.display = "none"
            } else if(document.getElementById('destinations').value == "Colney") {
                document.getElementById('ma').style.display = "none"
                document.getElementById('co').style.display = "block"
                document.getElementById('sp').style.display = "none"
                document.getElementById('su').style.display = "none"
                document.getElementById('wa').style.display = "none"
                document.getElementById('ch').style.display = "none"
            } else if(document.getElementById('destinations').value == "Sportspark") {
                document.getElementById('ma').style.display = "none"
                document.getElementById('co').style.display = "none"
                document.getElementById('sp').style.display = "block"
                document.getElementById('su').style.display = "none"
                document.getElementById('wa').style.display = "none"
                document.getElementById('ch').style.display = "none"
            } else if(document.getElementById('destinations').value == "The Hive / SU") {
                document.getElementById('ma').style.display = "none"
                document.getElementById('co').style.display = "none"
                document.getElementById('sp').style.display = "none"
                document.getElementById('su').style.display = "block"
                document.getElementById('wa').style.display = "none"
                document.getElementById('ch').style.display = "none"
            } else if(document.getElementById('destinations').value == "Teaching Wall") {
                document.getElementById('ma').style.display = "none"
                document.getElementById('co').style.display = "none"
                document.getElementById('sp').style.display = "none"
                document.getElementById('su').style.display = "none"
                document.getElementById('wa').style.display = "block"
                document.getElementById('ch').style.display = "none"
            } else if(document.getElementById('destinations').value == "Chancellors Drive") {
                document.getElementById('ma').style.display = "none"
                document.getElementById('co').style.display = "none"
                document.getElementById('sp').style.display = "none"
                document.getElementById('su').style.display = "none"
                document.getElementById('wa').style.display = "none"
                document.getElementById('ch').style.display = "block"
            }
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