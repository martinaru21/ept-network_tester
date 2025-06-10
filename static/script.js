const chatBox = document.getElementById("chat-box");
const button = document.getElementById("test-button");
const input = document.getElementById("chat-input");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = `message ${type}`;
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

const socket = io();

socket.on("chat_message", (msg) => {
    addMessage(msg, "server");
});

button.addEventListener("click", () => {
    const msg = input.value.trim();
    if (!msg) return;
    addMessage(msg, "user");
    socket.emit("chat_message", msg);
    input.value = "";
});
