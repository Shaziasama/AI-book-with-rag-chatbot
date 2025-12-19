// src/components/Launcher.jsx
import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import styles from '../styles/chatbot.module.css'; // Assuming styles are moved here

const Launcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.chatbotContainer}>
      <button className={styles.chatbotFAB} onClick={toggleChat}>
        <img src="/Physical-AI-Humanoid-Robotics/img/chatbot-icon.png" alt="Chatbot" />
      </button>

      {isOpen && (
        <ChatWindow isOpen={isOpen} toggleChat={toggleChat} />
      )}
    </div>
  );
};

export default Launcher;
