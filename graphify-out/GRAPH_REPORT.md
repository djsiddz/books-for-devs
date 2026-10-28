# Graph Report - books-for-devs  (2026-10-28)

## Corpus Check
- 36 files · ~15,748 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 125 nodes · 122 edges · 21 communities (12 shown, 9 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `318c9421`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 6 edges
2. `Changelog` - 5 edges
3. `Notes` - 5 edges
4. `../components/Footer.astro` - 4 edges
5. `../components/TradingCard.astro` - 4 edges
6. `../layouts/Layout.astro` - 4 edges
7. `[0.28.0] - 2026-06-29` - 4 edges
8. `../components/Header.astro` - 3 edges
9. `../components/Intro.astro` - 3 edges
10. `Books for Devs` - 3 edges

## Surprising Connections (you probably didn't know these)
- `../layouts/Layout.astro` --implements--> `Dark/Light Theme Persistence via localStorage`  [INFERRED]
  src/layouts/Layout.astro → src/components/ThemeToggle.astro
- `Book Detail Dynamic Page Route` --references--> `Books Content Collection (Astro Content API)`  [INFERRED]
  src/pages/books/[slug].astro → src/content.config.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Index Page Full Component Composition** — pages_index, components_card, components_header, components_footer, components_intro, components_outro, layouts_layout [EXTRACTED 1.00]
- **Books Content Data Flow Pipeline (Schema to Pages to Card)** — src_content_config, concept_books_collection, pages_index, books__slug_, components_card [INFERRED 0.95]
- **Dark/Light Theme Management System** — layouts_layout, components_themetoggle, concept_theme_persistence [INFERRED 0.95]
- **Software Craft Book Canon** — books_04_refactoring, books_06_clean_code, books_07_pragmatic_programmer, concept_software_craft [EXTRACTED 1.00]
- **Career Leverage Reading Cluster** — books_00_the_alchemist, books_00_who_moved_my_cheese, books_07_pragmatic_programmer, concept_career_leverage [EXTRACTED 1.00]
- **Decision Making and Adaptability Books** — books_05_algorithms_to_live_by, books_00_who_moved_my_cheese, concept_decision_making [EXTRACTED 1.00]

## Communities (21 total, 9 thin omitted)

### Community 0 - "Book Content & Concepts"
Cohesion: 0.14
Nodes (10): Description, {frontmatter.title}, Description, {frontmatter.title}, Description, {frontmatter.title}, Description, {frontmatter.title} (+2 more)

### Community 1 - "Dependencies & Package Config"
Cohesion: 0.29
Nodes (7): dependencies, astro, @astrojs/mdx, sharp, tailwindcss, @tailwindcss/vite, typescript

### Community 2 - "UI Components"
Cohesion: 0.16
Nodes (9): Book Detail Dynamic Page Route, ../components/Footer.astro, ../components/Intro.astro, ../components/TradingCard.astro, Books Content Collection (Astro Content API), Pages CMS Content Config, booksCollection, collections (+1 more)

### Community 3 - "Content Rendering & Routing"
Cohesion: 0.17
Nodes (11): [0.25.0], [0.26.0], [0.27.0] - 2026-05-28, [0.28.0] - 2026-06-29, Added, Changed, Changed, Changelog (+3 more)

### Community 4 - "Content Schema & CMS"
Cohesion: 0.38
Nodes (3): ../components/Header.astro, Dark/Light Theme Persistence via localStorage, ../layouts/Layout.astro

### Community 5 - "Build & Dev Scripts"
Cohesion: 0.18
Nodes (10): name, packageManager, scripts, astro, build, dev, preview, start (+2 more)

### Community 6 - "Human & Leadership Books"
Cohesion: 0.14
Nodes (12): Description, {frontmatter.title}, Three reasons to read this book, Description, {frontmatter.title}, Human Behavior Intent Tag, Leadership Intent Tag, Books List from Amazon (+4 more)

### Community 7 - "Brand Icons & Visual Identity"
Cohesion: 0.40
Nodes (5): 3D Fluency Exploding Head Icon, Exploding Head Emoji Concept, Microsoft Fluent 3D Emoji Design Style, Mind-Blown Visual Metaphor, Overwhelming Knowledge Wow Factor Theme

### Community 9 - "Favicon & Theme Assets"
Cohesion: 0.67
Nodes (3): Astro Framework Logo Shape, Dark Mode Color Adaptation, Favicon SVG Icon

### Community 14 - "Project Documentation"
Cohesion: 0.50
Nodes (3): Books for Devs, Disclosure, Stack

### Community 17 - "Community 17"
Cohesion: 0.20
Nodes (8): Description, {frontmatter.title}, Description, {frontmatter.title}, Description, {frontmatter.title}, Software Craft Intent Tag, Systems Thinking Intent Tag

## Knowledge Gaps
- **58 isolated node(s):** `name`, `type`, `version`, `dev`, `start` (+53 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Dependencies & Package Config` to `Build & Dev Scripts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `Software Craft Intent Tag` connect `Community 17` to `Book Content & Concepts`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Book Content & Concepts` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Human & Leadership Books` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._