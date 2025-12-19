// src/services/api.js
const BASE_URL = 'http://localhost:8000'; // FastAPI backend URL
const API_KEY = process.env.BACKEND_API_KEY; // Use environment variable

export const chatWithRAG = async (query) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (API_KEY) {
    headers['x-api-key'] = API_KEY;
  }

  try {
    const response = await fetch(`${BASE_URL}/v1/chat/query`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ query: query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching RAG response:', error);
    throw error;
  }
};
