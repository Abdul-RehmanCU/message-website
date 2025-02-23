const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Load messages from database.json
const DATABASE_FILE = "database.json";
let messages = JSON.parse(fs.readFileSync(DATABASE_FILE, "utf-8"));

// Route to get messages for a chat
app.get("/messages/:chatId", (req, res) => {
    const chatId = req.params.chatId;
    res.json(messages[chatId] || []);
});

// Route to send a message
app.post("/messages", (req, res) => {
    const { chatId, sender, text } = req.body;

    if (!messages[chatId]) {
        messages[chatId] = [];
    }

    const message = { sender, text, timestamp: new Date().toISOString() };
    messages[chatId].push(message);

    // Save to file
    fs.writeFileSync(DATABASE_FILE, JSON.stringify(messages, null, 2));

    res.json(message);
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
