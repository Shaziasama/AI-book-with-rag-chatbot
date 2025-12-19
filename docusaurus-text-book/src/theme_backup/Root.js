import React, { useState } from 'react';
import Chatbot from '@site/src/components/Chatbot';
import ChatbotLauncher from '@site/src/components/Chatbot/Launcher';

// Default implementation, that you can customize
export default function Root({children}) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {children}
      <ChatbotLauncher onClick={toggleChat} />
      {isChatOpen && <Chatbot closeChat={toggleChat} />}
    </>
  );
}
