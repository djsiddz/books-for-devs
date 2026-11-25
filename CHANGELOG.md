# Changelog

## [0.30.0] - 2026-11-25

### Security
- Resolved 2 advisories in `astro` (GHSA-r3h5-4585-7x3w, GHSA-mh32-jxcr-mh9f) by upgrading to 7.4.13; `pnpm audit` now reports no known vulnerabilities

### Upgraded
- `astro` 7.4.2 → 7.4.13
- `@astrojs/mdx` 8.1.1 → 8.1.6
- `tailwindcss` 4.3.3 → 4.3.5
- `@tailwindcss/vite` 4.3.3 → 4.3.5
- `typescript` 6.0.3 → 7.0.2

### Verified
- `pnpm build` succeeds with no warnings
- `astro sync` and `tsc --noEmit` pass with no type errors

## [0.28.0] - 2026-06-29

### Upgraded
- `astro` 6.3.8 → 7.0.3
- `@astrojs/mdx` 5.0.6 → 7.0.0
- `typescript` 5.9.3 → 6.0.3
- `tailwindcss` 4.3.0 → 4.3.1
- `@tailwindcss/vite` 4.3.0 → 4.3.1

### Added
- `sharp` 0.35.2 as an explicit dependency — enables real WebP image optimization at build time (book covers now compressed up to 87%)

### Fixed
- Removed `passthroughImageService()` workaround from `astro.config.mjs` now that `sharp` is installed directly
- Favicon now correctly uses `favicon.png` (generated from profile photo) instead of incorrectly referencing `profile-photo-siddhesh.jpg` with SVG MIME type
- Deleted placeholder `favicon.svg`

## [0.27.0] - 2026-05-28

### Changed
- Upgraded dependencies; bumped version

## [0.26.0]

### Fixed
- Fixed MissingSharp error using no-op passthrough image service

## [0.25.0]

### Changed
- Upgraded to Astro v6; migrated Content Collections to Content Layer API; image performance improvements
