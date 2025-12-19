# Quickstart Guide: RAG Agent Development with OpenAI Agents SDK and FastAPI

This guide provides a quick overview of how to get started with the RAG Agent FastAPI backend.

## 1. Prerequisites

Before you begin, ensure you have the following:

-   **Python 3.11+**: Installed on your system.
-   **Poetry (recommended)**: For dependency management.
-   **Qdrant Instance**: A running Qdrant instance with your pre-stored book embeddings.
-   **OpenAI API Key**: An active OpenAI API key with access to the OpenAI Agents SDK.

## 2. Setup the Backend

1.  **Clone the repository**:
    ```bash
    git clone [repository_url]
    cd backend
    ```
2.  **Install dependencies**:
    ```bash
    poetry install
    ```
3.  **Configure environment variables**:
    Create a `.env` file in the `backend/` directory with your Qdrant and OpenAI API credentials.
    ```
    QDRANT_HOST="your_qdrant_host"
    QDRANT_API_KEY="your_qdrant_api_key"
    OPENAI_API_KEY="your_openai_api_key"
    ```
4.  **Run the FastAPI application**:
    ```bash
    poetry run uvicorn src.main:app --host 0.0.0.0 --port 8000
    ```
    The API will be accessible at `http://localhost:8000`.

## 3. Interact with the RAG Agent

You can interact with the `/query` endpoint using `curl` or a tool like Postman/Insomnia.

### Example Query

Send a POST request to `http://localhost:8000/query` with a JSON body:

```bash
curl -X POST "http://localhost:8000/query" \
     -H "Content-Type: application/json" \
     -d 
         "{
           \"query_text\": \"What are the main themes of the book?\",
           \"user_id\": \"a1b2c3d4-e5f6-7890-1234-567890abcdef\"
         }"
```

### Expected Response

A successful response will return a JSON object containing the agent's answer and citations:

```json
{
  "response_text": "The main themes of the book include the exploration of artificial intelligence, robotics, and human-robot interaction.",
  "citations": [
    {
      "content_id": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "source_document_id": "d1e2f3g4-h5i6-7890-1234-567890fedcba",
      "page_number": 15,
      "text_snippet": "Artificial intelligence and robotics are central to the narrative..."
    }
  ],
  "query_id": "q1w2e3r4-t5y6-7890-1234-567890asdfgh"
}
```

## 4. Monitoring and Logging

-   Check the console output for basic logging.
-   Refer to the observability requirements for details on metrics and distributed tracing.