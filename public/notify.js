function showPosition(position) {
  let finalPosition = [position.coords.latitude, position.coords.longitude];
  console.log('position:', finalPosition);
}

//https://www.w3schools.com/html/html5_geolocation.asp

document.getElementById('notify-arrival').addEventListener('click', function() {
  return new Promise(function(resolve,reject){

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      console.log("Log to check this works");

          } else {
      console.log("Geolocation is not supported by this browser.");
    }
    resolve("Promise Complete");
  })
  
  
    window.location.href = '/';

  // tell admin that user has arrived, then turn page to homepage

});

document.getElementById('notify-departure').addEventListener('click', function() {
  // tell admin that user has left
  window.location.href = '/';
});