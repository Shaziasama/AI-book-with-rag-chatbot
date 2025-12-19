# Feature Specification: Book Website Ingestion and Vector Indexing for RAG

**Feature Branch**: `012-book-ingestion-rag`  
**Created**: 2025-12-16
**Status**: Draft  
**Input**: User description: "Title: Book Website Ingestion and Vector Indexing for RAG Objective: Ingest all public URLs of the deployed Docusaurus book, extract clean text, generate semantic embeddings, and store them in a vector database for RAG-based retrieval. Scope: - Load all book website URLs - Extract and clean main textual content - Chunk text with relevant metadata (URL, title, section) - Generate embeddings using Cohere models - Store vectors and metadata in Qdrant Cloud Success Criteria: - All book pages are indexed successfully - Text chunks are clean, consistent, and non-empty - Each chunk has correct metadata - Embeddings are queryable via semantic search Constraints: - Embeddings: Cohere - Vector DB: Qdrant Cloud (Free Tier) - Source: Public GitHub Pages URLs only - Optimized chunking for RAG"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Ingest Book Content (Priority: P1)

As a developer, I want to run a script that ingests all the content from the public book website, so that the content is available for semantic search.

**Why this priority**: This is the core functionality of the feature. Without it, no other part of the system can work.

**Independent Test**: The script can be run, and the content will be ingested into the vector database. The success of the ingestion can be verified by checking the database.

**Acceptance Scenarios**:

1. **Given** a list of public URLs for the book, **When** the ingestion script is run, **Then** all the content from the URLs is extracted, chunked, and stored in the Qdrant vector database with the correct metadata.
2. **Given** an invalid URL in the list, **When** the ingestion script is run, **Then** the script should log the error and continue processing the other URLs.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST be able to load a list of public URLs.
- **FR-002**: The system MUST extract the main textual content from the HTML of each URL.
- **FR-003**: The system MUST clean the extracted text to remove any unwanted artifacts.
- **FR-004**: The system MUST chunk the cleaned text into smaller, meaningful segments.
- **FR-005**: The system MUST generate embeddings for each text chunk using the Cohere API.
- **FR-006**: The system MUST store the text chunks, their embeddings, and associated metadata (URL, title, section) in a Qdrant Cloud vector database.
- **FR-007**: The system MUST be configurable to use different Cohere models.
- **FR-008**: The system MUST be able to handle network errors and retries when fetching URLs or calling the Cohere API.

### Key Entities *(include if feature involves data)*

- **Page**: Represents a single page from the book website. Attributes: URL, title.
- **TextChunk**: A segment of cleaned text from a Page. Attributes: content, metadata (URL, title, section).
- **Embedding**: A vector representation of a TextChunk.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All book pages are indexed successfully.
- **SC-002**: Text chunks are clean, consistent, and non-empty.
- **SC-003**: Each chunk has correct metadata (URL, title, section).
- **SC-004**: Embeddings are queryable via semantic search.
- **SC-005**: The ingestion process for the entire book should complete in under 30 minutes.
