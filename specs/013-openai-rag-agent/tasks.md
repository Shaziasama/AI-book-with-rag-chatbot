---

description: "Task list for RAG Agent Development with OpenAI Agents SDK and FastAPI"
---

# Tasks: RAG Agent Development with OpenAI Agents SDK and FastAPI

**Input**: Design documents from `/specs/013-openai-rag-agent/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The feature specification implicitly requires tests through its "Independent Test" and "Acceptance Scenarios" in User Stories, and explicit Observability Requirements for metrics and tracing, which often involve testing their implementation.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `tests/` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create Python project with Poetry in `backend/`
- [X] T002 Create basic FastAPI application structure in `backend/src/main.py`
- [ ] T003 Install core dependencies (FastAPI, uvicorn, qdrant-client, openai-agents-sdk) in `backend/`
- [ ] T004 Configure environment variable loading for Qdrant and OpenAI API keys in `backend/src/core/config.py`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Define base Pydantic models for `User Query`, `Retrieved Content`, and `Agent Response` in `backend/src/models/`
- [ ] T006 Implement a Qdrant client utility for connection and basic vector search in `backend/src/services/qdrant_client.py`
- [ ] T007 Implement OpenAI Agents SDK initialization and basic agent setup in `backend/src/services/openai_agent.py`
- [ ] T008 Set up structured logging for the FastAPI application in `backend/src/core/logger.py`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Ask a Question to the RAG Agent (Priority: P1) 🎯 MVP

**Goal**: As a user, I want to ask the RAG agent questions about the book content via an API endpoint, and receive contextually relevant and accurate answers based on information retrieved from Qdrant.

**Independent Test**: Can be fully tested by sending a POST request to the agent's API endpoint (`/query`) and verifying the response contains accurate information from the book, citing retrieved context, and handles edge cases like unavailable services or irrelevant queries gracefully.

### Implementation for User Story 1

- [ ] T009 [US1] Define FastAPI request model (`QueryRequest`) in `backend/src/api/schemas.py`
- [ ] T010 [US1] Define FastAPI response model (`QueryResponse`) in `backend/src/api/schemas.py`
- [ ] T011 [US1] Create RAG service orchestrator to handle query processing (Qdrant retrieval, OpenAI Agent invocation) in `backend/src/services/rag_service.py`
- [ ] T012 [US1] Implement `/query` POST endpoint in `backend/src/api/routes.py`
- [ ] T013 [US1] Integrate `rag_service` with `/query` endpoint for response generation in `backend/src/api/routes.py`
- [ ] T014 [US1] Implement error handling for Qdrant/OpenAI unavailability within `rag_service` to return "Service temporarily unavailable." message in `backend/src/services/rag_service.py`
- [ ] T015 [US1] Implement handling for irrelevant queries within `rag_service` to return "I'm sorry, I cannot find relevant information..." message in `backend/src/services/rag_service.py`
- [ ] T016 [US1] Implement input validation for `/query` endpoint (e.g., empty query) in `backend/src/api/routes.py`
- [ ] T017 [US1] Add unit tests for `rag_service` (Qdrant interaction, OpenAI agent calls) in `backend/tests/unit/test_rag_service.py`
- [ ] T018 [US1] Add integration tests for `/query` endpoint, covering success, unavailable service, irrelevant query, and bad request scenarios in `backend/tests/integration/test_api.py`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Monitor Agent Activity (Priority: P2)

**Goal**: As a developer, I want to view logs of agent queries, retrieved content, responses, and any errors to debug, monitor performance, and validate agent behavior.

**Independent Test**: Can be fully tested by interacting with the agent and then reviewing the generated logs to confirm all relevant interactions and errors are recorded, and by verifying that metrics and traces are being collected as expected.

### Implementation for User Story 2

- [ ] T019 [US2] Ensure all incoming user queries are logged, including `query_id`, `timestamp`, `text`, `user_id` in `backend/src/core/logger.py`
- [ ] T020 [US2] Ensure retrieved content (`content_id`, `text`) is logged during processing in `backend/src/core/logger.py`
- [ ] T021 [US2] Ensure agent responses (`response_id`, `response_text`, `citations`, `model_used`) are logged in `backend/src/core/logger.py`
- [ ] T022 [US2] Implement logging of internal errors, including stack traces, in `backend/src/core/logger.py`
- [ ] T023 [US2] Implement request latency metrics collection for `/query` endpoint in `backend/src/core/metrics.py`
- [ ] T024 [US2] Implement error rates metrics collection (per endpoint, per external service) in `backend/src/core/metrics.py`
- [ ] T025 [US2] Implement query throughput metrics collection in `backend/src/core/metrics.py`
- [ ] T026 [US2] Set up distributed tracing (e.g., OpenTelemetry integration) for requests across FastAPI, Qdrant, and OpenAI API in `backend/src/core/tracing.py`
- [ ] T027 [US2] Add tests for logging functionality (verify log formats and content) in `backend/tests/unit/test_logger.py`
- [ ] T028 [US2] Add tests for metrics collection (verify metrics are emitted correctly) in `backend/tests/unit/test_metrics.py`
- [ ] T029 [US2] Add tests for tracing setup (verify traces are initiated and propagated) in `backend/tests/unit/test_tracing.py`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T030 Review and refine all Pydantic models for serialization/deserialization correctness in `backend/src/models/` and `backend/src/api/schemas.py`
- [ ] T031 Create a `README.md` in `backend/` with setup and usage instructions (referencing `quickstart.md`)
- [ ] T032 Ensure all code adheres to project's Python linting and formatting standards (`ruff`, `black`) in `backend/`
- [ ] T033 Update `tests/` directory with `__init__.py` files to make them Python packages, if necessary in `backend/tests/`

---

## Dependencies & Execution Order

### Phase Dependencies

-   **Setup (Phase 1)**: No dependencies - can start immediately
-   **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
-   **User Stories (Phase 3+)**: All depend on Foundational phase completion
    -   User stories can then proceed in parallel (if staffed)
    -   Or sequentially in priority order (P1 → P2)
-   **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

-   **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
-   **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on US1 functionality to monitor, but tasks are structured for independent development.

### Within Each User Story

-   Tests MUST be written and FAIL before implementation
-   Models before services
-   Services before endpoints
-   Core implementation before integration
-   Story complete before moving to next priority

### Parallel Opportunities

-   All Setup tasks marked [P] can run in parallel
-   All Foundational tasks marked [P] can run in parallel (within Phase 2)
-   Once Foundational phase completes, User Story 1 and parts of User Story 2 can be developed in parallel with careful coordination.
-   **US1**: T009, T010 (schema definition) can be parallel with T011 (service logic). T017 (unit tests) can be parallel with T012-T016 (endpoint/error implementation).
-   **US2**: T019-T022 (logging) can be parallel with T023-T025 (metrics) and T026 (tracing). T027-T029 (tests) can be parallel with other implementation tasks.

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
- [ ] T017 [US1] Add unit tests for `rag_service` (Qdrant interaction, OpenAI agent calls) in `backend/tests/unit/test_rag_service.py`
- [ ] T018 [US1] Add integration tests for `/query` endpoint, covering success, unavailable service, irrelevant query, and bad request scenarios in `backend/tests/integration/test_api.py`

# Launch all models for User Story 1 together:
- [ ] T009 [US1] Define FastAPI request model (`QueryRequest`) in `backend/src/api/schemas.py`
- [ ] T010 [US1] Define FastAPI response model (`QueryResponse`) in `backend/src/api/schemas.py`
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3.  Complete Phase 3: User Story 1
4.  **STOP and VALIDATE**: Test User Story 1 independently
5.  Deploy/demo if ready

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready
2.  Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3.  Add User Story 2 → Test independently → Deploy/Demo
4.  Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together
2.  Once Foundational is done:
    -   Developer A: User Story 1
    -   Developer B: User Story 2
3.  Stories complete and integrate independently

---

## Notes

-   [P] tasks = different files, no dependencies
-   [Story] label maps task to specific user story for traceability
-   Each user story should be independently completable and testable
-   Verify tests fail before implementing
-   Commit after each task or logical group
-   Stop at any checkpoint to validate story independently
-   Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence