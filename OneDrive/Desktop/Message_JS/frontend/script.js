const API_URL = "http://localhost:5000";
let currentUser = "Alice";
let currentChat = "chat1";

// Change user
document.getElementById("userSelector").addEventListener("change", function() {
    currentUser = this.value;
    document.getElementById("currentUser").innerText = currentUser;
});

// Load chat list
const chatList = document.getElementById("chatList");
["chat1", "chat2"].forEach(chat => {
    let chatElement = document.createElement("div");
    chatElement.className = "chat";
    chatElement.innerText = chat;
    chatElement.onclick = () => openChat(chat);
    chatList.appendChild(chatElement);
});

// Open a chat and load messages
async function openChat(chatId) {
    currentChat = chatId;
    document.getElementById("chatName").innerText = `Chat: ${chatId}`;
    document.getElementById("messageHistory").innerHTML = "";

    const res = await fetch(`${API_URL}/messages/${chatId}`);
    const messages = await res.json();

    messages.forEach(msg => displayMessage(msg));
}

// Display a message
function displayMessage(msg) {
    const messageBox = document.createElement("div");
    messageBox.className = `message ${msg.sender === currentUser ? "sent" : "received"}`;
    messageBox.innerHTML = `<strong>${msg.sender}:</strong> ${msg.text}`;
    document.getElementById("messageHistory").appendChild(messageBox);
}

// Send a message
async function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (!text) return;

    const message = { chatId: currentChat, sender: currentUser, text };

    // Send to API
    await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
    });

    displayMessage(message);
    input.value = "";
}
function toggleContactInfo() {
    const contactInfo = document.getElementById("contactInfo");
    if (window.innerWidth <= 768) {
        contactInfo.style.display = contactInfo.style.display === "none" || contactInfo.style.display === "" ? "flex" : "none";
    }
}
