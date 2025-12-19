# Research: Frontend-Backend Integration for RAG Chatbot

**Feature Branch**: `001-rag-fe-be-integration`
**Created**: December 17, 2025
**Feature Spec**: [specs/001-rag-fe-be-integration/spec.md](specs/001-rag-fe-be-integration/spec.md)
**Implementation Plan**: [specs/001-rag-fe-be-integration/plan.md](specs/001-rag-fe-be-integration/plan.md)

## Key Research Findings & Decisions

This feature primarily focuses on integrating existing components, so research is centered on best practices for connecting the Docusaurus frontend with the FastAPI backend.

### Research Task 1: Embedding Custom Components in Docusaurus

- **Question**: What are the best practices for embedding custom React/JavaScript components into Docusaurus?
- **Decision**: Docusaurus natively supports MDX, allowing the direct import and use of React components within Markdown/MDX files. This provides a flexible and integrated way to embed custom UI, such as a chatbot.
- **Rationale**: Utilizing Docusaurus's native capabilities ensures a more seamless integration, better maintainability, and access to Docusaurus's build pipeline and styling. It avoids less integrated approaches like iframes or direct, unmanaged DOM manipulation.
- **Alternatives Considered**:
    - **iFrames**: Could be used, but generally less integrated, might introduce styling challenges, and potential cross-origin communication issues with the parent page.
    - **Direct DOM Manipulation (vanilla JS)**: Possible, but less idiomatic for a React-based framework like Docusaurus, potentially leading to harder-to-maintain code and conflicts with React's virtual DOM.

### Research Task 2: HTTP Request Methods for Frontend-Backend Communication

- **Question**: What are suitable JavaScript libraries/methods for making HTTP requests from the Docusaurus frontend to a FastAPI backend?
- **Decision**: The `fetch` API will be used for simpler, direct API calls due to its native browser support and modern Promise-based interface. For more complex scenarios or when advanced features like interceptors are needed, `axios` would be a strong alternative. For the initial MVP, `fetch` is sufficient.
- **Rationale**: `fetch` is a Web Standard API, meaning no additional libraries are required, reducing bundle size. It's modern and asynchronous.
- **Alternatives Considered**:
    - **Axios**: A very popular and robust HTTP client, offering features like interceptors, automatic JSON transformation, and better error handling out-of-the-box. More overhead than `fetch`.
    - **XMLHttpRequest (XHR)**: The traditional way to make HTTP requests in browsers, but it's older, more verbose, and Promise-unaware, making it less ergonomic for modern web development.
