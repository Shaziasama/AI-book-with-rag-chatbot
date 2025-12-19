---
id: 0001
title: Establish Project Constitution for Physical AI Book
stage: constitution
date: 2025-12-19
surface: agent
model: gemini
feature: none
branch: 001-rag-fe-be-integration
user: shazia zohaib
command: /sp.constitution
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
tests:
[]
---

## Prompt

/sp.constitution You are an AI Assistant tasked with completing a unified book project titled "Physical AI & Humanoid Robotics". Your responsibilities include:

1. AI/Spec-Driven Book Creation:
   - Write a comprehensive book using Docusaurus based on the given course modules and topics.
   - Deploy the book to GitHub Pages.
   - Follow the project theme: "AI Systems in the Physical World – Embodied Intelligence."
   - Ensure content is modular: include chapters, sections, code examples, diagrams, and practical exercises.
   - Modules to cover:
     Module 1: Robotic Nervous System (ROS 2) – ROS 2 Nodes, Topics, Services, rclpy integration, URDF.
     Module 2: Digital Twin (Gazebo & Unity) – Physics simulation, sensors (LiDAR, Depth, IMU), human-robot interaction.
     Module 3: AI-Robot Brain (NVIDIA Isaac) – Isaac Sim, synthetic data generation, VSLAM, Nav2 path planning.
     Module 4: Vision-Language-Action (VLA) – Voice commands, cognitive planning, translating natural language to robot actions.
   - Include a Capstone Project guiding students to control a humanoid robot via voice commands and AI planning.

2. Integrated RAG Chatbot Development:
   - Build a Retrieval-Augmented Generation (RAG) chatbot embedded within the book.
   - Chatbot must answer user questions about the book content.
   - Must support answering based on user-selected text.
   - Use OpenAI Agents/ChatKit SDKs, FastAPI, Neon Serverless Postgres, and Qdrant Cloud Free Tier.
   - Ensure responses are concise, accurate, and context-aware.

3. Constraints & Style:
   - Maintain clarity, correctness, and educational focus suitable for advanced AI students.
   - Provide examples, diagrams, and interactive exercises where applicable.
   - Keep technical terminology precise but accessible.
   - Follow a consistent structure for each module: Overview → Key Concepts → Code/Simulation Examples → Exercises → Summary.

4. Deployment & Integration:
   - Ensure the book is fully deployable via Docusaurus to GitHub Pages.
   - The chatbot must be fully functional inside the deployed book.
   - Provide instructions for setup, integration, and testing of all tools and dependencies.

Mission:
- Bridge the gap between digital AI knowledge and real-world humanoid robotics.
- Enable students to design, simulate, and deploy humanoid robots capable of natural interactions.

## Response snapshot

The project constitution was established at `.specify/memory/constitution.md` with version 1.0.0. Key principles were defined based on the project description, covering scope, content modularity, RAG integration, quality standards, deployment, and technology stack. The plan template at `.specify/templates/plan-template.md` was updated to include gates that check for compliance with these new principles.

## Outcome

- ✅ Impact: Established the foundational governance document for the project, ensuring all future development aligns with the core mission. This provides a clear framework for decision-making and quality control.
- 🧪 Tests: No tests were run as this was a documentation and configuration task.
- 📁 Files: 
  - Modified: `.specify/memory/constitution.md`
  - Modified: `.specify/templates/plan-template.md`
  - Created: `history/prompts/constitution/`
- 🔁 Next prompts: A logical next step would be to use `/sp.specify` to define a feature that adheres to the new constitution.
- 🧠 Reflection: The process of distilling principles from a detailed project description and propagating them into project templates is a critical step for spec-driven development. Using the agent-native PHR creation flow was necessary due to the shell environment.

## Evaluation notes (flywheel)

- Failure modes observed: The initial attempt to list the `history/prompts/constitution/` directory failed because it didn't exist, requiring an additional step to create it.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): N/A
