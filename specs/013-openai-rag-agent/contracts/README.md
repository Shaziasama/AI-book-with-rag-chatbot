# Internal API Contracts

This directory contains definitions for internal interfaces and data structures relevant to the RAG Agent Development with OpenAI Agents SDK and FastAPI feature. These are not external-facing APIs but serve as contracts between different modules of the backend service.

-   **RAG Agent Query Endpoint**: Details the `/query` API endpoint for interacting with the RAG agent. (See [api_contract.md](api_contract.md))

For this feature, key internal interfaces include:
-   **Qdrant Client Interface**: Defines methods for connecting to Qdrant, inserting embeddings, and performing search queries.
-   **OpenAI Agent Interface**: Defines methods for interacting with the OpenAI Agents SDK for query processing and response generation.
