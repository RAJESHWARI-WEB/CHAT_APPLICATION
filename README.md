# CHAT_APPLICATION

CODETECH IT SOLUTIONS PROJECT TASK-2

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RAJESHWARI D

*INTERN ID*: CT04WL201

*DOMAIN*: FULL STACK DEVELOPMENT

*DURATION*: 4 WEEEKS

*MENTOR*: NEELA SANTOSH

*DESCRIPTION*: This project is a simple yet effective real-time chat application built using Node.js, Express, and Socket.IO. The application facilitates instant communication between users connected to the same server. It showcases how web sockets can be implemented for real-time features in modern web applications.

At the core of the backend is server.js, where the Express framework handles HTTP server operations and serves static assets from the public directory. Socket.IO is used to handle WebSocket connections. When a user connects, the server logs their connection, listens for chat messages via the chatMessage event, and then broadcasts them to all connected clients. Similarly, it logs when a user disconnects, enabling real-time status tracking and interaction.

The frontend of the application is powered by index.html, a minimal and clean user interface that includes a title, a message display area, an input field, and a send button. It also links to a CSS file (style.css) for styling and a JavaScript file (script.js) for handling the client-side socket connection.

The style.css file styles the chat interface for a neat and user-friendly layout. It centers the chat window, gives it a card-like appearance with a white background, rounded corners, and a subtle shadow. The message box is scrollable, ensuring that older messages are still accessible. The input field and send button are sized and spaced for a seamless typing and sending experience.

On the frontend JavaScript side (script.js), a socket connection is established with the server using Socket.IO. The user can type a message and click the send button, which triggers an event to send the message to the server. When any message is broadcasted from the server, it is dynamically added to the chat area in real time. This interaction ensures that messages from all users are displayed live, with no need to refresh the page.

The package.json file defines the project metadata, including the name ("chat-app"), version, author ("Rajeshwari"), and dependencies. The dependencies include express for server operations and socket.io for real-time communication. The start script allows the server to be initiated with a single command (npm start), streamlining development and deployment.

This chat app is an excellent example of real-time web functionality and can serve as a foundational template for more advanced communication platforms. With features like broadcasting messages to all users, a live-updating interface, and a modular architecture, it introduces key principles of full-stack JavaScript # development.

Potential enhancements could include user authentication, message timestamps, private messaging, or integrating a database for persistent chat history. Nevertheless, this project effectively demonstrates the fundamental concept of real-time communication using Socket.IO in a clean and understandable format.

# OUTPUT

![Image](https://github.com/user-attachments/assets/358a964d-823b-490e-bccc-2cd271b8668f)
