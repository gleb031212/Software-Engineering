function showPosition(position) {
  let finalPosition = [position.coords.latitude, position.coords.longitude];
  console.log('position:', finalPosition);
}
function clearSpace() {
  fetch(`http://localhost:8080/clear-space`, {
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      console.log("Space Cleared")
  })
  .catch(error => console.error('Error clearing the space:', error));
}
//https://www.w3schools.com/html/html5_geolocation.asp

document.getElementById('notify-arrival').addEventListener('click', function() {
  const promise = new Promise(function(resolve,reject){

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

          } else {
      console.log("Geolocation is not supported by this browser.");
    }
    resolve("Promise Complete");
  })
  promise.then(() => {
    console.log("Log to check this works");

    // window.location.href = '/';
  });
  
    
  // tell admin that user has arrived, then turn page to homepage

});

document.getElementById('notify-departure').addEventListener('click', function() {
  clearSpace()
}

);