document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#usersTable tbody');
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.UserName}</td>
                    <td>${user.Password}</td>
                    <td>${user.Name}</td>
                    <td>${user.Email}</td>
                    <td><button class="remove-btn" data-user-id="${user.UserID}">Remove</button></td>
                `;
                tableBody.appendChild(row);
            });

            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const userId = this.getAttribute('data-user-id');
                    removeUser(userId, this);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
        fetch('http://localhost:8080/spaces')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            console.log("here too")
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#spaces-table tbody');
            data.forEach(space => {
                const row = document.createElement('tr');
                console.log("and here")
                row.innerHTML = `
                    <td>${space.SpaceID}</td>
                    <td>${space.UserID}</td>
                    <td>${space.Available}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

function removeUser(userId, button) {
    fetch(`http://localhost:8080/users/${userId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Remove the row from the table
        const row = button.closest('tr');
        row.remove();
    })
    .catch(error => console.error('Error deleting user:', error));
}


function getNumberOfAvailableSpaces(carPark) {
    console.log("OHIO");
    fetch('/get-available-park-spaces', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ parkID: carPark.id })
    })
    .then(response => response.json())
    .then(data => {
        console.log("yup")
        console.log(data.numOfSpaces);
        return data.numOfSpaces;
    });
}

function displayNumberOfAvailableSpaces(carParkID, numberOfSpaces) {
    const tagToUpdate = document.getElementById(carParkID);
    tagToUpdate.innerHTML = numberOfSpaces;
}

document.getElementById('manage-car-parks').addEventListener('click', function() {
    //event listener for class .available-spaces
    let carParks = document.getElementsByClassName('available-spaces');
    console.log(carParks)
    Array.from(carParks).forEach((carPark) => {
        getNumberOfAvailableSpaces(carPark).then(result => displayNumberOfAvailableSpaces(carPark.id, result));
    });

});