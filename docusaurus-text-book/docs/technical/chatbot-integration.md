---
id: chatbot-integration
title: Chatbot Integration Guide
sidebar_label: Chatbot Integration
---

# Chatbot Integration Guide

This document explains the technical implementation of the RAG (Retrieval-Augmented Generation) chatbot integrated into this Docusaurus book.

## Component Structure

The chatbot UI is built with React and is composed of several key components located in `src/components/Chatbot/`:

- **`Root.js` (`src/theme/`):** This is the top-level component that wraps the entire Docusaurus application. It is responsible for rendering the chatbot globally and managing its open/closed state.
- **`Launcher.js`:** A simple button component that is always visible on the bottom-right of the screen. Clicking it toggles the chatbot's visibility.
- **`index.js` (Chatbot):** The main component for the chat window. It contains the header, message history, and input area.
- **`styles.module.css` and `launcher.module.css`:** CSS modules for styling the components.

## State Management

State is managed within the React components using `useState` and `useRef` hooks.

- **`isChatOpen` (`Root.js`):** A boolean state that determines whether the main chat window is visible. This state is controlled by the `Launcher` and the chatbot's close button.
- **`messages` (`Chatbot/index.js`):** An array of message objects that represents the conversation history. Each object contains the `text`, `sender` ('user' or 'bot'), and an optional `isError` flag.
- **`inputValue` (`Chatbot/index.js`):** A string that holds the current value of the user's input field.
- **`loading` (`Chatbot/index.js`):** A boolean state that indicates when an API call is in progress. It's used to disable the input and show a loading indicator.
- **`error` (`Chatbot/index.js`):** A string that holds the last error message received from the API call.

## API Communication

All communication with the backend is handled by the `postQuery` function in `src/services/api.js`.

- **Endpoint:** It sends a `POST` request to the `/v1/chat/query` endpoint.
- **Authentication:** It reads an API key from the `.env` file (`REACT_APP_API_KEY`) and includes it in the `x-api-key` header of the request.
- **Payload:** The request body is a JSON object with a single key, `query`, containing the user's message.
- **Responses:** It returns a JSON promise. On success, the promise resolves to the backend's response. On failure, it throws an error with the detail message from the backend.

## How to Modify

- **To change the appearance:** Modify the CSS files in `src/components/Chatbot/`.
- **To change the API endpoint:** Update the `REACT_APP_API_BASE_URL` in the `.env` file and the endpoint path in `src/services/api.js`.
- **To add more complex state management:** Consider replacing `useState` with `useReducer` or a dedicated state management library like Zustand or Redux Toolkit if the component's logic grows significantly.
