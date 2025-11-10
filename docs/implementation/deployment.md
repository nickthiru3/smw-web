# Deployment Guide

**Guide**: Deploying to AWS Amplify Hosting

---

## Overview

This guide covers deploying the SvelteKit application to AWS Amplify Hosting.

**Prerequisites:**

- ✅ AWS account with Amplify access
- ✅ Application built and tested
- ✅ Environment variables configured

---

## Deployment Process

_See existing deployment documentation at `docs/guides/deployment/sveltekit-amplify-hosting.md`_

Topics to expand:

- Amplify Hosting setup
- Build configuration
- Environment variables
- Custom domains
- Preview deployments
- Rollback procedures
- CI/CD integration

---

## Environment Configuration

### Update Environment Variables

```bash
npm run update-env
```

This script reads AWS resource information from `backend/outputs.json` and updates `.env.local`.

---

## Build & Deploy

### Local Build

```bash
npm run build
npm run preview
```

### Deploy to Amplify

_Deployment happens automatically via Amplify Hosting when pushing to Git_

---

## Post-Deployment Verification

### Check Deployment

1. Visit Amplify Console
2. Verify build succeeded
3. Test deployed application
4. Check CloudWatch logs

### Test Endpoints

```bash
curl https://your-app.amplifyapp.com/api/merchants?category=plastic
```

---

## Story 001 Notes

**Deployment for Story 001**:

- _To be documented_

**See**: [Story 001 Implementation Log](./story-001-implementation-log.md)
