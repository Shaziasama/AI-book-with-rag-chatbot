const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function postQuery(query) {
  if (!API_BASE_URL || !API_KEY) {
    console.error("API environment variables not set.");
    throw new Error("API configuration is missing.");
  }

  const response = await fetch(`${API_BASE_URL}/v1/chat/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ detail: 'Failed to process error response.' }));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}
