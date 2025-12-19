// src/components/ChatWindow.jsx
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { chatWithRAG } from '../services/api';
import styles from '../styles/chatbot.module.css'; // Assuming styles are moved here

const ChatWindow = ({ isOpen, toggleChat }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you with Health & Wellness today?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        toggleChat();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, toggleChat]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userQuery = input;
      setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: userQuery }]);
      setInput('');

      try {
        const botResponse = await chatWithRAG(userQuery);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: botResponse },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Sorry, I could not connect to the RAG agent. Please try again later.' },
        ]);
      }
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h3>Health & Wellness Assistant</h3>
        <button onClick={toggleChat}>X</button>
      </div>
      <div className={styles.chatMessages}>
        {messages.map((msg, index) => (
          <div key={index} className={clsx(styles.message, styles[msg.sender])}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
