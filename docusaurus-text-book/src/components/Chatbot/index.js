import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { postQuery } from '../../services/api';

const Message = ({ message }) => {
  const messageClass = message.sender === 'bot' 
    ? (message.isError ? styles.botMessageError : styles.botMessage)
    : styles.userMessage;
  return <div className={`${styles.message} ${messageClass}`}>{message.text}</div>;
};

export default function Chatbot({ closeChat }) {
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I help you with the book?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatHistoryRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the chat opens
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Add event listener for the Escape key
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeChat();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeChat]);

  useEffect(() => {
    // Scroll to the bottom of the chat history when messages change
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { text: inputValue, sender: "user" }];
    setMessages(newMessages);
    setInputValue('');
    setLoading(true);
    setError(null);

    try {
      const data = await postQuery(inputValue);
      setMessages([...newMessages, { text: data.response, sender: "bot" }]);
    } catch (err) {
      setError(err.message);
      setMessages([...newMessages, { text: `Error: ${err.message}`, sender: "bot", isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !loading) {
      handleSend();
    }
  };

  return (
    <div className={styles.chatWindow} role="dialog" aria-modal="true" aria-labelledby="chat-header">
      <div className={styles.chatHeader} id="chat-header">
        <h2>AI Assistant</h2>
        <button onClick={closeChat} className={styles.closeButton} aria-label="Close Chat">&times;</button>
      </div>
      <div className={styles.chatHistory} ref={chatHistoryRef} role="log" aria-live="polite">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div className={styles.chatInputArea}>
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Ask a question..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
          aria-label="Chat input"
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
