# API Contract: Frontend-Backend Integration for RAG Chatbot

**Feature Branch**: `001-rag-fe-be-integration`
**Created**: December 17, 2025
**Feature Spec**: [specs/001-rag-fe-be-integration/spec.md](specs/001-rag-fe-be-integration/spec.md)
**Implementation Plan**: [specs/001-rag-fe-be-integration/plan.md](specs/001-rag-fe-be-integration/plan.md)

## Endpoint: `POST /chat/query`

- **Description**: This endpoint allows the Docusaurus frontend to submit user queries to the FastAPI RAG backend. The backend processes the query, retrieves relevant information, generates a response using its AI agent logic, and returns the answer.

### Request

- **Method**: `POST`
- **URL**: `/chat/query`
- **Content-Type**: `application/json`
- **Request Body**:
    ```json
    {
        "query": "string" // REQUIRED: The user's question or prompt for the RAG agent.
    }
    ```

### Response (Success)

- **Status Code**: `200 OK`
- **Content-Type**: `application/json`
- **Response Body**:
    ```json
    {
        "response": "string", // The AI agent's generated answer to the user's query.
        "sources": [           // OPTIONAL: A list of sources (e.g., book sections) that were used to formulate the response.
            {
                "id": "string",    // Unique identifier for the source (e.g., chunk ID).
                "url": "string",   // URL to the original source document in the book.
                "title": "string"  // Title or heading of the source section.
            }
        ]
    }
    ```

### Response (Error)

- **Status Codes**: `400 Bad Request`, `500 Internal Server Error`, etc.
- **Content-Type**: `application/json`
- **Response Body**:
    ```json
    {
        "detail": "string" // A human-readable message describing the error.
    }
    ```
