const socket = io();
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', () => {
  const msg = messageInput.value;
  if (msg.trim() !== '') {
    socket.emit('chatMessage', msg);
    messageInput.value = '';
  }
});

socket.on('chatMessage', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
