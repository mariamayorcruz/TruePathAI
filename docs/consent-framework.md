# Consent Framework

TruePath AI serves minors, so consent, privacy, and data handling must be product foundations rather than late compliance additions.

This document is not legal advice. It defines the product philosophy and implementation direction that should be reviewed with qualified legal counsel before launch.

## Parent and guardian consent requirements

Before collecting personal information from students under applicable age thresholds, TruePath AI should establish:

- Clear parent or guardian consent flows
- Transparent explanation of what data is collected
- Clear purpose limitation for student data
- Parent or guardian access and deletion request pathways
- Age-appropriate student assent language
- Separate consent for optional AI-generated reflections if introduced later

## Student privacy strategy

Student privacy should follow these defaults:

- Collect the minimum data needed for the experience.
- Avoid collecting sensitive information unless essential and reviewed.
- Store reflective content with high care.
- Do not sell student data.
- Do not use student data for advertising profiles.
- Do not expose individual student insights to schools unless the sharing model is explicit, consented, and ethically justified.

## COPPA considerations

For students under 13 in the United States, COPPA may require verifiable parental consent before collecting personal information.

Product implications:

- Age-aware onboarding is required before account creation.
- Under-13 flows should be designed around guardian involvement.
- Privacy notices must be understandable and specific.
- Data deletion and parent review processes must exist before launch.

## FERPA considerations

When TruePath AI is used by schools in the United States, FERPA may apply depending on how student education records are created, stored, or shared.

Product implications:

- School deployments need organization-level agreements and role controls.
- Individual student reflections should not be casually exposed as school analytics.
- Access logs and data sharing boundaries should be planned before dashboards.
- Aggregate reporting should avoid re-identification risk.

## Data handling philosophy

TruePath AI should treat student data as entrusted information, not growth fuel.

Data handling should be:

- Purpose-limited
- Minimal
- Explainable
- Deletable where legally and operationally appropriate
- Protected by role-based access
- Auditable for sensitive actions

## Before implementing auth or dashboards

Resolve these product decisions first:

1. What age gates exist?
2. What requires guardian consent?
3. What can a student keep private?
4. What can a guardian see?
5. What can a school see?
6. What is aggregated versus individual?
7. How are deletion and export requests handled?
8. How are AI-generated outputs stored, reviewed, or removed?
