import React, { useState } from 'react';
//import './Chatbox.css'; // Ensure you have a CSS file for styling

export default function Chatbox({ darkMode }) {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const sendMessage = async () => {
    if (userMessage.trim() === "") return; // Prevent empty messages

    // Append user's message to the chat
    const newMessages = [...messages, { sender: "user", text: userMessage }];
    setMessages(newMessages);

    // Simulate an AI response
    const aiResponse = await getAIResponse(userMessage);
    setMessages([...newMessages, { sender: "ai", text: aiResponse }]);

    setUserMessage(""); // Clear input field
  };

  const getAIResponse = async (message) => {
    // Placeholder: Replace with an actual API call
    return `AI response to: "${message}". This will later integrate with CodeX's AI API.`;
  };

  return (
    <div className={`chatbox ${darkMode ? 'chatbox-dark' : ''}`}>
      <h5>Chat with AI</h5>
      {/* Chat window */}
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender} ${
              darkMode ? 'message-dark' : 'message-light'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      {/* Input section */}
      <div className="chat-input">
        <input
          type="text"
          className={`form-control ${darkMode ? 'bg-dark text-white' : ''}`}
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} mt-2`}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
