# TruePath AI

TruePath AI is a human-centered AI-powered youth self-discovery and development platform for students ages 10-18.

It is not a traditional career test. The product is designed to help students explore strengths, personality, emotional intelligence, learning styles, creativity, curiosity, communication, future possibilities, and personal growth without labels or deterministic paths.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` - start local development
- `npm run build` - create a production build
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript checks
- `npm run prisma:generate` - generate the Prisma client
- `npm run prisma:migrate` - create and apply a Prisma migration

## Architecture

```txt
src/
  app/                 App Router pages and route groups
  components/          Reusable UI, layout, and landing components
  config/              Product and site configuration
  features/            Domain feature boundaries
  lib/                 Shared utilities
  server/              Backend and database infrastructure
docs/                  Product, ethics, roadmap, vision, and brand docs
prisma/                PostgreSQL-ready schema
```

## Documentation

- [Vision](docs/vision.md)
- [Product](docs/product.md)
- [Ethics](docs/ethics.md)
- [AI Guidelines](docs/ai-guidelines.md)
- [Student Safety](docs/student-safety.md)
- [Consent Framework](docs/consent-framework.md)
- [Assessment Language Rules](docs/assessment-language-rules.md)
- [Roadmap](docs/roadmap.md)
- [Brand](docs/brand.md)

## Environment

Copy `.env.example` to `.env` and provide a PostgreSQL connection string before running Prisma migrations.

```bash
cp .env.example .env
npm run prisma:generate
```

## Product stance

TruePath AI should encourage exploration, normalize uncertainty, validate multiple talents, and keep student agency at the center of every experience.
