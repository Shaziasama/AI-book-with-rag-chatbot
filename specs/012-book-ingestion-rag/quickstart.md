# Quickstart: RAG Ingestion Script

**Date**: 2025-12-16

This guide provides instructions on how to set up and run the RAG ingestion script.

## 1. Prerequisites

- Python 3.11+
- `uv` package manager (`pip install uv`)
- API credentials for Qdrant Cloud and Cohere.

## 2. Setup

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Navigate to the Backend Directory**:
    ```bash
    cd backend
    ```

3.  **Create a Virtual Environment**:
    Initialize a virtual environment using `uv`.
    ```bash
    uv venv
    ```

4.  **Activate the Virtual Environment**:
    - **PowerShell (Windows)**:
      ```powershell
      .venv\Scripts\Activate.ps1
      ```
    - **bash/zsh (macOS/Linux)**:
      ```bash
      source .venv/bin/activate
      ```

5.  **Install Dependencies**:
    Install the required Python packages using `uv`.
    ```bash
    uv pip install cohere qdrant-client beautifulsoup4 requests
    ```

## 3. Configuration

1.  **Create an Environment File**:
    Create a file named `.env` in the `backend` directory.

2.  **Add Credentials to `.env` file**:
    Add your API keys and Qdrant URL to the `.env` file as follows:
    ```env
    COHERE_API_KEY="YOUR COHORE API KEY"
    QDRANT_API_KEY="YOUR KEY"

    QDRANT_URL="https://your-qdrant-cluster-url.cloud.qdrant.io"
    ```
    **Note**: The script will also require a Qdrant collection name, which is specified in the script as `rag_embeding`.

## 4. Running the Script

Execute the `main.py` script from within the `backend` directory:
```bash
python src/main.py
```

The script will perform the following actions:
1.  Fetch the sitemap from the Docusaurus website.
2.  Extract URLs from the sitemap.
3.  For each URL, extract, clean, and chunk the text content.
4.  Generate embeddings for each chunk using Cohere.
5.  Create a collection in Qdrant named `rag_embeding` if it doesn't exist.
6.  Upload the chunks and their embeddings to the Qdrant collection.

You can monitor the progress via the logs printed to the console.
