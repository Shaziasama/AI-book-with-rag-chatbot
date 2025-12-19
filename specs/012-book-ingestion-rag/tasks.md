# Task Plan: Book Website Ingestion and Vector Indexing for RAG

**Date**: 2025-12-16
**Feature**: `012-book-ingestion-rag`
**Spec**: [specs/012-book-ingestion-rag/spec.md](specs/012-book-ingestion-rag/spec.md)
**Plan**: [specs/012-book-ingestion-rag/plan.md](specs/012-book-ingestion-rag/plan.md)

## Phase 1: Project Setup

These tasks initialize the project structure and essential configuration.

- [x] T001 Create the main project directory: `backend/`
- [x] T002 Initialize a `uv` project within the `backend/` directory.
- [x] T003 Create the source and test directories: `backend/src/` and `backend/tests/`
- [x] T004 Create the main script file `backend/src/main.py` and the test file `backend/tests/test_main.py`
- [x] T005 [P] Create a `.env.example` file in `backend/` to document required environment variables (COHERE_API_KEY, QDRANT_API_KEY, QDRANT_URL).

## Phase 2: Foundational/Core Dependencies

These tasks set up the core clients and configuration needed for all other functions.

- [x] T006 Implement environment variable loading in `backend/src/main.py` using a library like `python-dotenv`.
- [x] T007 [P] Initialize the Cohere client in `backend/src/main.py` using the `COHERE_API_KEY`.
- [x] T008 [P] Initialize the Qdrant client in `backend/src/main.py` using the `QDRANT_API_KEY` and `QDRANT_URL`.

## Phase 3: User Story 1 - Ingest Book Content

**Goal**: As a developer, I want to run a script that ingests all the content from the public book website, so that the content is available for semantic search.

**Independent Test**: The script can be run successfully. After execution, the Qdrant Cloud dashboard should show a collection named `rag_embeding` populated with vector points. A sample query should retrieve relevant text chunks.

### Implementation Tasks

- [x] T009 [US1] Implement the `get_all_urls()` function in `backend/src/main.py` to fetch and parse the `sitemap.xml` file to return a list of all page URLs.
- [x] T010 [US1] Implement the `extract_text_from_url(url)` function in `backend/src/main.py` using `requests` and `BeautifulSoup4` to get the main content text.
- [x] T011 [US1] Implement the `chunk_text(text, url)` function in `backend/src/main.py` to split the extracted text into smaller, meaningful chunks, each with associated metadata (url, title, section).
- [x] T012 [US1] Implement the `get_embeddings(chunks)` function in `backend/src/main.py` that takes a list of text chunks and uses the Cohere client to generate an embedding for each one.
- [x] T013 [US1] Implement the `create_qdrant_collection(client)` function in `backend/src/main.py` to ensure the collection `rag_embeding` exists in Qdrant with the correct vector size (1024) and parameters.
- [ ] T014 [US1] Implement the `save_chunks_to_qdrant(client, chunks, embeddings)` function in `backend/src/main.py` to prepare and upsert the data points (vector + payload) into the `rag_embeding` collection.
- [ ] T015 [US1] Implement the main orchestration logic in a `main()` function within `backend/src/main.py` that calls the other functions in the correct sequence.

### Test Tasks

- [ ] T016 [P] [US1] In `backend/tests/test_main.py`, write unit tests for the `chunk_text` function to verify it handles various text inputs correctly.
- [ ] T017 [P] [US1] In `backend/tests/test_main.py`, write an integration test for `extract_text_from_url` using a saved local HTML file to ensure text is extracted as expected.
- [ ] T018 [P] [US1] In `backend/tests/test_main.py`, write an integration test for the main orchestration logic, mocking the client API calls to Cohere and Qdrant.

## Phase 4: Polish & Documentation

These tasks finalize the feature for usability and maintenance.

- [ ] T019 [P] Add comprehensive logging (e.g., using Python's `logging` module) to all functions in `backend/src/main.py` to provide insight into the script's progress and any errors.
- [ ] T020 [P] Create a `README.md` file in the `backend/` directory, expanding on the `quickstart.md` with more detailed explanations of the script's functionality and configuration.
- [ ] T021 Review and refactor the code in `backend/src/main.py` for clarity, error handling (e.g., for network issues), and performance.

## Dependencies

- **User Story 1** depends on the completion of **Phase 1 (Setup)** and **Phase 2 (Foundational)**.
- All implementation tasks within **Phase 3** should be completed before the **Phase 4** polish tasks.

## Parallel Execution

- Within Phase 3, test tasks (T016-T018) can be worked on in parallel with the implementation tasks (T009-T015).
- For example, once the function signature for `chunk_text` is defined (T011), the corresponding unit test (T016) can be written simultaneously.
- Polish tasks (T019-T020) can be done in parallel with final testing and refactoring (T021).

## Implementation Strategy

The suggested approach is to implement the tasks sequentially as ordered above. The MVP (Minimum Viable Product) is the completion of all tasks up to and including T015, which results in a fully functional ingestion script.
