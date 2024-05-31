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
            //console.log("here too")
            return response.json();
        })
        .then(data => {
            const tableBody1 = document.querySelector('#spaces-table1 tbody');
            const tableBody2 = document.querySelector('#spaces-table2 tbody');
            const tableBody3 = document.querySelector('#spaces-table3 tbody');
            const tableBody4 = document.querySelector('#spaces-table4 tbody');
            const tableBody5 = document.querySelector('#spaces-table5 tbody');
            const tableBody6 = document.querySelector('#spaces-table6 tbody');
            var freespaces1 = 0;
            var busyspaces1 = 0;
            var freespaces2 = 0;
            var busyspaces2 = 0;
            var freespaces3 = 0;
            var busyspaces3 = 0;
            var freespaces4 = 0;
            var busyspaces4 = 0;
            var freespaces5 = 0;
            var busyspaces5 = 0;
            var freespaces6 = 0;
            var busyspaces6 = 0;
            const tableBody = document.querySelector('#spaces-table tbody');
            data.forEach(space => {
                console.log(space.ParkID)
                if (space.ParkID == 1) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                    <td>${space.SpaceID}</td>
                    <td>${space.UserID}</td>
                    <td>${space.Available}</td>
                `;
                    tableBody1.appendChild(row);
                    if(space.Available == 0){
                        freespaces1++;
                    } else {
                        busyspaces1++;
                    }
                }
                if (space.ParkID == 2) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${space.SpaceID}</td>
                        <td>${space.UserID}</td>
                        <td>${space.Available}</td>
                    `;
                    tableBody2.appendChild(row);
                    if(space.Available == 0){
                        freespaces2++;
                    } else {
                        busyspaces2++;
                    }
                }
                if (space.ParkID == 3) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                            <td>${space.SpaceID}</td>
                            <td>${space.UserID}</td>
                            <td>${space.Available}</td>
                        `;
                    tableBody3.appendChild(row);
                    if(space.Available == 0){
                        freespaces3++;
                    } else {
                        busyspaces3++;
                    }
                }
                if (space.ParkID == 4) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                                <td>${space.SpaceID}</td>
                                <td>${space.UserID}</td>
                                <td>${space.Available}</td>
                            `;
                    tableBody4.appendChild(row);
                    if(space.Available == 0){
                        freespaces4++;
                    } else {
                        busyspaces4++;
                    }
                }
                if (space.ParkID == 5) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                                    <td>${space.SpaceID}</td>
                                    <td>${space.UserID}</td>
                                    <td>${space.Available}</td>
                                `;
                    tableBody5.appendChild(row);
                    if(space.Available == 0){
                        freespaces5++;
                    } else {
                        busyspaces5++;
                    }
                }
                if (space.ParkID == 6) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                                        <td>${space.SpaceID}</td>
                                        <td>${space.UserID}</td>
                                        <td>${space.Available}</td>
                                    `;
                    tableBody6.appendChild(row);
                    if(space.Available == 0){
                        freespaces6++;
                    } else {
                        busyspaces6++;
                    }
                }
            });
            const row1 = document.createElement('tr');
                    row1.innerHTML = `
                                        <td>University Car Park</td>
                                        <td>${freespaces1 + busyspaces1}</td>
                                        <td>${freespaces1}</td>
                                    `;
                    tableBody.appendChild(row1);
                    const row2 = document.createElement('tr');
                    row2.innerHTML = `
                                        <td>Colney</td>
                                        <td>${freespaces2 + busyspaces2}</td>
                                        <td>${freespaces2}</td>
                                    `;
                    tableBody.appendChild(row2);
                    const row3 = document.createElement('tr');
                    row3.innerHTML = `
                                        <td>Sportspark</td>
                                        <td>${freespaces3 + busyspaces3}</td>
                                        <td>${freespaces3}</td>
                                    `;
                    tableBody.appendChild(row3);
                    const row4 = document.createElement('tr');
                    row4.innerHTML = `
                                        <td>The Hive / SU</td>
                                        <td>${freespaces4 + busyspaces4}</td>
                                        <td>${freespaces4}</td>
                                    `;
                    tableBody.appendChild(row4);
                    const row5 = document.createElement('tr');
                    row5.innerHTML = `
                                        <td>Teaching Wall</td>
                                        <td>${freespaces5 + busyspaces5}</td>
                                        <td>${freespaces5}</td>
                                    `;
                    tableBody.appendChild(row5);
                const row6= document.createElement('tr');

                    row6.innerHTML = `
                                        <td>Chancellors Drive</td>
                                        <td>${freespaces6 + busyspaces6}</td>
                                        <td>${freespaces6}</td>
                                    `;
                    tableBody.appendChild(row6);
            
                    
                   
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

// document.getElementById('manage-car-parks').addEventListener('click', function() {
//     //event listener for class .available-spaces
//     let carParks = document.getElementsByClassName('available-spaces');
//     console.log(carParks)
//     Array.from(carParks).forEach((carPark) => {
//         getNumberOfAvailableSpaces(carPark).then(result => displayNumberOfAvailableSpaces(carPark.id, result));
//     });

// });