# Graph Report - awtomatig-main  (2026-05-24)

## Corpus Check
- 76 files · ~2,500,157 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 373 nodes · 374 edges · 73 communities (44 shown, 29 thin omitted)
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 52 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3fd3b77b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]

## God Nodes (most connected - your core abstractions)
1. `Home Page` - 14 edges
2. `Services Page` - 10 edges
3. `GTM Push Event Library` - 8 edges
4. `GetInTouch Contact Component` - 8 edges
5. `FadeInSection Animation Component` - 7 edges
6. `Process Page` - 6 edges
7. `BlogTimeline Home Component` - 6 edges
8. `Home Section Visual Assets` - 6 edges
9. `Awtomatig Logo` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `FadeInSection Animation Component` --semantically_similar_to--> `GsapScrollEffect Animation Component`  [INFERRED] [semantically similar]
  src/components/animation/FadeEffect.jsx → src/components/animation/GsapScrollEffect.jsx
- `Home Page` --calls--> `MarqueHighlightText Component`  [EXTRACTED]
  src/app/page.js → src/components/MarqueHighlightText.jsx
- `Home Page` --calls--> `Sponsor Component`  [EXTRACTED]
  src/app/page.js → src/components/services/Sponsor.jsx
- `Accordion Component` --shares_data_with--> `Capabilities/FAQ Constants`  [INFERRED]
  src/components/Accordion.jsx → src/contants/capabilities.js
- `BorderAnimateButton Component` --semantically_similar_to--> `AnimatedButton Component`  [INFERRED] [semantically similar]
  src/components/BorderAnimateButton.jsx → src/components/AnimatedButton.jsx

## Communities (73 total, 29 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (8): blogData, BlogTimeline(), Hero(), data, Services(), whyData, servicesCard, sponsorLogos

### Community 1 - "Community 1"
Cohesion: 0.40
Nodes (4): hooks, PreToolUse, permissions, allow

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (21): AnimatedButton Component, ArticleBar Component, BlogTimeline Home Component, CommonHeading Component, FadeInSection Animation Component, Footer Component, FutureChanges Home Component, GetInTouch Contact Component (+13 more)

### Community 3 - "Community 3"
Cohesion: 0.16
Nodes (10): Awtomatig Brand Identity, Cyan Color Scheme, Geometric Isometric Box Shape, Awtomatig Logo, Vertical Striped Texture Pattern, links, HambargerIcon(), LinkDownArrowIcon() (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (31): About Us Page, Case Studies Listing Page, Single Case Study Page, Accordion Component, AnimatedButton Component, BackgroundAnimation Component, Benifits Component, BorderAnimateButton Component (+23 more)

### Community 5 - "Community 5"
Cohesion: 0.20
Nodes (8): inter, manrope, metadata, montserrat, pressStart2P, russoOne, silkscreen, sora

### Community 6 - "Community 6"
Cohesion: 0.31
Nodes (9): Dark Ambient Photography Style, Over-Ear Headphones Hero Image, Premium Over-Ear Headphones 3D Render, Digital Globe Network Card Image, Global Connectivity Visualization, Network Nodes and Connection Lines, Home Section Visual Assets, Laptop Device (Dark Aesthetic) (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.47
Nodes (6): Awtomatig Brand Banner, Awtomatig Brand Identity, Hexagonal Services Icon Grid, Awtomatig Origin Story Copy, Professional Businessman with Tablet Visual, Technology as Transformation Philosophy

### Community 8 - "Community 8"
Cohesion: 0.53
Nodes (6): Home Section Assets, Sora AI Brand Reference, Pixel Eye Icon Overlay, Sora AI Editorial Image, AI-Generated Female Figure with Headset, Editorial Tags: Sora, AI, Editorial

### Community 9 - "Community 9"
Cohesion: 0.60
Nodes (5): Blue Color Palette, Dark Background Design Theme, Animated Banner Hero Background, Floating Particle / Bokeh Effect, Wide Panoramic Banner Layout

### Community 10 - "Community 10"
Cohesion: 0.25
Nodes (5): OurStory(), stats, About Section, Animated Illustration Asset, Man Working Animation

### Community 11 - "Community 11"
Cohesion: 0.70
Nodes (5): Awtomatig Full Logo, Awtomatig Brand Color Palette (Cyan and White), Awtomatig Logo Design Style (Isometric 3D, Outline Typography), Awtomatig Geometric Icon Mark, Awtomatig Wordmark Text

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (5): Churassco Case Study Asset, Churassco Hero Section - Good Time Great Taste, Churassco Laptop Mockup, Churassco Navigation Bar, Churassco Restaurant Website

### Community 13 - "Community 13"
Cohesion: 0.50
Nodes (5): Cartoon Beaver Character, Awtomatig Brand Logo Asset, Chocolate Chip Cookie, Cookie Mascot Logo, Sign Held by Mascot

### Community 14 - "Community 14"
Cohesion: 0.50
Nodes (5): Laptop Device Mockup Presentation, Royal Safari Case Study, Royal Safari Tours Laptop Mockup, Royal Safari Tours Website, Travel and Tourism Web Design

### Community 15 - "Community 15"
Cohesion: 0.67
Nodes (4): Blue Cyan Gradient Background, Card Background Image, Home Page Card Section, Decorative Wave Line Pattern

### Community 16 - "Community 16"
Cohesion: 0.67
Nodes (4): Case Studies Assets, FA Business Case Study, FA Business Laptop Mockup, FA Business Website

### Community 18 - "Community 18"
Cohesion: 0.50
Nodes (4): Rainbow Color Gradient Palette (Blue, Purple, Magenta, Pink, Orange), Rainbow Polygonal Background Image, Home Section Visual Asset, Low-Poly Geometric Design Style

### Community 23 - "Community 23"
Cohesion: 1.00
Nodes (3): Digital Globe Network Visualization, Global Connectivity Concept, Home Section Hero Asset

### Community 25 - "Community 25"
Cohesion: 1.00
Nodes (3): Brand Founding Year Marker, Cyan Outline Typography Style, Since 2022 Text Logo Asset

### Community 62 - "Community 62"
Cohesion: 0.60
Nodes (3): generateMetadata(), generateStaticParams(), ServiceSubPage()

### Community 68 - "Community 68"
Cohesion: 0.06
Nodes (30): dependencies, gsap, motion, next, @next/third-parties, nodemailer, ogl, postprocessing (+22 more)

### Community 72 - "Community 72"
Cohesion: 0.50
Nodes (3): permissions, additionalDirectories, allow

### Community 73 - "Community 73"
Cohesion: 0.12
Nodes (17): BlogTimeline Component, CookiePopup Component, Footer Component, FutureChanges Component, GridAnimatedBg Component, GTMProvider Component, Header Component, Hero Component (+9 more)

## Knowledge Gaps
- **117 isolated node(s):** `allow`, `PreToolUse`, `whyData`, `allow`, `additionalDirectories` (+112 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **29 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GTM Push Event Library` connect `Community 2` to `Community 4`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `Home Page` connect `Community 73` to `Community 4`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `GetInTouch Contact Component` (e.g. with `GTMProvider Component` and `Hero Section Component`) actually correct?**
  _`GetInTouch Contact Component` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `allow`, `PreToolUse`, `whyData` to the rest of the system?**
  _117 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.054078014184397165 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.08172043010752689 - nodes in this community are weakly interconnected._
- **Should `Community 68` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._