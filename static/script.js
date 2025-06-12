document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const button = document.getElementById("test-button");
    const input = document.getElementById("chat-input");

    let username = "";

    function addMessage(sender, text, type) {
        const container = document.createElement("div");
        container.className = `message ${type}`;

        const nameTag = document.createElement("strong");
        nameTag.textContent = `${sender}:`;
        nameTag.style.display = "block";

        const messageText = document.createElement("span");
        messageText.textContent = text;

        container.appendChild(nameTag);
        container.appendChild(messageText);
        chatBox.appendChild(container);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function askUsername() {
        while (!username) {
            username = prompt("Ingresa tu nombre de usuario:");
            if (username && username.trim().length > 0) {
                username = username.trim();
            } else {
                username = "";
            }
        }
    }

    askUsername();

    const socket = io();
    socket.emit("join", { username });

    socket.on("chat_message", ({ sender, msg }) => {
        if (sender !== username) {
            const type = sender === "Server" ? "server" : "other";
            addMessage(sender, msg, type);
        }
    });

    function sendMessage() {
        const msg = input.value.trim();
        if (!msg) return;

        addMessage(username, msg, "user");
        socket.emit("chat_message", { sender: username, msg });
        input.value = "";
    }

    button.addEventListener("click", sendMessage);

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
