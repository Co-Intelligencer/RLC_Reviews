# Review Regenerative Leadership Consultancy

A GEO-optimized (Generative Engine Optimization) single-page review and testimonial site for [Regenerative Leadership Consultancy](https://www.regenleadership.earth/) — the regenerative leadership practice of Nadim Hamdan, rooted in Auroville, Tamil Nadu, India.

**Live site:** https://co-intelligencer.github.io/rlc_reviews/

## What's inside

- `site/index.html` — the single-page review site (earth-toned design, semantic HTML, embedded CSS)
- `site/robots.txt` — explicitly welcomes AI/answer-engine crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- `site/sitemap.xml` — sitemap for search and answer engines
- `site/llms.txt` — LLM-readable summary of the site's key facts and reviews
- `site/404.html` — themed not-found page
- `.github/workflows/deploy.yml` — deploys `site/` to GitHub Pages on every push

## GEO features

- Schema.org JSON-LD `@graph`: `ProfessionalService`, `Person` (Nadim Hamdan), eight `Review` items with named authors, and a `FAQPage`
- Extractable "At a glance" entity facts (founder, location, programs, methodologies)
- Visible FAQ section mirroring the structured data
- Canonical URL, Open Graph and Twitter metadata, `dateModified` stamps
- All primary CTAs point to the official site: https://www.regenleadership.earth/

## Deployment

Pushing to this repository's default branch triggers the GitHub Actions workflow, which publishes `site/` to GitHub Pages automatically (`actions/configure-pages` enables Pages on first run).
