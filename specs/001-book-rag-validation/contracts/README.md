# Internal API Contracts

This directory contains definitions for internal interfaces and data structures relevant to the Retrieval and Validation of Book Content Embeddings feature. These are not external-facing APIs but serve as contracts between different modules of the backend service.

For this feature, key interfaces include:
-   **Qdrant Client Interface**: Defines methods for connecting to Qdrant, inserting embeddings, and performing search queries.
-   **Cohere Embedder Interface**: Defines methods for generating text embeddings using the Cohere API.
-   **Retrieval Validator Interface**: Defines methods for comparing retrieved content chunks against expected sections and logging accuracy/mismatches.

Specific API schemas (e.g., OpenAPI) are not generated at this stage as these are internal module interfaces rather than REST/GraphQL endpoints.
