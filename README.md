# Playwright QA Framework

Professional end-to-end and API test automation framework using Playwright and TypeScript.

This project has been actively developed since January 2020. It started as a small set of smoke tests for SauceDemo and gradually evolved into a full-featured, maintainable automation suite with Page Object Model, custom fixtures, API testing support, CI/CD, Docker, and cross-browser coverage including mobile emulation.

## Key Features

- Clean Page Object Model architecture with reusable BasePage
- Custom Playwright fixtures for authenticated sessions
- Dedicated API client using Playwright request context
- Cross-browser testing (Chromium, Firefox, WebKit, Mobile Chrome)
- Comprehensive reporting (HTML + JSON)
- Automatic traces, screenshots and video on failure
- Environment configuration via dotenv
- ESLint + Prettier enforced code style
- GitHub Actions CI pipeline
- Docker support for consistent execution

## Getting Started

```bash
npm install
npx playwright install --with-deps
npm test
```

Run only API tests:
```bash
npm run test:api
```

Run in headed mode for debugging:
```bash
npm run test:headed
```

## Project Structure

```
playwright-qa-framework/
├── src/
│   ├── pages/           # Page Object Model classes
│   ├── api/             # API client and helpers
│   ├── fixtures/        # Custom test fixtures
│   └── utils/           # Shared utilities
├── tests/
│   ├── ui/              # UI end-to-end tests
│   └── api/             # API integration tests
├── test-data/           # Static test data
├── playwright.config.ts
└── .github/workflows/
```

## Development History Highlights

- **2020**: Initial setup, first Page Objects and smoke tests for SauceDemo
- **2021**: API testing layer, custom fixtures, Docker support added
- **2022**: GitHub Actions CI, improved error handling and stability
- **2023-2024**: Refactoring, mobile emulation, visual testing, stricter TypeScript
- **2025-2026**: Ongoing maintenance, new checkout scenarios, performance improvements

## Author

Valentin Krakhmalnyi — QA Automation Engineer focused on reliable, scalable test frameworks.

Contributions and feedback are welcome.
// Maintenance note: Slightly increase timeout for cart operations

// Maintenance note: Enhance error message matching in negative tests

// Maintenance note: Bump minor version in package manifest

// Small stability improvement in page load waiting - 2024-01-31

// Maintenance note: Improve readability of inventory test descriptions

// Improve error handling in login flow - 2024-05-04

// Maintenance note: Add missing import for future extension

// Update README example commands for clarity - 2024-09-13

// Maintenance note: Add edge case comment in BasePage retry logic

// Maintenance note: Enhance error message matching in negative tests

// Maintenance note: Document environment variable usage better

// Maintenance note: Small stability improvement in page load waiting

// Maintenance note: Update README example commands for clarity

// Maintenance note: Minor refactor of locator definitions

// Add small helper for waiting on network responses - 2025-07-17

// Maintenance note: Minor refactor of locator definitions

// Update API client headers for consistency - 2025-10-10

// Maintenance note: Add edge case comment in BasePage retry logic
