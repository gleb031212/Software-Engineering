console.log('notify.js loaded');

document.getElementById('notify-arrival').addEventListener('click', function() {
  // tell admin that user has arrived, then turn page to homepage
  window.location.href = '/';
});

document.getElementById('notify-departure').addEventListener('click', function() {
  // tell admin that user has left
  window.location.href = '/';
});