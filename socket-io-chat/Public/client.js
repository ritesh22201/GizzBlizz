const socket = io();

let name;
let textarea = document.querySelector('#textarea');
const messageArea = document.querySelector('.message__area');

do{
   name = prompt('Please enter your name: ');
}while(!name)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        sendMessage(e.target.value);
        e.target.value = ''
    }
})

function sendMessage(msg) {
    let message = {
        user : name,
        msg : msg.trim()
    }
    // Append to the dom
    appendMessage(message, 'outgoing');

    // Socket

    socket.emit('message', message);
}

function appendMessage(message, type) {
    let mainDiv = document.createElement('div');
    const className = type;
    mainDiv.classList.add(className, 'message');

    let markup = `
      <h4>${message.user}</h4>
      <p>${message.msg}</p>
    `

    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}

// Receive message from the server

socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
})