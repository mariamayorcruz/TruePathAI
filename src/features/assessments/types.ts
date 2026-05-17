/** Age-aware reflection mode identifiers. */
export type AssessmentModeId = "discovery" | "potential" | "direction";

/** Locale for bilingual assessment prototype copy. */
export type AssessmentLocale = "en" | "es";

/**
 * Lightweight metadata tied to structured answer options (not reflections).
 * Used locally to assemble exploration-theme previews — not persisted, not scoring.
 */
export type AnswerInterpretationMeta = {
  /** Stable identifiers for tentative observation echoes (analytics-free). */
  observationTags?: readonly string[];
  /** Human-readable dimension cues aligned with assessment item dimension fields. */
  relatedDimensions?: readonly string[];
  /**
   * Keys into interpretation catalog bundles (environments/skills/display labels).
   */
  explorationThemes?: readonly ExplorationThemeKey[];
  /**
   * Marks qualitatively “wide” exploratory picks that can signal multi-direction curiosity
   * when combined with others — still not a trait label.
   */
  spreadSignal?: boolean;
};

export type ExplorationThemeKey =
  | "asking-and-wondering"
  | "making-and-testing"
  | "organizing-and-planning"
  | "learning-through-examples"
  | "learning-by-doing"
  | "talking-it-through"
  | "thinking-quietly-first"
  | "building-and-creating"
  | "connecting-with-people"
  | "clarifying-problems-together"
  | "supporting-the-group"
  | "experimenting-quickly"
  | "solo-focus-environment"
  | "partner-depth-environment"
  | "group-energy-environment"
  | "balanced-solo-and-together-environment"
  | "ideas-and-imagination"
  | "people-and-communication-strength"
  | "systems-and-analysis-strength"
  | "research-to-learn-paths"
  | "hands-on-micro-experience"
  | "dialogue-with-trusted-voices"
  | "growth-in-communication-skills"
  | "growth-in-creative-problem-solving"
  | "growth-in-analytical-technical-skills"
  | "growth-in-leadership-and-collaboration"
  | "contributing-as-a-guide"
  | "contributing-through-craft"
  | "bridging-ideas-and-people";

export type ResolvedAnswerMetaSnapshot = {
  questionId: string;
  answerId: string;
  observationTags: string[];
  explorationThemes: ExplorationThemeKey[];
  spreadSignal: boolean;
};

export type RuntimeInterpretationAccumulator = {
  resolved: ResolvedAnswerMetaSnapshot[];
  themeFrequency: Map<ExplorationThemeKey, number>;
  tagFrequency: Map<string, number>;
  spreadSignalCount: number;
  skippedReflection: boolean;
  answeredChoiceQuestions: number;
};

export type RuntimeExplorationPreview = {
  accumulator: RuntimeInterpretationAccumulator;
  showDiversePathsNotice: boolean;
  /** Stable theme keys surfaced in UX order — not ranks. */
  orderedThemes: ExplorationThemeKey[];
  environments: string[];
  skillsToPractice: string[];
  reflectionQuestions: string[];
};

/** UI strings keyed by locale for interpretation surfaces. */
export type InterpretationMessages = ReturnType<typeof interpretationMessages>;

export function interpretationMessages(locale: AssessmentLocale) {
  const isEs = locale === "es";

  return {
    locale,
    exploreEyebrow: isEs
      ? "Vista previa de temas exploratorios"
      : "Exploration themes preview",

    headline: isEs
      ? "Lo que tus respuestas podrían sugerir, por ahora"
      : "What your responses may suggest, for now",

    assessmentFrameContext: isEs
      ? "Prototipo de reflexión guiada — respuestas solo en este navegador"
      : "Reflective assessment foundation",

    notLabelNotice: isEs
      ? "Esto no es una etiqueta ni un resultado definitivo."
      : "This is not a label or final result.",

    localDisclaimer: isEs
      ? "Esta vista previa se genera localmente solo a partir de tus respuestas actuales. No se guarda, no está generada con IA y no es un perfil final."
      : "This preview is generated locally from your current responses only. It is not stored, not AI-generated, and not a final profile.",

    diverseNotice: isEs
      ? "Tus respuestas muestran varias direcciones. Eso es normal. Explorar puede incluir más de una posibilidad."
      : "Your responses show a few different directions. That is normal. Exploration can include more than one possibility.",

    possibleThemesTitle: isEs ? "Temas que podrían valer la pena notar" : "Possible themes worth noticing",

    themesMaySuggest: isEs
      ? "Tus respuestas podrían sugerir un interés inicial en estos temas — como pistas exploratorias, no como resultado final:"
      : "Your responses may suggest an early interest in these themes—as exploratory clues, not a final takeaway:",

    environmentsTitle: isEs ? "Ambientes que podrías querer explorar" : "Environments you may want to explore",

    environmentsIntro: isEs
      ? "Un área que podría valer la pena explorar es probar estos entornos de apoyo (si están disponibles para ti):"
      : "One area worth exploring is trying these supportive settings (when they’re available to you):",

    skillsTitle: isEs ? "Habilidades que podrías disfrutar practicando" : "Skills you may enjoy practicing",

    skillsIntro: isEs
      ? "Podrías disfrutar practicando pequeños proyectos cercanos a habilidades como estas:"
      : "You might enjoy trying small practice projects close to skills like these:",

    reflectionTitle: isEs ? "Preguntas reflexivas para considerar después" : "Reflection questions to consider next",

    reflectionIntro: isEs
      ? "Estas preguntas no califican a nadie — solo sirven para seguir explorando:"
      : "These questions don’t score anyone—they’re simply for gentle follow-up curiosity:",

    optionalReflectionBanner: isEs
      ? "Este prompt es opcional. Si se siente demasiado personal o no sabes qué escribir ahora, puedes omitirlo."
      : "This prompt is optional. If it feels too personal or you are not sure what to say, you can skip it for now.",

    tonePrefixByMode: {
      discovery: isEs
        ? "Este modo se anima desde la curiosidad, el juego, el aprendizaje, la creatividad y la conciencia emocional sin apresurarte a definirte."
        : "This mode cheers on curiosity, play, creativity, learning, and emotional awareness—without rushing you to define yourself.",
      potential: isEs
        ? "Aquí destacamos ambientes donde piensas con claridad relativa; colaboraciones con espacio ético para la duda abiertamente; rutas próximas y exploración — sin encasillar."
        : "Lean toward noticing which studying environments nourish you most, reciprocal collaboration together, unpacking fuzzy challenges without shame, plus near-term pathways—all without pigeonholing.",
      direction: isEs
        ? "Aquí exploramos rutas cercanas al paso siguiente tras preparatoria, práctica de habilidades, contribución y opciones futuras sin promesas rígidas."
        : "Here we emphasize near-term pathway ecosystems after high school—skills practice, leadership flavors, and future exploration—without rigid promises.",
    } satisfies Record<AssessmentModeId, string>,

    modeLabel: isEs ? "Modo" : "Mode",
    ageLabelPrefix: isEs ? "Edades" : "Ages",

    reflectionsLabel: isEs ? "Reflexiones" : "Reflections",
    reflectionsHelper: isEs
      ? "Solo en el estado local de esta página por ahora."
      : "Stored only in this page state for now.",

    reflectionProgress: (answered: number, total: number) =>
      isEs ? `${answered} de ${total}` : `${answered} of ${total}`,
    linkStudent: isEs ? "Ver vista previa del estudiante" : "View Student Preview",
    linkSchool: isEs ? "Explorar vista de escuela" : "Explore School View",
    linkAgain: isEs ? "Empezar de nuevo" : "Start Again",

    emptyThemesFallbackTitle: isEs ? "Espacio abierto para explorar" : "Wide open room to explore",
    emptyThemesFallbackBody: isEs
      ? "Tus respuestas pueden sugerir un camino sutil todavía tomando forma. Explorar despacio sigue siendo valioso."
      : "Your responses may suggest your path is still quietly forming—slow exploration still counts.",

    emptyListFallbackBullet: isEs
      ? "Mantén notas cotidianas de lo que despierta curiosidad, sin clasificarte."
      : "Keep a light journal of sparks of curiosity—no need to categorize yourself.",

    fallbackEnvironmentIdeas: isEs
      ? [
          "Un lugar tranquilo donde puedas probar algo pequeño con permiso para equivocarte",
          "Un club o taller abierto donde pruebas cortas bienvenidas sean parte del ritmo",
        ]
      : [
          "A calm spot where small experiments—even messy ones—are welcome",
          "A club or studio where gentle try-outs are baked into how people work together",
        ],

    fallbackSkillIdeas: isEs
      ? [
          "Escribir tres preguntas que te gustaría investigar después de clase",
          "Explicarle a alguien de confianza una idea nueva con palabras muy sencillas",
        ]
      : [
          "Write three questions you would like to chase after school",
          "Explain a fresh idea aloud to someone you trust in simple words first",
        ],

    remindersStrip: summaryPreviewReminder(locale),

    /** Visual card button microcopy parity for Spanish route (optional parity pass — keep here if reused). */
    chooseLabel: isEs ? "Elegir" : "Choose",
    selectedLabel: isEs ? "Seleccionado" : "Selected",

    introContinueCta: isEs ? "Elegir modo de reflexión" : "Choose assessment mode",

    prototypePanelTitle: isEs ? "Qué hace este prototipo" : "What this prototype does",
    prototypePanelBullets: isEs
      ? [
          "Hace preguntas reflexivas y amables para tu edad.",
          "Guarda las respuestas solo en el navegador (estado local de la página).",
          "Evita perfiles cerrados, puntajes permanentes y recomendaciones fijas de profesión.",
        ]
      : [
          "Asks reflective, youth-friendly questions.",
          "Keeps answers only in local page state.",
          "Avoids profiles, scores, labels, and career recommendations.",
        ],

    modeSelectionEyebrow: isEs ? "Modos según tu edad" : "Age-aware modes",
    modeSelectionTitle: isEs
      ? "Elige el modo de reflexión que encaje con tu edad y momento."
      : "Choose the reflection mode that fits your age and moment.",
    modeSelectionDescription: isEs
      ? "El modo moldea las preguntas que verás. No te etiqueta, no te clasifica ni crea un resultado cerrado."
      : "The mode shapes the questions you see. It does not label you, rank you, or create a result.",
    modesListAriaLabel: isEs
      ? "Modos de reflexión según tu edad"
      : "Age-aware assessment modes",

    modeCardAgesPrefix: isEs ? "Edades" : "Ages",
    modeCardSelected: isEs ? "Seleccionado" : "Selected",
    modeCardChoosePrompt: isEs ? "Elige este modo" : "Choose this mode",

    controlBack: isEs ? "Atrás" : "Back",
    controlSkip: isEs ? "Omitir por ahora" : "Skip for now",
    controlContinue: isEs ? "Continuar" : "Continue",
    controlPreviewReflections: isEs ? "Ver vista previa reflexiva" : "Preview reflections",

    progressQuestionPhrase: (current: number, total: number) =>
      isEs
        ? `Pregunta ${current} de ${total}`
        : `Question ${current} of ${total}`,
    progressStepHint: isEs
      ? "Progreso de pasos guiados · no evalúa calificaciones ni talentos cerrados."
      : "Progress through prompts only · not grades or sealed talent scores.",

    reflectionResponseSrOnly: isEs ? "Respuesta de reflexión" : "Reflection response",

    answerChoicesAriaLabel: isEs ? "Opciones de respuesta" : "Answer choices",
    visualAnswerChoicesAriaLabel: isEs
      ? "Opciones de respuesta con tarjetas visuales"
      : "Visual-style answer choices",

    demoNoticeAriaLabel: isEs ? "Aviso de demostración" : "Demo notice",
  };
}

/** Static reminder replacing legacy summaryPreview.reminder semantics for bilingual routing. */
function summaryPreviewReminder(locale: AssessmentLocale): string {
  if (locale === "es") {
    return (
      "No existe un puntaje ni un perfil con IA elaborado aquí." +
      " Las vistas orientativas de estudiante y escuela siguen siendo demos estáticas y educativas."
    );
  }

  return (
    "No profile, score, AI analysis, or career recommendation has been created from these answers." +
    " The student and school previews remain static demonstration examples."
  );
}
