# Data Model: Frontend-Backend Integration for RAG Chatbot

**Feature Branch**: `001-rag-fe-be-integration`
**Created**: December 17, 2025
**Feature Spec**: [specs/001-rag-fe-be-integration/spec.md](specs/001-rag-fe-be-integration/spec.md)
**Implementation Plan**: [specs/001-rag-fe-be-integration/plan.md](specs/001-rag-fe-be-integration/plan.md)

## No New Persistent Data Models

This feature focuses on the integration between an existing Docusaurus frontend and a FastAPI RAG backend. No new persistent data models are introduced or required for this integration. The data flow primarily consists of transient request and response payloads exchanged between the frontend and backend components.

### Request/Response Payload Structures

(These are defined in the API Contracts section of the `plan.md` and `api_contract.md`.)

- **Frontend to Backend (User Query)**:
    - Input: JSON object containing a `query` string.
- **Backend to Frontend (Agent Response)**:
    - Output: JSON object containing a `response` string and an optional `sources` array of objects (each with `id`, `url`, `title`).
- **Backend to Frontend (Error)**:
    - Output: JSON object containing a `detail` string.
