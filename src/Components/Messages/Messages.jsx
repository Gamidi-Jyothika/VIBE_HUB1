/*import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Messages.css"; // Optional: For styling

const Messages = () => {
  const { user } = useSelector((store) => store);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Mock API Call - Replace with your API
    setMessages([
      { id: 1, sender: "Alice", text: "Hello!" },
      { id: 2, sender: "Bob", text: "How are you?" },
    ]);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), sender: user?.reqUser?.username, text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="messages-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
  
};

export default Messages;
*/
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Messages.css"; // Optional: For styling

const Messages = () => {
  const { user } = useSelector((store) => store);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    console.log("Messages Component Loaded");
    console.log("User:", user);
    setMessages([
      { id: 1, sender: "Alice", text: "Hello!" },
      { id: 2, sender: "Bob", text: "How are you?" },
    ]);
  }, []);

  const handleSendMessage = () => {
    console.log("Send Message Clicked:", newMessage);
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), sender: user?.reqUser?.username || "Unknown", text: newMessage },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="messages-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
