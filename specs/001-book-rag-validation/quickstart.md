# Quickstart: Retrieval and Validation of Book Content Embeddings

This guide provides a quick overview of how to set up and run the retrieval and validation process for book content embeddings.

## Prerequisites

-   Python 3.9+ installed.
-   `pip` for package management.
-   Access to a Qdrant Cloud Free Tier instance (cluster URL and API Key).
-   A Cohere API Key.
-   A deployed Qdrant collection containing book content embeddings (as per `data-model.md`).
-   Sample book content and corresponding "expected sections" for validation (test data).

## Setup

1.  **Clone the repository** (if not already done):
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

3.  **Create and activate a Python virtual environment**:
    ```bash
    python -m venv .venv
    # On Windows
    .\.venv\Scripts\activate
    # On macOS/Linux
    source .venv/bin/activate
    ```

4.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt # (assuming requirements.txt will contain qdrant-client, cohere, pytest)
    ```

5.  **Configure Environment Variables**:
    Set the following environment variables (e.g., in a `.env` file or directly in your shell):
    ```
    QDRANT_URL=<your_qdrant_cloud_url>
    QDRANT_API_KEY=<your_qdrant_api_key>
    COHERE_API_KEY=<your_cohere_api_key>
    QDRANT_COLLECTION_NAME=<name_of_your_book_embeddings_collection>
    ```

## Running the Validation

The validation process will typically be run via a Python script or a `pytest` command.

1.  **Prepare Test Data**: Ensure your test data (sample queries and their expected book sections) is correctly formatted and accessible by the validation script.

2.  **Execute the Validation Script**:
    ```bash
    python src/rag/validate_retrieval.py # (Assuming this script is created)
    ```
    Or, if using pytest:
    ```bash
    pytest tests/test_rag/test_validation.py # (Assuming validation tests are in this file)
    ```

## Interpreting Results

The validation script or tests will:
-   Connect to Qdrant and Cohere.
-   Execute semantic queries.
-   Compare retrieved chunks against expected sections.
-   Log retrieval accuracy metrics (e.g., precision, recall, MRR).
-   Log details of any mismatches found.

Review the console output and any generated log files (`validation_results.log` for example) to understand the performance and accuracy of the RAG pipeline's retrieval component. Look for:
-   Overall accuracy scores.
-   Specific queries that failed to retrieve relevant content.
-   Instances where irrelevant content was highly ranked.
