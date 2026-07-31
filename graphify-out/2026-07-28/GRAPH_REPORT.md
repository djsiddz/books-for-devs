# Graph Report - .  (2026-06-29)

## Corpus Check
- Corpus is ~12,717 words - fits in a single context window. You may not need a graph.

## Summary
- 76 nodes · 74 edges · 17 communities (10 shown, 7 thin omitted)
- Extraction: 76% EXTRACTED · 24% INFERRED · 0% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.85)
- Token cost: 13,400 input · 3,450 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Book Content & Concepts|Book Content & Concepts]]
- [[_COMMUNITY_Dependencies & Package Config|Dependencies & Package Config]]
- [[_COMMUNITY_UI Components|UI Components]]
- [[_COMMUNITY_Content Rendering & Routing|Content Rendering & Routing]]
- [[_COMMUNITY_Content Schema & CMS|Content Schema & CMS]]
- [[_COMMUNITY_Build & Dev Scripts|Build & Dev Scripts]]
- [[_COMMUNITY_Human & Leadership Books|Human & Leadership Books]]
- [[_COMMUNITY_Brand Icons & Visual Identity|Brand Icons & Visual Identity]]
- [[_COMMUNITY_Build Config & CICD|Build Config & CI/CD]]
- [[_COMMUNITY_Favicon & Theme Assets|Favicon & Theme Assets]]
- [[_COMMUNITY_Author Identity|Author Identity]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Book Template|Book Template]]
- [[_COMMUNITY_Monorepo Config|Monorepo Config]]
- [[_COMMUNITY_Project Documentation|Project Documentation]]
- [[_COMMUNITY_VS Code Config|VS Code Config]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 6 edges
2. `../layouts/Layout.astro` - 4 edges
3. `Leaders Eat Last` - 4 edges
4. `../components/Card.astro` - 3 edges
5. `../components/Footer.astro` - 3 edges
6. `../components/Header.astro` - 3 edges
7. `../components/Intro.astro` - 3 edges
8. `../components/Outro.astro` - 3 edges
9. `Books Content Collection (Astro Content API)` - 3 edges
10. `Refactoring - Improving the Design of Existing Code` - 3 edges

## Surprising Connections (you probably didn't know these)
- `NOTES.md - Tags Meta and Book Lists` --references--> `Leaders Eat Last`  [INFERRED]
  NOTES.md → src/content/books/01-leaders-eat-last.mdx
- `../components/Intro.astro` --semantically_similar_to--> `../components/Outro.astro`  [INFERRED] [semantically similar]
  src/components/Intro.astro → src/components/Outro.astro
- `Leaders Eat Last` --semantically_similar_to--> `Harry Potter and the Philosopher's Stone`  [INFERRED] [semantically similar]
  src/content/books/01-leaders-eat-last.mdx → src/content/books/00-harry-potter-1.mdx
- `Algorithms to Live By` --semantically_similar_to--> `Atomic Habits`  [INFERRED] [semantically similar]
  src/content/books/05-algorithms-to-live-by.mdx → src/content/books/02-atomic-habits.mdx
- `Refactoring - Improving the Design of Existing Code` --semantically_similar_to--> `Clean Code - A Handbook of Agile Software Craftmanship`  [INFERRED] [semantically similar]
  src/content/books/04-refactoring.mdx → src/content/books/06-clean-code.mdx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Index Page Full Component Composition** — pages_index, components_card, components_header, components_footer, components_intro, components_outro, layouts_layout [EXTRACTED 1.00]
- **Books Content Data Flow Pipeline (Schema to Pages to Card)** — src_content_config, concept_books_collection, pages_index, books__slug_, components_card [INFERRED 0.95]
- **Dark/Light Theme Management System** — layouts_layout, components_themetoggle, concept_theme_persistence [INFERRED 0.95]
- **Software Craft Book Canon** — books_04_refactoring, books_06_clean_code, books_07_pragmatic_programmer, concept_software_craft [EXTRACTED 1.00]
- **Career Leverage Reading Cluster** — books_00_the_alchemist, books_00_who_moved_my_cheese, books_07_pragmatic_programmer, concept_career_leverage [EXTRACTED 1.00]
- **Decision Making and Adaptability Books** — books_05_algorithms_to_live_by, books_00_who_moved_my_cheese, concept_decision_making [EXTRACTED 1.00]

## Communities (17 total, 7 thin omitted)

### Community 0 - "Book Content & Concepts"
Cohesion: 0.22
Nodes (11): The Alchemist, Who Moved My Cheese?, Atomic Habits, Refactoring - Improving the Design of Existing Code, Algorithms to Live By, Clean Code - A Handbook of Agile Software Craftmanship, The Pragmatic Programmer - Your Journey to Mastery, Career Leverage Intent Tag (+3 more)

### Community 1 - "Dependencies & Package Config"
Cohesion: 0.18
Nodes (10): dependencies, astro, @astrojs/mdx, tailwindcss, @tailwindcss/vite, typescript, name, packageManager (+2 more)

### Community 2 - "UI Components"
Cohesion: 0.36
Nodes (4): ../components/Card.astro, ../components/Footer.astro, ../components/Intro.astro, ../components/Outro.astro

### Community 3 - "Content Rendering & Routing"
Cohesion: 0.32
Nodes (3): ../components/Header.astro, Dark/Light Theme Persistence via localStorage, ../layouts/Layout.astro

### Community 4 - "Content Schema & CMS"
Cohesion: 0.29
Nodes (6): Book Detail Dynamic Page Route, Books Content Collection (Astro Content API), Pages CMS Content Config, booksCollection, collections, VSCode Settings (MDX as Markdown)

### Community 5 - "Build & Dev Scripts"
Cohesion: 0.33
Nodes (6): scripts, astro, build, dev, preview, start

### Community 6 - "Human & Leadership Books"
Cohesion: 0.50
Nodes (5): Harry Potter and the Philosopher's Stone, Leaders Eat Last, Human Behavior Intent Tag, Leadership Intent Tag, NOTES.md - Tags Meta and Book Lists

### Community 7 - "Brand Icons & Visual Identity"
Cohesion: 0.40
Nodes (5): 3D Fluency Exploding Head Icon, Exploding Head Emoji Concept, Microsoft Fluent 3D Emoji Design Style, Mind-Blown Visual Metaphor, Overwhelming Knowledge Wow Factor Theme

### Community 9 - "Favicon & Theme Assets"
Cohesion: 0.67
Nodes (3): Astro Framework Logo Shape, Dark Mode Color Adaptation, Favicon SVG Icon

## Knowledge Gaps
- **35 isolated node(s):** `name`, `type`, `version`, `dev`, `start` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `Build & Dev Scripts` to `Dependencies & Package Config`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `../layouts/Layout.astro` connect `Content Rendering & Routing` to `UI Components`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Leaders Eat Last` (e.g. with `Harry Potter and the Philosopher's Stone` and `NOTES.md - Tags Meta and Book Lists`) actually correct?**
  _`Leaders Eat Last` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._