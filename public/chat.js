/* event listener for the send-button */
document.getElementById('send-button').addEventListener('click', function() {
    var message = document.getElementById('message').value;
    var chat = document.getElementById('chat-messages');
    var newMessage = document.createElement('div');
    newMessage.classList.add('message', 'user-message');
    newMessage.textContent = message;
    chat.appendChild(newMessage);
    document.getElementById('message').value = '';
    chat.scrollTop = chat.scrollHeight;
});