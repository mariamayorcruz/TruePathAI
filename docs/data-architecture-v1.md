# Data Architecture v1 (Conceptual)

**Scope.** Conceptual blueprint for **what kinds of information** a future TruePath AI platform might hold, **how those kinds relate ethically**, and **what must stay separated**—not production schemas, not Prisma models, not SQL tables, not wire protocols.

**Non-scope.** Implementing databases, migrating `prisma/schema.prisma`, authentication, authorization rules in code, AI pipelines, embeddings, analytic event streams as built artifacts, scoring engines, backups/DR runbooks—all deferred.

**Companion reads.** Developmental framing: [`truepath-intelligence-framework.md`](./truepath-intelligence-framework.md), [`question-bank-v1.md`](./question-bank-v1.md). Interpretation posture: [`response-mapping-system-v1.md`](./response-mapping-system-v1.md), [`longitudinal-growth-model-v1.md`](./longitudinal-growth-model-v1.md). Policy grounding: ethics, consent, student safety collateral in `docs/` as applicable.

---

## 1. Core entities (conceptual)

Entities below are **semantic categories**—“buckets of meaning” governance and engineering may later instantiate as tables, documents, encrypted blobs, or event streams. Names are illustrative, not finalized.

### Student (or learner record)

Anchors longitudinal continuity for a participating minor or young adult. Holds **identifiers and eligibility metadata** permissible under jurisdiction—implemented minimally later. Never collapses identity with interpretive summaries.

### Assessment session

A bounded administration window producing artifacts: keyed responses, optional reflections, metadata. Versioned against assessment **blueprint revision** abstractly—not “immutable truth.”

### Response

Atomic capture tied to session + item identity (conceptual)—includes modality (choice payload, short text draft, eventual structured fields). Stored as **literal submission**, not prematurely as judgment.

### Reflection

Higher-friction linguistic artifact optional or prompted; distinguished from terse forced-choice traces for interpretive weighting policy later—conceptually richer, higher safeguarding sensitivity tier.

### Dimension observation

A **provisional, time-stamped hypothesis** attaching evidence references (which responses/reflections) to **development dimensions** (curiosity, collaboration, resilience, …) plus **confidence band qualifiers** qualitative until scoring exists formally.

Observation records must label themselves as hypotheses, cite provenance slices, forbid destiny language—even if surfaced only internally initially.

### Pattern cluster (exploration cluster draft)

Bundled exploratory framing (environment ideas, thematic bridges) synthesized from corroborating weak signals—explicitly **non-exclusive**, ephemeral naming policy, dissolution clause pointer.

### Longitudinal observation

Cross-session rollup narrative structure **still bounded**: emerging/changing tendencies, polarization forks, hiatus annotations. Subordinate dimension observations but elevate temporal language carefully.

### Exploration pathway

A structured suggestion object: micro trials, scaffolding ideas, ecosystem pointers—**orthogonal** from trait identity tables. Paths expire, archive, supersede ethically without implying failure.

### Counselor note (human-held layer)

Privileged narrative or directive entered by accredited/trained facilitator when product supports it—distinct lineage from automated hypotheses; merges only through explicit audited linking rules later.

### Guardian insight (discretionary)

Explicit guardian-contributed interpretations or observations with consent granularity—never silent inference from household proxy data.

### School trend datum (aggregate)

Statistical or thematic rollup across cohorts preserving **non-reidentifiability thresholds** conceptually—not individual rows exposed upward.

Additional conceptual satellites (optional future formalization):

| Entity (optional) | Role |
|--------------------|------|
| **Item blueprint revision** | Versioned content & interpretive caveat metadata |
| **Safeguarding escalation record** | Out-of-band process anchor separate from exploratory analytics |

---

## 2. Separation of identity vs observations

**Identity layer (minimal factual anchoring)** answers: Who is enrolled, under what lawful basis, age banding context, accessibility accommodations declared, guardianship linkage where required.

**Observation layer** answers: Given consented stimuli, **what tentative developmental signals surfaced under explicit caveats.**

### Store deliberately

| Store | Rationale |
|-------|-----------|
| **Observations** | Transparent provenance-backed interpretive scaffolding |
| **Tendencies** | Time-qualified summaries (“recent recurring…”); revocable linguistic forms |
| **Exploration patterns** | Actionable bridging hypotheses without trait imprisonment |

### Avoid as durable system-of-record anchors

Fixed personality labels (“The Introvert”), occupational destiny tags, morally weighted identity nouns—even if alluring for UX shorthand.

**Architectural payoff.** Identity tables stay small, stable, lawful; observational subgraph churns intellectually richer yet **purgeable revisable**.

---

## 3. Assessment session structure

A conceptual session aggregates layered artifacts rather than collapsing to a single grade-like scalar.

### Question responses

Keyed selections, rationales constrained by item design. Literal capture precedes layered interpretation linkage.

### Reflection prompts

Potentially unstructured text with metadata: duration, abandonment flag, modality (speech-to-text hypothetical later). Highest compassion + safeguarding routing sensitivity.

### Contextual metadata (non-identifying where possible)

Illustrative categories (not mandates): administered setting (school lab vs home), time-of-day coarse bucket, linguistic variant, pacing anomalies (conceptual only). Avoid socio-economic leakage fields unless strictly necessary—see §9.

### Emotional indicators

Only **participant-supplied descriptors** or **structured non-clinical affect tags** purposely designed—not inferred physiology. No facial coding in this conceptual ethic unless separately governed.

### Exploration themes

Lightweight thematic tagging emergent session-level (“maker curiosity spike session”) provisional—dissolvable if contradictory later longitudinal waves appear.

Structural principle: preserve **fine-grained event sourcing mentality** conceptually—even if relational storage chosen—each slice keeps timestamp + blueprint version lineage.

---

## 4. Longitudinal structure

Sessions link via **participant identity continuity** respecting consent windows and pause states.

Conceptual chaining includes:

| Link type | Meaning |
|-----------|---------|
| **Sequential ordinal** | Time-ordered succession with gaps honored |
| **Phase transition markers** | Age band crossings or educational milestones declared—not auto-inferred prematurely |
| **Interpretation version bridges** | When construct definitions mutate, annotate comparability disclaimers longitudinal syntheses consumption-side |

Older sessions remain **immutable submissions** logically; retrospective reinterpretation attaches **new overlays** versus silent rewrite (transparency doctrine).

Disconnected periods flagged **hiatus neutrality**—no discipline undertone linguistics.

---

## 5. Pattern accumulation model

Multiple weak directional signals converge only through **explicit aggregation discipline**:

| Accumulation tier | Narrative allowable (conceptually) |
|-------------------|------------------------------------|
| Isolated echoes | Silence or exploratory internal note only externally |
| Recurrence same modality | Mild reinforcement language internal |
| Cross-modality coherence | Tentative strengthened observation drafts |
| Trans-context repetition | Permit cautiously bolder exploratory pathway suggestions—not essence claims |

Dissolving patterns permissible without stigma: exploratory clusters carry **expiration metadata** intentional.

Forbidden machine posture: deterministic conclusion engine awarding permanent badges.

Analog metaphor: accumulating translucent overlays on tracing paper—not carving stone tablets.

---

## 6. Human review layers

Progressive augmentation rather than dichotomy “manual vs automated.”

| Layer | Inputs | Outputs (conceptual) |
|-------|--------|-----------------------|
| **Draft synthesis** | Observations clusters | Confidence-bounded previews |
| **Counselor review** | Elevated tiers / volatility / safeguarding cues | Overrides, qualifiers, escalation |
| **Guardian contextual enrichment** | Consented caregiver notes optional | Harmonized exploratory framing—never overwriting youth voice unjustly |

Interaction rules aspirationally:

Counselors may **suppress** erroneous machine tendency drafts; annotate **risk**; elevate **safeguarding** without exposing minor detail broadly.

Humans annotate provenance—they do not silently mutate raw responses retrospectively absent exceptional legal process (outside MVP discussion).

Audit conceptual requirement: reviewer action type + rationale category + temporal stamp later—implementation withheld.

---

## 7. Privacy and consent boundaries (minors prioritized)

Conceptual planks:

| Plank | Description |
|-------|-------------|
| **Lawful bases clarity** | Distinguish educational, safeguarding, legitimate interest—jurisdiction layering |
| **Granular purposes** | Assessment improvement vs longitudinal guidance vs aggregated research segregation |
| **Guardian synergy not erasure** | Youth assent escalating with maturity where law demands partnership |
| **Visibility matrices** | Differential visibility: learner vs guardian vs counselor vs school aggregate—not uniform portal identical |
| **Sensitive upgrade path** | Any widened repurposing retriggers disclosure + opportunity to pause |
| **Breach containment planning** | High-sensitivity tiers encrypted conceptual posture even pre-schema |

Psychological humility: minimized psychological profiling creep beyond articulated developmental guidance mission.

Explicit boundary: safeguarding escalations bifurcate into processes **outside** exploratory marketing analytics conceptual zones.

---

## 8. School-level aggregation concepts

Goal: illuminate climate / thematic opportunity **without resurrecting individuals**.

Mechanisms conceptual only:

| Approach | Benefit | Risk guarded |
|---------|---------|---------------|
| **K-anonymity / threshold gating conceptual** | Prevents slender slice identification | Statistical noise injection policy later |
| **Thematic clustering at cohort granularity** | Actionable programmatic reflection | Narrative laundering back to individuals forbidden |
| **Temporal smoothing** | Reduces linkage attacks across rare events | Dilution honesty—communicated externally appropriately |

District views never receive line-level observation exports by default ethically.

Aggregate metrics carry **confidence-of-cohort disclaimers**.

---

## 9. Data minimization philosophy

Collect only artifact classes whose absence would **materially diminish** ethically scoped developmental guidance fidelity.

Likely minimized or excluded early unless compelling:

| Avoid / defer | Reason |
|---------------|--------|
| Precision geolocation habitual | Rarely proportional |
| Household income inference proxies disguised enrichment | Equity & dignity risk |
| Continuous device sensor streams unrelated | Surveillance creep |
| Non-educational social graph ingestion | Manifest disproportionality |

Where uncertainty exists bias toward **defer + justify later** ledger.

Operational mantra: store **answers to questions consciously asked**, not latent behavioral exhaust opportunistically scraped.

Retention horizons align purpose-specific lifecycles (conceptual placeholders): raw reflection text perhaps shorter-lived than anonymized thematic aggregates—or vice versa dependent ethical study—not decided here technically.

---

## 10. AI interaction boundaries (future-facing)

Assume future retrieval-augmented or generative adjuncts—not defined now technologically.

Allowed conceptual access strata (examples—not exhaustive policy):

| May access under tight governance drafts | Protected / walled off |
|-------------------------------------------|------------------------|
| Anonymized or pseudonymised session excerpts with purpose binding | Raw cross-student juxtaposition devoid of segregation |
| Blueprint item text + rationale fields | Inference of household economics |
| Observation drafts needing language softening audit | Automatically surfacing safeguarding content uncontrolled |
| Aggregated thematic statistics | Counsellor privileged notes unrestricted |

Mandatory principles even pre-implementation:

| Principle | Application |
|-----------|---------------|
| **Least privilege ephemeral context** | No eternal model memory of identifiable minors casually |
| **Human red-team surfaces** | High-risk summaries blocked pending review tier |
| **No covert behavioral optimization** unrelated to articulated educational mission |
| **Output provenance tethering conceptually** | AI narrative must cite internal observation lineage categories—not hallucinated traits |

Treat AI as linguistic & clustering assistant—not oracle of essence.

---

## 11. Ethical storage principles

| Principle | Storage posture |
|-----------|----------------|
| **Reversibility** | Higher-level syntheses detachable without destroying immutable raw factual submissions unduly unjustly—in policy balance with retention law |
| **Transparency** | Versioned constructs; participant-readable summary categories where age-appropriate |
| **Explainability** | Observation objects carry evidence pointers—even if abbreviated youth-facing versus internal verbose |
| **Deletion rights** | Erasure choreography honoring jurisdictional interplay; cascading conceptual plan—not SQL here |
| **Developmental humility** | Schema tolerant of reinterpretation multiplicity; forbids hardness of prematurely normalized labels |

Integrity without rigidity.

---

## 12. Future implementation considerations (conceptual only)

Discussed—not decided.

### Relational vs event-based storage

Hybrid conceptual attractiveness:

| Style | Strength | Liability |
|-------|----------|-----------|
| **Relational cores** | Mature querying for sessions/responses linkage | Oversimplified if interpretive rewriting mutates canonical rows illicitly |
| **Event sourcing append logs** | Auditable chronological truth of submissions/changes overlays | Complexity operational overhead |

Potential pattern: relational anchor with **immutable event log slice** capturing submission facts; interpretive overlays stored as succeeding events or satellite tables versioned.

### Versioning

Blueprints (items/stems/options) evolve independently of responses → link via **immutable reference ids + revision tags** logically.

Interpretation pipelines version distinctly—prevent silent retroactive toxicity.

### Auditability

Separate actor dimension (automated synthesis job vs human reviewer id abstract) stamping conceptual actions—not building auth tables yet.

### Interpretation traceability

Graph aspiration: Observation node → derives_from edges → Evidence nodes → session spine. Helps explainability discipline.

Traversability supports ethical deletion impact analysis simulation later.

### Session evolution

Graceful degradation if items retired: historical sessions immutable; regenerated summaries carry **explicit outdated-item caveats.**

---

## Non-goals (reiteration)

Production DDL, REST shapes, GDPR technical measures fine print, SOC2 control mapping, encryption key hierarchies—all later companion engineering/security documents.

---

## Architectural mantra

**Store footsteps, not statues.** Each recorded element should remain plausible to revisit, dissolve, contextualize anew—matching the longitudinal humility that human adolescence ethically demands.

---

## Open architectural questions

1. Pseudonym rotation cadence balancing longitudinal utility vs re-identification risk in multi-institution federation scenarios.  
2. Optimal separation of exploratory cluster lifecycle store vs ephemeral cache semantics for narrative freshness experiments.  
3. Cross-border data residency interplay with guardian visibility matrices.  

Track answers without premature schema crystallization.
