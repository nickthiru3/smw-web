# Testing Guide

**Guide**: Unit tests, integration tests, and E2E tests

---

## Overview

This guide covers testing patterns for SvelteKit applications.

**Prerequisites:**

- ✅ Understanding of Vitest and Playwright
- ✅ Familiarity with testing best practices

---

## Testing Strategy

### Test Pyramid

```
        /\
       /  \  E2E (10%)
      /____\
     /      \
    / Integ. \ (30%)
   /__________\
  /            \
 /     Unit     \ (60%)
/________________\
```

### Test Types

1. **Unit Tests** - Test individual components and utilities (Vitest)
2. **Integration Tests** - Test API routes and data flows (Vitest)
3. **E2E Tests** - Test complete user flows (Playwright)

---

## Testing Patterns

_To be documented as we implement Story 001_

Topics to cover:

- Component testing with Vitest
- Testing Svelte stores
- Testing API routes
- Mocking backend services
- E2E testing with Playwright
- Testing authentication flows
- Testing forms and user interactions
- Accessibility testing

---

## Running Tests

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

---

## Story 001 Notes

**Tests implemented for Story 001**:

- _To be documented_

**See**: [Story 001 Implementation Log](./story-001-implementation-log.md)
