// src/theme_old/Root.js
import React from 'react';
import Launcher from '@site/src/components/Launcher';

export default function Root({ children }) {
  return (
    <>
      {children}
      {/* It's a good place to add global components like a chatbot. */}
      <Launcher />
    </>
  );
}