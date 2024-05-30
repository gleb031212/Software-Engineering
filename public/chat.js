const chat = document.getElementById('chat-messages');
chat.innerHTML = `
<div class = "message admin-message">
    <p class = "message-metadata"><b>Admin - <span></span></b></p>
    <p class = "message-text">Hello, how can I assist you today?</p>
</div>
`;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
let messageTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit'});
let messageTimeHTML = document.getElementsByClassName('message-metadata')[0].
    getElementsByTagName('span')[0];
messageTimeHTML.textContent = messageTime;


document.getElementById('send-button').addEventListener('click', function() {

    var message = document.getElementById('message').value;

    var newMessage = document.createElement('div');
    newMessage.classList.add('message', 'user-message');

    var metadata = document.createElement('p');
    var boldText = document.createElement('b');
    metadata.classList.add('message-metadata');
    metaContent = "You" + " - " + new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit'});
    boldText.textContent = metaContent;
    metadata.appendChild(boldText);

    var text = document.createElement('p');
    text.classList.add('message-text');
    text.textContent = message;

    newMessage.appendChild(metadata);
    newMessage.appendChild(text);
    chat.appendChild(newMessage);

    document.getElementById('message').value = '';
    chat.scrollTop = chat.scrollHeight;

    fetch('/chat', {
        method: 'POST',
        body: JSON.stringify({
            metadata: metaContent,
            text: message
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    }).then((response) => response.json())
    .then((json) => console.log(json));
    });

function isAdmin() {
    return fetch('/get-admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        return data.isAdmin;
    });
};


//console.log(isAdmin().then(result => console.log(result)));

function adminChat(isAdmin) {
    if (isAdmin === 1) {
        console.log('Admin is online');
    }
}

isAdmin().then(result => adminChat(result));