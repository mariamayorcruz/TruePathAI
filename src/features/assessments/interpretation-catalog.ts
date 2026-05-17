import type { AssessmentLocale, AssessmentModeId, ExplorationThemeKey } from "./types";

type LocalizedBundles = Record<
  ExplorationThemeKey,
  {
    label: Record<AssessmentLocale, string>;
    environments: Record<AssessmentLocale, readonly string[]>;
    skills: Record<AssessmentLocale, readonly string[]>;
  }
>;

/**
 * Modular catalog bridging abstract theme keys → localized exploratory lines.
 * Not scoring weights — illustrative suggestions only.
 */
export const explorationThemeCatalog: LocalizedBundles = {
  "asking-and-wondering": {
    label: {
      en: "Curiosity fueled by asking and wondering aloud",
      es: "Curiosidad que se mueve cuando haces preguntas y exploras preguntas en voz alta",
    },
    environments: {
      en: [
        "Library corners with question-friendly adults nearby",
        "Community science or maker fairs with room to roam",
      ],
      es: [
        "Rincón de biblioteca con adultos abiertos a preguntas",
        "Ferias científicas o de creación donde puedas moverte y observar",
      ],
    },
    skills: {
      en: ["Noticing mysteries", "Formulating respectful questions"],
      es: ["Reconocer misterios del día a día", "Formular preguntas respetuosas"],
    },
  },

  "making-and-testing": {
    label: {
      en: "Learning by tinkering and quick tests",
      es: "Aprender probando cosas rápidamente con las manos o prototipos",
    },
    environments: {
      en: ["Flexible workshop spaces", "Quiet tables with scraps to recombine"],
      es: ["Taller flexible con materiales", "Espacio tranquilo con restos útiles para combinar"],
    },
    skills: {
      en: ["Rapid prototyping with cheap materials", "Testing small ideas safely"],
      es: ["Prototipar rápido con materiales sencillos", "Probar ideas pequeñas con seguridad"],
    },
  },

  "organizing-and-planning": {
    label: {
      en: "Clarity through sorting steps and spotting order",
      es: "Claridad ordenando pasos y viendo cómo encajan las piezas",
    },
    environments: {
      en: ["Collaborative kanban-ish walls without pressure", "Calm desks with timelines sketched visibly"],
      es: ["Pizarrones compartidos con pasos visibles sin presión", "Escritos con tiempo visible y calma"],
    },
    skills: {
      en: ["Chunking messy goals", "Co-creating reachable mini-milestones"],
      es: ["Dividir metas grandes en partes claras", "Co-crear hitos mini alcanzables"],
    },
  },

  "learning-through-examples": {
    label: {
      en: "Understanding through seeing models first",
      es: "Entender mejor cuando ves modelos antes de empezar",
    },
    environments: {
      en: ["Demonstration-heavy clubs", "Mentor checkpoints with worked samples"],
      es: ["Clubes con demos guiadas", "Reuniones con mentoría y muestras modeladas"],
    },
    skills: {
      en: ["Comparing variants before choosing", "Reverse-engineering what works visually"],
      es: ["Comparar opciones antes de elegir", "Descifrar cómo funciona algo con observación cercana"],
    },
  },

  "learning-by-doing": {
    label: {
      en: "Flow when you plunge in and revise as you learn",
      es: "Se siente mejor cuando empiezas a hacer y corriges sobre la marcha",
    },
    environments: {
      en: ["Short labs without heavy perfection rules", "Co-op tasks with explicit revision passes"],
      es: ["Labs cortos donde no exijan la perfección al inicio", "Tareas donde se esperen revisiones conscientes"],
    },
    skills: {
      en: ["Iterative loops instead of giant leaps", "Requesting checkpoints early"],
      es: ["Ciclos de mejora en lugar de grandes saltos", "Pedir revisiones rápidas al inicio"],
    },
  },

  "talking-it-through": {
    label: {
      en: "Making sense collaboratively through spoken processing",
      es: "Ordenar las ideas mejor hablando con alguien de confianza",
    },
    environments: {
      en: ["Pair-friendly study blocks", "Debate-ish clubs moderated kindly"],
      es: ["Bloques de estudio pensados para dos", "Debates guiados con cuidado y respeto"],
    },
    skills: {
      en: ["Paraphrasing aloud to test understanding", "Asking conversational clarifiers"],
      es: ["Parafrasear para probar tu entendimiento", "Pedir aclaradores simples sin juicio"],
    },
  },

  "thinking-quietly-first": {
    label: {
      en: "Settling inward before outward action feels healthy",
      es: "Acomodarte por dentro antes de moverte puede sentir muy sano",
    },
    environments: {
      en: ["Lower-stimulus study windows", "Solo corners with notebooks—no glare for thinking"],
      es: ["Horarios menos ruidosos para concentrarte", "Rincón con cuadernos y pocas distracciones visuales"],
    },
    skills: {
      en: ["Jotting hypotheses privately", "Rejoining peers after grounding time"],
      es: ["Anotar hipótesis en privado", "Volver con el grupo después de ese espacio tranquilo"],
    },
  },

  "building-and-creating": {
    label: {
      en: "Joy when building tactile or visual creations",
      es: "Se enciende la energía cuando creas algo físico o visual",
    },
    environments: {
      en: ["Studio spaces forgiving of drafts", "Project rooms with iterative walls"],
      es: ["Estudios que abracen borradores intermedios", "Salas donde mostrar trabajo en proceso es normal"],
    },
    skills: {
      en: ["Layering drafts instead of polishing too soon", "Documenting snapshots of progress"],
      es: ["Trabajar en capas en vez de pulir muy pronto", "Registrar capturas cortas del avance"],
    },
  },

  "connecting-with-people": {
    label: {
      en: "Drawn toward shared meaning and empathic sparks",
      es: "Te atraen los significados compartidos y las conexiones humanas delicadas",
    },
    environments: {
      en: ["Dialogue-heavy clubs", "Service opportunities with humane pacing"],
      es: ["Clubes de diálogo cuidadoso", "Ofertas de servicio donde el ritmo sea humano"],
    },
    skills: {
      en: ["Perspective noticing", "Co-hosting brainstorms thoughtfully"],
      es: ["Reconocer otras miradas sin apurarte", "Co-facilitar tormentas de ideas calmadas"],
    },
  },

  "clarifying-problems-together": {
    label: {
      en: "Steadying teams by sharpening the puzzle’s edges",
      es: "Sostienes equipos enfocándose en aclarar el problema real",
    },
    environments: {
      en: ["Structured retrospectives without blame", "Shared whiteboards emphasizing questions"],
      es: ["Retros con estructura y sin culpar", "Pizarrón compartido que pregunte tanto como responda"],
    },
    skills: {
      en: ["Reframing goals compassionately", "Spotting ambiguity before debating solutions"],
      es: ["Replantear metas con compasión", "Avistar zonas vagas antes de discutir soluciones"],
    },
  },

  "supporting-the-group": {
    label: {
      en: "Energized by buoying quieter voices ethically",
      es: "Energizado por alentar voces tímidas con ética — no por presionar",
    },
    environments: {
      en: ["Inclusive clubs with facilitation norms printed kindly", "Mentorship circles emphasizing listening"],
      es: ["Clubes con normas escritas sobre escuchar", "Mentorías donde prioricen verdaderamente oír antes de hablar"],
    },
    skills: {
      en: ["Inclusive turn-taking choreography", "Noticing burnout signals softly"],
      es: ["Repartir tiempos de palabra conscientemente", "Reconocer señales de cansancio con suavidad"],
    },
  },

  "experimenting-quickly": {
    label: {
      en: "Comfort running micro experiments rather than debating endlessly",
      es: "Confort lanzando experimentos rápidos en vez de sólo teorizar eternamente",
    },
    environments: {
      en: ["Hack-hour blocks with safety rails", "Classrooms cheering cheap trials"],
      es: ["Bloques de “hora hack” seguros en reglas claras", "Aulas donde probar algo barato sea aplaudido"],
    },
    skills: {
      en: ["Designing hypotheses that can finish in minutes", "Capturing qualitative learn cards"],
      es: ["Diseñar hipótesis que terminen rápido", "Guardar tarjetitas de lo aprendido con palabras cortas"],
    },
  },

  "solo-focus-environment": {
    label: {
      en: "Personal quiet windows unlock your focus",
      es: "Tramos tranquilos solo contigo desbloquean tu concentración",
    },
    environments: {
      en: ["Morning solo blocks earmarked calmly", "Headphone-friendly lounges with soft lighting"],
      es: ["Bloques matutinos señalados para concentración", "Zonas con luz amable donde auriculares estén bien vistos"],
    },
    skills: {
      en: ["Pomodoro-style gentle pacing without shame", "Signaling polite do-not-disturb cues"],
      es: ["Rutinas de tiempo amables sin avergonzar", "Señales educadas de concentración"],
    },
  },

  "partner-depth-environment": {
    label: {
      en: "You thrive pacing ideas with one thoughtful partner",
      es: "Sueles florecer alimentando ideas junto con una persona afín",
    },
    environments: {
      en: ["Two-person booths for thinking", "Mentorship duos with scripted listening"],
      es: ["Cubículos tranquilos pensados para dos", "Sesiones donde la escucha tenga tiempo real"],
    },
    skills: {
      en: ["Reflective prompting without jumping to fixing", "Co-editing drafts slowly"],
      es: ["Hacer preguntas que inviten a reflexionar sin arreglar de golpe", "Co-editar con calma y revisiones conscientes"],
    },
  },

  "group-energy-environment": {
    label: {
      en: "Group momentum helps you ignite ideas ethically",
      es: "El ritmo positivo del grupo suele ayudarte a encender ideas con responsabilidad",
    },
    environments: {
      en: ["Labs with spirited but respectful chatter", "Theater rehearsals co-crafting stories"],
      es: ["Labs con ritmo alto pero límites claros de respeto", "Espacios de ensayo donde co-creen historias vivas"],
    },
    skills: {
      en: ["Reading communal energy ethically", "Signaling timeouts when stimulation spikes"],
      es: ["Leer la energía colectiva con ética", "Pedir respiradero cuando sobre estímulo"],
    },
  },

  "balanced-solo-and-together-environment": {
    label: {
      en: "You balance solo depth with humane partner pulses",
      es: "Encontradas partes sólo-contigo y pulsos cortos junto al grupo pueden encajar mejor",
    },
    environments: {
      en: ["Spaces alternating quiet pods with moderated huddles", "Rotating quiet/collab classroom stations"],
      es: ["Rutinas que alternen silencio corto + conversación moderada", "Estaciones donde rote calma corta vs creatividad juntos"],
    },
    skills: {
      en: ["Transparently budgeting alone vs collaborate time", "Negotiating humane swap timing"],
      es: ["Decir cómo distribuyes tiempo solo/colectivo honestamente", "Negociar intercambios de turno empáticos"],
    },
  },

  "ideas-and-imagination": {
    label: {
      en: "Imaginative leaps and brainstorming feel alive lately",
      es: "Los saltos imaginativos y las lluvias de ideas se han sentido vivas últimamente",
    },
    environments: {
      en: ["Innovation jams with appreciative norms", "Writers rooms or design charrettes emphasizing wild passes"],
      es: ["“Jams” donde lo raro inicial es bienvenido con aprecio", "Salas donde la primera oleada puede ser fantasiosa sin castigo"],
    },
    skills: {
      en: ["Divergent listing before pruning", "Capturing whimsical fragments for later sift"],
      es: ["Listar opciones antes de ordenar fuerte", "Guardar migajas fantasiosas sin descartar todavía"],
    },
  },

  "people-and-communication-strength": {
    label: {
      en: "Relational attunement and communication feel foregrounded",
      es: "Atención interpersonal y comunicación conscientes destacan mejor",
    },
    environments: {
      en: ["Speech-friendly clubs moderated kindly", "Support circles emphasizing listening fidelity"],
      es: ["Clubes de práctica comunicativa donde medien con cuidado", "Espacios de apoyo con escucha alta fidelidad"],
    },
    skills: {
      en: ["Paraphrasing to ensure understanding", "Adapting tone for audience tenderness"],
      es: ["Parafrasear para comprobar comprensión", "Adecuar el tono con ternura hacia audiencias distintas"],
    },
  },

  "systems-and-analysis-strength": {
    label: {
      en: "Pattern sighting, structure, analytical moves feel enticing",
      es: "Reconoces patrones, estructuras o análisis con curiosidad creciente",
    },
    environments: {
      en: ["Quiet math/science salons", "Urban planning or civics prototyping tables"],
      es: ["Saloncitos tranquilos donde el análisis tenga tiempo", "Mesas ciudadanas donde modelar mejoras prácticas"],
    },
    skills: {
      en: ["Sketching cause-effect lightly", "Comparing quantitative stories fairly"],
      es: ["Bosquejar causa-efecto sin dogmatismo", "Comparar relatos cuantitativos con equidad ética"],
    },
  },

  "research-to-learn-paths": {
    label: {
      en: "Studying credible examples anchors your exploration responsibly",
      es: "Indagar bien sobre ejemplos reales ancla tus exploraciones con responsabilidad",
    },
    environments: {
      en: ["Interview-style shadow days that center consent", "Archives or libraries honoring pace"],
      es: ["Días observando con consentimiento pleno desde el primer minuto", "Archivos donde el tiempo lento vale"],
    },
    skills: {
      en: ["Sourcing ethically", "Synthesizing multiple perspectives without flattening voices"],
      es: ["Conseguir fuentes íntegras éticamente", "Sintetizar voces divergentes sin aplanar matices"],
    },
  },

  "hands-on-micro-experience": {
    label: {
      en: "Short embodied tries teach you richest lessons",
      es: "Aprendizajes grandes con pruebas pequeñas y concretas en el mundo",
    },
    environments: {
      en: ["Volunteer micro-shifts humane in pace", "Pop-up apprenticeship tasters respecting labor"],
      es: ["Turnos voluntarios muy cortos donde el ritmo respete a las personas", "“Tasters” prácticos que honren el trabajo real"],
    },
    skills: {
      en: ["Debriefing ethically after partial exposure", "Capturing visceral cues without over-generalizing"],
      es: ["Hacer cierre después de vistas parciales — sin grandes conclusiones forzadas", "Captar sensaciones físicas sin sacar grandes verdades rápidas"],
    },
  },

  "dialogue-with-trusted-voices": {
    label: {
      en: "Processing futures with humane listeners matters deeply",
      es: "Hablar con personas de confianza para procesar rutas vale muchísimo",
    },
    environments: {
      en: ["Quiet mentor lanes", "Family dialogues scripted open-ended—not verdicts"],
      es: ["Canales con mentoría tranquila", "Conversaciones familiares exploratorias — no tribunales de veredictos"],
    },
    skills: {
      en: ["Asking illuminating questions ethically", "Holding tentative multi-path maps"],
      es: ["Preguntar con luz nueva sin interrogatorios pesados", "Sostener mapas temporales sin encerrarte"],
    },
  },

  "growth-in-communication-skills": {
    label: {
      en: "Communication craft feels ripe for nourishing practice soon",
      es: "Las habilidades comunicativas suelen merecer práctica cercana muy pronto",
    },
    environments: {
      en: ["Story salons", "Debate lounges centered on fairness"],
      es: ["Círculos de historias conscientes", "Espacios de debate sobre reglas éticas primeras"],
    },
    skills: {
      en: ["Micro rehearsals with feedback loops", "Visible outlining before speaking gigs"],
      es: ["Micro ensayos con feedback humano rápido", "Esquematizar públicamente antes de presentar"],
    },
  },

  "growth-in-creative-problem-solving": {
    label: {
      en: "Creative improvisation with constraints beckons exploratory reps",
      es: "Improvisar dentro de límites creativos puede pedir prácticas exploratorias",
    },
    environments: {
      en: ["Design jams with playful constraints printed large", "Theater improvisation labs ethically moderated"],
      es: ["Laboratorios con restricciones jueguetonas grandes y visibles", "Improv teatral con mediación ética alta"],
    },
    skills: {
      en: ["Recombining disparate inputs playfully yet safely", "Time-boxing divergence responsibly"],
      es: ["Recombinar entradas dispares con juego y límites de seguridad", "Acotar el tiempo donde la fantasía debe terminar ordenada"],
    },
  },

  "growth-in-analytical-technical-skills": {
    label: {
      en: "Analytical and technical rehearsals feel alluring next-steps",
      es: "Ejercicios analíticos o técnicos se sienten como siguientes pasos atractivos",
    },
    environments: {
      en: ["Tutorial circles mixing rigor playfully", "Code/data clubs welcoming beginners slowly"],
      es: ["Círculos tutoriales con rigor y humor juntos", "Clubes código/datos donde principiantes tengan puentes lentos"],
    },
    skills: {
      en: ["Scratching itch problems weekly", "Documenting repeatable micro wins"],
      es: [
        "Practicar cada semana un micro problema que sí te intrigue de verdad",
        "Registrar victorias pequeñas y repetibles después de cada intento honesto",
      ],
    },
  },

  "growth-in-leadership-and-collaboration": {
    label: {
      en: "Shared leadership rehearsals—quiet or loud—call for practice playgrounds",
      es: "Liderazgo compartido (callado o expresivo) pide arenas de práctica seguras",
    },
    environments: {
      en: ["Rotating facilitation labs", "Service leadership circles ethically paced"],
      es: ["Labs donde todos faciliten por turnos con guía ética clara"],
    },
    skills: {
      en: ["Debriefing facilitation moves humanely", "Collecting appreciative peer signals"],
      es: ["Revisar qué funcionó después de guiar grupo", "Recolectar comentarios concretamente amables sobre impacto percibido"],
    },
  },

  "contributing-as-a-guide": {
    label: {
      en: "Stewarding humane direction—even quietly—shows up alluringly lately",
      es: "Cuidar el rumbo junto al grupo incluso desde la calma se siente cercano últimamente",
    },
    environments: {
      en: ["Outdoor leadership courses centering servant ethos", "Class projects with rotating coordinators"],
      es: ["Cursos al aire libre enfocados en estilo servidor", "Proyectos con coordinación rotativa consciente"],
    },
    skills: {
      en: ["Shared goal translation", "Situational facilitation toggling"],
      es: ["Traducir metas grandes a próximos pasos compartibles", "Cambiar de estilo guiando según el momento"],
    },
  },

  "contributing-through-craft": {
    label: {
      en: "Deep attentive craft—not flash—might be emerging comfort zone ethically",
      es: "Construir con foco técnico cuidadoso — no solo brillantez rápida — parece cercano",
    },
    environments: {
      en: ["Workshop studios celebrating iteration layers", "Apprenticeship benches prioritizing humane pacing"],
      es: ["Taller que valore cada versión mejorada", "Bancadas de práctica donde el ritmo respete cuerpo y mente"],
    },
    skills: {
      en: ["Quality checkpoints without punitive perfectionism", "Documented skill ladders personal"],
      es: ["Revisiones conscientes contra perfeccionismo cruel", "Escalas de práctica muy personales escritas corto"],
    },
  },

  "bridging-ideas-and-people": {
    label: {
      en: "Translation between ideas, groups, stakes shows promise compassionately lately",
      es: "Conectar personas, conceptos y apuestas con compasión se vislumbra con fuerza últimamente",
    },
    environments: {
      en: ["Conflict mediation clubs youth-led", "Interdisciplinary salons mixing arts + STEM gently"],
      es: ["Mediaciones juveniles con adultos soporte cercano pero no controlador", "Salones interdisciplinarios que celebren fusión delicada arte + STEM"],
    },
    skills: {
      en: ["Context switching kindly", "Synthesizing across dialects ethically"],
      es: ["Cambiar marcos con cortesía consciente", "Sintetizar jergas diferentes sin pisar ninguna historia"],
    },
  },
};

const reflectionPools: Record<
  AssessmentModeId,
  Record<AssessmentLocale, readonly string[]>
> = {
  discovery: {
    en: [
      "Where did curiosity feel safest for you lately—and what made it feel safe?",
      "What playful experiment—even tiny—could you try within a weekend without pressure?",
      "When emotions felt big recently, what words or actions helped—even a little?",
      "Which friendly learning moment—messy counts—might you revisit with softer expectations?",
    ],
    es: [
      "¿En qué espacio sintió seguridad últimamente tu curiosidad — y qué la hizo sentir así?",
      "¿Qué experimento juguetón, aun pequeño, podrías probar un fin de semana sin presión?",
      "Cuando tus emociones se sintieron grandes, ¿qué palabras o acciones ayudaron aunque sea un poquito?",
      "¿Qué momento de aprendizaje amable — aun si fue ordenado sólo después — repetirías con expectativas gentiles?",
    ],
  },

  potential: {
    en: [
      "Which environment detail—noise, pacing, teammates—changes how brave you feel trying hard things?",
      "Think of a disagreement you navigated ethically: what did you learn without labeling yourself?",
      "What exploratory club, class, or community might you audition gently next month?",
      "Which small collaboration habit could make group work safer for quieter voices—even when your own voice feels quiet too?",
    ],
    es: [
      "¿Qué detalle ambiental — ruido, ritmo de tiempo, personas alrededor — cambia cuán audaz puedes intentar?",
      "Piensa en un desacuerdo que llevaras con ética: ¿qué aprendiste sin etiquetarte duro?",
      "¿Algún club, clase o comunidad exploratoria podrías probar delicadamente el próximo mes?",
      "¿Qué hábito pequeño de colaboración haría más seguros a los equipos donde a veces cuesta hablar, también cuando te pasa a ti?",
    ],
  },

  direction: {
    en: [
      "What humane leadership moment did you steward recently—even backstage coordinating?",
      "Sketch two exploratory pathways you could revisit quarterly without locking one forever?",
      "What skill rehearsal—communication, analytic, collaborative—deserves intentional micro-session next?",
      "Where might you ethically shadow someone for a humane half-day—with consent—just to widen perspective?",
    ],
    es: [
      "¿Qué momento de liderazgo humano guiaste últimamente—incluso coordinando atrás del escenario?",
      "¿Podrías esbozar dos caminos exploratorios que revises cada trimestre sin encerrarte en uno para siempre?",
      "¿Qué micro práctica — comunicación, análisis o colaboración — merece tiempo intencional pronto?",
      "¿Dónde podrías acompañar a alguien unas horas (con consentimiento claro desde el primer minuto) solo para conocer mejor un camino posible?",
    ],
  },
};

export function localizedReflectionQuestions(
  modeId: AssessmentModeId,
  locale: AssessmentLocale,
): string[] {
  const pool = reflectionPools[modeId][locale];
  return [...pool.slice(0, 4)];
}

export function localizedThemeLabels(
  theme: ExplorationThemeKey,
  locale: AssessmentLocale,
): string {
  return explorationThemeCatalog[theme].label[locale];
}

export function localizedEnvironmentLines(theme: ExplorationThemeKey, locale: AssessmentLocale): string[] {
  return [...explorationThemeCatalog[theme].environments[locale]];
}

export function localizedSkillLines(theme: ExplorationThemeKey, locale: AssessmentLocale): string[] {
  return [...explorationThemeCatalog[theme].skills[locale]];
}
