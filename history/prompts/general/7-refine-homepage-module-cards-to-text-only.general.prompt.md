---
id: 7
title: Refine Homepage Module Cards to Text-Only
stage: general
date: 2025-12-19
surface: agent
model: gemini-1.5-pro-a
feature: homepage-cards
branch: main
user: shazia zohaib
command: none
labels: ["docusaurus", "homepage", "cards", "css", "ui-cleanup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - src/components/HomepageFeatures/index.tsx
  - src/components/HomepageFeatures/styles.module.css
tests_yaml: []
prompt_text: |
  You are a senior UI/UX designer and frontend expert.

  I am facing an issue where card components are reserving space for images and showing a black placeholder icon because images are missing.

  IMPORTANT RULES (STRICT):

  Do NOT use images, icons, SVGs, or image placeholders inside cards

  Remove any image container, thumbnail, media slot, or icon area

  Cards must be 100% text-based only

  Card Design Requirements:

  Cards should be small, compact, and content-dense

  No empty space at the top or anywhere inside the card

  Layout must start directly with text

  Card Structure:

  Title (bold, readable)

  Short description paragraph (2–4 lines)

  Optional: small metadata text (chapter, topic, level, etc.)

  Styling:

  Background: white or very light gray (#F8FAFC)

  Border radius: medium (8–12px)

  Padding: tight and balanced (no extra spacing)

  Shadow: subtle (0 6px 18px rgba(0,0,0,0.06))

  Title color: dark navy (#0F172A)

  Body text: slate gray (#475569)

  Hover effect: subtle border highlight in soft blue (#38BDF8)

  Layout:

  Use a responsive grid

  Cards should align evenly without visual gaps

  No image column or reserved media space

  Goal:

  Fix the broken image placeholder issue and create clean, readable, text-focused cards suitable for an educational book website.
response_text: |
  I have removed image-related JSX elements from `src/components/HomepageFeatures/index.tsx` and updated `src/components/HomepageFeatures/styles.module.css` to ensure cards are 100% text-based, compact, and styled according to the specified design requirements, addressing the broken image placeholder issue.
---
