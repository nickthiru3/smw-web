# Frontend Implementation Guide

**Project**: SvelteKit Web Application  
**Stack**: SvelteKit 2.x + Svelte 5 + TypeScript + TailwindCSS

---

## Overview

This guide covers how to implement frontend features for the Super Deals web application, including UI components, BFF API routes, and state management.

**Prerequisites:**

- Story card completed through Phase 3 (API Design & Contracts)
- UI mockups available at `docs/project/specs/stories/[story]/mockups/`
- API specification available at `docs/project/specs/stories/[story]/api.yml`

---

## Quick Start

### 1. Review the Story Artifacts

Before implementing, ensure you have:

- ✅ Story card with acceptance criteria
- ✅ UI mockups for all screens and states
- ✅ Sequence diagrams showing UI ↔ BFF ↔ Backend flows
- ✅ Actions & Queries document (CQS separation)
- ✅ OpenAPI specification for BFF endpoints

**Location**: `docs/project/specs/stories/[actor]/[story-name]/`

### 2. Understand the Project Structure

See [Architecture Overview](../architecture/overview.md) for:

- SvelteKit routing conventions
- BFF layer architecture
- State management patterns
- Authentication flow

### 3. Implementation Workflow

Follow these guides in order:

1. **[Adding Routes & Pages](./adding-routes.md)** - Create UI pages and components
2. **[BFF API Routes](./bff-api-routes.md)** - Implement SvelteKit API routes (BFF layer)
3. **[State Management](./state-management.md)** - Svelte stores and runes patterns
4. **[Authentication](./authentication.md)** - AWS Amplify integration
5. **[Testing](./testing.md)** - Unit, integration, and E2E tests
6. **[Deployment](./deployment.md)** - AWS Amplify hosting

---

## Implementation Guides

### Core Implementation

- **[Adding Routes & Pages](./adding-routes.md)** - SvelteKit routing, page components, layouts
- **[BFF API Routes](./bff-api-routes.md)** - API routes, backend orchestration, response transformation
- **[State Management](./state-management.md)** - Svelte stores, runes, reactive patterns

### Supporting Topics

- **[Authentication](./authentication.md)** - AWS Amplify, Cognito integration, session management
- **[Styling](./styling.md)** - TailwindCSS, component styling, responsive design
- **[Testing](./testing.md)** - Vitest, Playwright, testing strategies
- **[Deployment](./deployment.md)** - AWS Amplify hosting, environment configuration

---

## Project Structure

```
web/
├── src/
│   ├── routes/                   # SvelteKit routes
│   │   ├── +layout.svelte        # Root layout
│   │   ├── +layout.server.js     # Root layout server load
│   │   ├── +page.svelte          # Home page
│   │   ├── merchants/            # Merchant-related pages
│   │   │   ├── +page.svelte      # Merchant listing
│   │   │   ├── [id]/             # Dynamic merchant detail
│   │   │   │   └── +page.svelte
│   │   │   └── components/       # Merchant-specific components
│   │   ├── api/                  # BFF API routes
│   │   │   ├── merchants/
│   │   │   │   └── +server.ts    # GET /api/merchants
│   │   │   └── auth/
│   │   │       └── +server.ts    # Auth endpoints
│   │   └── accounts/             # Account management pages
│   ├── lib/                      # Shared code
│   │   ├── components/           # Reusable UI components
│   │   ├── stores/               # Svelte stores
│   │   ├── utils/                # Utility functions
│   │   ├── types/                # TypeScript types
│   │   └── server/               # Server-side utilities
│   │       ├── auth.ts           # Auth utilities
│   │       ├── microservices/    # Backend service clients
│   │       └── validation.ts     # Request validation
│   ├── app.html                  # HTML template
│   └── app.css                   # Global styles
├── static/                       # Static assets
├── tests/                        # Unit tests
├── e2e/                          # E2E tests (Playwright)
├── docs/                         # Documentation
│   ├── implementation/           # This guide
│   └── architecture/             # Architecture docs
├── svelte.config.js              # SvelteKit config
├── vite.config.ts                # Vite config
└── package.json
```

---

## Key Concepts

### 1. SvelteKit Routing

SvelteKit uses file-based routing:

- `+page.svelte` - Page component
- `+page.ts` - Page load function (client-side)
- `+page.server.ts` - Page load function (server-side)
- `+server.ts` - API endpoint
- `+layout.svelte` - Layout component
- `+error.svelte` - Error page

### 2. BFF (Backend for Frontend) Layer

The BFF layer is implemented using SvelteKit API routes (`+server.ts`):

- **Orchestration** - Calls multiple backend microservices
- **Transformation** - Shapes responses for frontend needs
- **Authentication** - Validates JWT tokens, manages sessions
- **Caching** - Implements response caching where appropriate

### 3. State Management

State management patterns:

- **Svelte Stores** - Global reactive state
- **Svelte 5 Runes** - Component-level reactive state
- **Page Data** - Server-loaded data via `load` functions
- **Form Actions** - Server-side form handling

### 4. Authentication

Authentication flow:

- **AWS Amplify** - Client-side auth library
- **Cognito** - User pool and identity pool
- **JWT Tokens** - Stored in cookies, validated server-side
- **Session Management** - Handled by SvelteKit hooks

---

## Development Workflow

### Typical Story Implementation

1. **Set up local environment**

   ```bash
   npm install
   npm run dev
   ```

2. **Implement UI pages**
   - Create page components in `src/routes/`
   - Implement layouts and nested routes
   - Add responsive styling with TailwindCSS
   - Handle loading, error, and empty states

3. **Implement BFF API routes**
   - Create API routes in `src/routes/api/`
   - Implement request validation
   - Call backend microservices
   - Transform responses for frontend

4. **Add state management**
   - Create Svelte stores for global state
   - Use runes for component state
   - Implement reactive patterns

5. **Add authentication**
   - Protect routes with auth guards
   - Implement login/logout flows
   - Handle token refresh

6. **Write tests**
   - Unit tests for components and utilities
   - Integration tests for API routes
   - E2E tests for user flows

7. **Deploy to dev environment**
   ```bash
   npm run build
   # Deploy via AWS Amplify
   ```

---

## Best Practices

### Component Design

- ✅ **Single Responsibility** - Each component does one thing well
- ✅ **Composition** - Build complex UIs from simple components
- ✅ **Props vs Stores** - Use props for local data, stores for global state
- ✅ **Accessibility** - Add ARIA labels, keyboard navigation

### Performance

- ✅ **Code Splitting** - Use dynamic imports for large components
- ✅ **Image Optimization** - Use optimized formats, lazy loading
- ✅ **Caching** - Cache API responses where appropriate
- ✅ **Bundle Size** - Keep dependencies minimal

### Security

- ✅ **Input Validation** - Validate all user inputs
- ✅ **XSS Prevention** - Sanitize user-generated content
- ✅ **CSRF Protection** - Use SvelteKit's built-in CSRF protection
- ✅ **Secure Cookies** - Use httpOnly, secure, sameSite flags

### Error Handling

- ✅ **Error Boundaries** - Use `+error.svelte` for error pages
- ✅ **User-Friendly Messages** - Show helpful error messages
- ✅ **Logging** - Log errors for debugging
- ✅ **Fallbacks** - Provide fallback UI for failures

---

## Troubleshooting

### Common Issues

**Issue**: Hot reload not working

- **Solution**: Check Vite config, restart dev server

**Issue**: API route returns 404

- **Solution**: Verify file naming (`+server.ts`), check route path

**Issue**: Authentication not working

- **Solution**: Check Amplify config, verify Cognito User Pool ID

**Issue**: Build fails with type errors

- **Solution**: Run `npm run check` to see TypeScript errors

---

## Getting Help

- **Central Guides**: See `docs/guides/` for cross-cutting concerns
- **Architecture**: See `docs/architecture/overview.md` for project structure
- **SvelteKit Docs**: https://kit.svelte.dev/docs
- **Svelte 5 Docs**: https://svelte.dev/docs/svelte/overview

---

## Story 001 Implementation Log

As we implement Story 001 (Browse Providers by Waste Category), we'll document:

- UI components created
- BFF API routes implemented
- State management patterns used
- Challenges encountered
- Solutions implemented

**See**: [Story 001 Implementation Log](./story-001-implementation-log.md)
