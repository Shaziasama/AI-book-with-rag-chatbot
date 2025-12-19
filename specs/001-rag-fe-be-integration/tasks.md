# Tasks: Frontend-Backend Integration for RAG Chatbot

**Input**: Design documents from `/specs/001-rag-fe-be-integration/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: `backend/src/`, `docusaurus-text-book/src/`

---
## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Configure the development environment for frontend-backend communication.

- [x] T001 [P] Create/update `.env` file in `docusaurus-text-book/` with `REACT_APP_API_BASE_URL` pointing to the FastAPI backend.
- [x] T002 [P] Create/update `.env` file in `docusaurus-text-book/` with `REACT_APP_API_KEY` for backend authentication.

---

## Phase 2: Foundational (Backend Prerequisites)

**Purpose**: Ensure the backend API is ready to accept requests from the frontend.

- [x] T003 Configure CORS middleware in `backend/src/main.py` to allow requests from the Docusaurus frontend's domain.
- [x] T004 Implement API Key authentication middleware/dependency in `backend/src/main.py` to secure the `/v1/chat/query` endpoint.
- [x] T005 Verify the `POST /v1/chat/query` endpoint exists in `backend/src/main.py` and conforms to the API contract in `plan.md`.

**Checkpoint**: Foundation ready. The backend can securely receive requests from the frontend.

---

## Phase 3: User Story 1 - Interact with RAG Chatbot (Priority: P1) 🎯 MVP

**Goal**: As a user, I can ask questions via a chatbot on the book website and get real-time answers from the RAG agent.

**Independent Test**: Embed the chatbot, send a query to the (mocked or real) backend, and verify a response is displayed. The UI should work independently of a live backend.

### Implementation for User Story 1

- [x] T006 [P] [US1] Create the main React component structure for the chatbot UI in `docusaurus-text-book/src/components/Chatbot/index.js`.
- [x] T007 [P] [US1] Add basic styling for the chatbot window, input field, and message display in `docusaurus-text-book/src/components/Chatbot/styles.module.css`.
- [x] T008 [P] [US1] Create a launcher icon component for the chatbot in `docusaurus-text-book/src/components/Chatbot/Launcher.js`.
- [x] T009 [US1] Integrate the `Chatbot` and `Launcher` components into the global Docusaurus layout by swizzling the root theme component or using `docusaurus.config.ts` to ensure it appears on all pages. A good place is `docusaurus-text-book/src/theme/Root.js`.
- [x] T010 [US1] Implement state management (e.g., using `React.useState` or `React.useReducer`) within the main Chatbot component for visibility (open/closed), message history, and loading/error states.
- [x] T011 [P] [US1] Create an API service module to handle `fetch` requests to the backend in `docusaurus-text-book/src/services/api.js`. This module should read the base URL and API key from environment variables.
- [x] T012 [US1] Connect the chatbot's input form. On submit, it should call the API service from T011, send the user's query, and update the state to show the new message.
- [x] T013 [US1] Implement the rendering logic to display the conversation history (user queries and agent responses) in the chat window.
- [x] T014 [US1] Implement UI feedback for loading and error states. Display a loading spinner while waiting for a backend response (based on the loading state).
- [x] T015 [US1] Implement error display logic. Show a user-friendly toast message or an inline error message in the chat if the API call fails (based on the error state).
- [x] T016 [P] [US1] Apply responsive CSS to ensure the chatbot is usable on both desktop and mobile viewports.
- [x] T017 [P] [US1] Add ARIA attributes and ensure keyboard navigation (e.g., open/close with Escape key, focus management) to meet WCAG 2.1 AA accessibility standards.

**Checkpoint**: User Story 1 is fully functional. The chatbot appears, can be opened/closed, sends messages to the backend, and displays responses and errors.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Finalize the feature with documentation and cleanup.

- [x] T018 Review the browser's developer console and resolve any errors or warnings related to the chatbot components. *(Note: Manual verification required)*
- [x] T019 [P] Create documentation in `docs/technical/chatbot-integration.md` explaining the component structure, state management, and API communication for future maintenance.
- [x] T020 Validate the end-to-end functionality by running through the acceptance criteria from `spec.md`. *(Note: Manual verification required)*

---
## Dependencies & Execution Order
- **Phase 1 (Setup)** can run immediately.
- **Phase 2 (Foundational)** depends on Phase 1.
- **Phase 3 (User Story 1)** depends on Phase 2.
- **Phase 4 (Polish)** depends on Phase 3.
- Within US1, T009-T015 should be done sequentially after the parallelizable UI setup tasks (T006-T008) are complete.

## Implementation Strategy
### MVP First (User Story 1 Only)
1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test the complete chatbot interaction flow as described in the US1 acceptance criteria.
5. Deploy/demo the integrated chatbot.
