# Public Deployment Checklist

This checklist prepares TruePath AI for a public demo deployment. It does not authorize production student data collection.

## Current deployment scope

The deployable version is a public MVP demo for presentation and pilot-readiness conversations.

It includes:

- Landing page
- Emotional onboarding
- Front-end-only assessment prototype
- Reflection Summary Preview
- Demo-only student preview
- Demo-only school preview
- Commercial pitch page
- Privacy page
- Terms page
- Parent guide

It does not include:

- Authentication
- Database persistence
- AI integration
- Scoring
- Payments
- Subscriptions
- Production analytics
- Real student dashboards

## Environment readiness

Required for the current public demo:

- No runtime environment variables are required for public demo routes.

Present but not actively used by public demo routes:

- `DATABASE_URL` is documented for future Prisma/PostgreSQL work.
- Prisma generation runs during setup, but the current public demo does not write to the database.

## Build readiness

Before deployment:

- Run `npm run lint`
- Run `npm run typecheck`
- Run `npm run build`
- Confirm `/`, `/onboarding`, `/assessments`, `/student-dashboard`, `/school-dashboard`, `/pitch`, `/privacy`, `/terms`, and `/parent-guide` build successfully.

## Trust and safety readiness

- Demo notices clearly explain that previews are static examples.
- Assessment flow explains that no profile, score, AI analysis, or career recommendation is generated.
- Reflection prompts can be skipped.
- Parent-facing guidance is available.
- Privacy and terms pages explain current demo limitations.

## School readiness

- School preview uses mock/demo data only.
- School-facing content avoids individual student claims.
- Pilot page documentation identifies stakeholder review needs.
- FERPA-aware planning is documented before any school data collection.

## Parent readiness

- Parent guide explains what the demo is and is not.
- Parent guide explains how to talk about exploration safely.
- Consent expectations are described before production collection.

## Sponsor readiness

- Pitch page explains the problem, solution, pilot proposal, business model, sponsorship opportunity, and next steps.
- Demo flow is navigable from pitch CTAs.
- Demo limitations are explicit.

## Remaining public risks

- Legal pages are plain-language placeholders and should be reviewed by qualified counsel before production use.
- No production consent flow exists yet.
- No content moderation or safety escalation system exists yet.
- No accessibility audit has been completed yet.
- No analytics are configured, so public usage will not be measured.

## Deployment approval gate

Before deploying publicly, confirm:

1. The deployment is understood as demo-only.
2. No real student data should be entered for production purposes.
3. Legal/privacy language has been reviewed for public presentation use.
4. Vercel environment variables are intentionally minimal.
5. The latest production build passes.
