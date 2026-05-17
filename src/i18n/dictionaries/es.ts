import type { Dictionary } from "@/i18n/dictionaries/en";

export const es: Dictionary = {
  common: {
    brand: "TruePath AI",
    logoAria: "Inicio de TruePath AI",
    begin: "Comenzar",
    beginExploration: "Comenzar exploración",
    backHome: "Volver al inicio",
    viewDemoFlow: "Ver recorrido demo",
    publicTrust: "Confianza pública",
    presentationPreview: "Vista de presentación",
    explorationBeginsGently: "La exploración comienza con calma",
    reflectiveAssessmentFoundation: "Base de reflexión guiada",
    languageToggle: "Idioma",
    english: "Inglés",
    spanish: "Español",
    footerDescription:
      "Demo público MVP para el autodescubrimiento ético de estudiantes. No hay perfiles reales, puntuaciones, análisis de IA ni almacenamiento de datos estudiantiles activo.",
    footerLinks: [
      { label: "Privacidad", href: "/privacy" },
      { label: "Términos", href: "/terms" },
      { label: "Guía para familias", href: "/parent-guide" },
      { label: "Presentación", href: "/pitch" },
    ],
  },
  site: {
    description:
      "Autodescubrimiento ético impulsado por IA para estudiantes que exploran fortalezas, identidad, estilo de aprendizaje y posibilidades futuras.",
    navigation: [
      { label: "Estudiantes", href: "/#students" },
      { label: "Familias", href: "/#parents" },
      { label: "Escuelas", href: "/#schools" },
      { label: "Ética", href: "/#ethics" },
      { label: "Guía familiar", href: "/parent-guide" },
      { label: "Presentación", href: "/pitch" },
    ],
  },
  landing: {
    hero: {
      eyebrow: "IA ética para el autodescubrimiento juvenil",
      titleStart: "Cada estudiante tiene potencial.",
      titleAccent: "No todos lo han descubierto todavía.",
      description:
        "TruePath AI ayuda a estudiantes a explorar sus fortalezas, personalidad, estilo de aprendizaje y posibilidades futuras mediante un autodescubrimiento ético apoyado por IA.",
      ethicsCta: "Ver nuestra ética",
      visualLabel:
        "Mapa abstracto del potencial, crecimiento y caminos futuros de un estudiante",
      visualTitle: "Red de exploración",
      visualDescription:
        "Una constelación tranquila de nodos conectados que representa autoconocimiento, curiosidad, creatividad, crecimiento, confianza y caminos posibles.",
      visualEyebrow: "Mapa de exploración",
      visualBadge: "Sin camino fijo",
      visualChips: ["Notar patrones", "Explorar posibilidades", "Crecer con agencia"],
      safetySignals: ["Sin etiquetas", "Muchos talentos", "Agencia del estudiante"],
    },
    audiencesHeading: {
      eyebrow: "Creado para todo el ecosistema",
      title: "El autodescubrimiento debe sentirse apoyador, no determinista.",
    },
    audiences: [
      {
        id: "students",
        title: "Para estudiantes",
        description:
          "Un espacio seguro para notar fortalezas, explorar identidad y construir confianza sin presión por tener todo resuelto.",
      },
      {
        id: "parents",
        title: "Para familias",
        description:
          "Lenguaje de apoyo para que las familias entiendan crecimiento, curiosidad, emociones y posibilidades futuras en conjunto.",
      },
      {
        id: "schools",
        title: "Para escuelas",
        description:
          "Una base escalable para programas de asesoría, bienestar y preparación futura con ética en el desarrollo estudiantil.",
      },
    ],
    pillars: [
      {
        title: "Explorar fortalezas",
        description:
          "Experiencias basadas en reflexión ayudan a estudiantes a identificar patrones de energía, creatividad, aprendizaje y contribución.",
      },
      {
        title: "Desarrollar inteligencia emocional",
        description:
          "Las preguntas normalizan la incertidumbre, apoyan el lenguaje emocional y fomentan una comunicación cuidadosa.",
      },
      {
        title: "Imaginar posibilidades",
        description:
          "Los estudiantes pueden conectar intereses con muchos futuros posibles sin quedar asignados a un solo camino.",
      },
    ],
    exploration: {
      eyebrow: "Dimensiones de exploración",
      title: "Un mapa moderno para el desarrollo humano.",
      description:
        "TruePath comienza con lenguaje con el que los estudiantes pueden crecer: flexible, validante y abierto por diseño.",
      dimensions: [
        "Fortalezas",
        "Personalidad",
        "Inteligencia emocional",
        "Estilo de aprendizaje",
        "Creatividad",
        "Curiosidad",
        "Comunicación",
        "Posibilidades futuras",
      ],
    },
    ethics: {
      eyebrow: "Posicionamiento ético",
      title: "La IA debe hacer que los estudiantes se sientan más humanos, no más medidos.",
      assessmentPrinciples: [
        "Los estudiantes nunca se reducen a un tipo, puntuación o destino predicho.",
        "Las ideas deben invitar a la reflexión, no tomar decisiones por un menor.",
        "Los resultados deben validar múltiples talentos y normalizar la incertidumbre.",
        "Familias y escuelas reciben contexto de apoyo, no etiquetas.",
      ],
      aiPrinciples: [
        {
          title: "Orientación explicable",
          description:
            "Las funciones futuras de IA deben explicar por qué se sugiere una pregunta o reflexión en lenguaje que estudiantes y familias puedan entender.",
        },
        {
          title: "Agencia humana primero",
          description:
            "El producto debe preservar elección, curiosidad y consentimiento. La IA debe apoyar el autoconocimiento, no decidir el camino de un estudiante.",
        },
        {
          title: "Protecciones por edad",
          description:
            "Las experiencias juveniles requieren privacidad, moderación, diseño consciente de la familia y límites cuidadosos ante inferencias sensibles.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Empezar con calma",
      title: "Ayuda a cada estudiante a comenzar con curiosidad.",
      description:
        "La primera experiencia de TruePath AI es una exploración, no un veredicto. Los estudiantes comienzan notando lo que ya existe dentro de ellos.",
    },
  },
  onboarding: {
    steps: ["Bienvenida", "Elige tu etapa", "Acuerdo de seguridad", "Comenzar"],
    intro: {
      eyebrow: "Antes de comenzar",
      title: "Esto no es una prueba que define tu futuro.",
      narrative:
        "TruePath AI está aquí para ayudarte a notar lo que ya está creciendo dentro de ti: fortalezas, intereses, curiosidad, emociones, creatividad y posibles direcciones. No necesitas tener una sola respuesta. No necesitas saber quién serás. Este espacio abre posibilidades sin convertirlas en etiquetas.",
      truths: [
        {
          title: "Está bien no saber todavía.",
          description:
            "La incertidumbre es una parte normal de crecer, aprender y descubrirte.",
        },
        {
          title: "Tener muchos talentos es normal.",
          description:
            "Puedes ser creativo, reflexivo, analítico, cuidadoso, curioso y seguir cambiando.",
        },
        {
          title: "Tu valor no depende de una carrera.",
          description:
            "Un camino futuro puede expresar partes de ti, pero nunca puede medir tu valor.",
        },
      ],
    },
    pathways: [
      {
        id: "discovery",
        ageRange: "10-12",
        phase: "Etapa de descubrimiento",
        title: "Comenzar con curiosidad",
        description:
          "Un camino suave para notar intereses, emociones, fortalezas y lo que hace que aprender se sienta vivo.",
      },
      {
        id: "potential",
        ageRange: "13-15",
        phase: "Etapa de conciencia del potencial",
        title: "Notar patrones",
        description:
          "Un camino reflexivo para explorar cómo aprendes, comunicas, creas y respondes a posibilidades.",
      },
      {
        id: "direction",
        ageRange: "16-18",
        phase: "Etapa de dirección futura",
        title: "Explorar próximos caminos",
        description:
          "Un camino cuidadoso para conectar fortalezas e intereses con posibilidades futuras sin dejar nada cerrado.",
      },
    ],
    pathwayStep: {
      eyebrow: "Camino según la edad",
      title: "Elige la etapa que encaja contigo ahora.",
      description:
        "Esto solo ajusta el tono de tu exploración. No te clasifica, no te etiqueta y no decide lo que viene después.",
      choose: "Elegir este camino",
      selected: "Seleccionado",
      agePrefix: "Edades",
      disabledReason: "Elige una etapa según la edad para continuar.",
    },
    safety: {
      eyebrow: "Acuerdo de exploración segura",
      title: "Algunas cosas para recordar antes de comenzar.",
      points: [
        "Esta experiencia es para explorar, no para definir.",
        "Tus respuestas pueden cambiar mientras creces.",
        "Ningún resultado debe decidir tu futuro por ti.",
        "Puedes tener muchos intereses y talentos.",
        "Si algo no se siente verdadero, puedes cuestionarlo.",
      ],
      confirmation:
        "Entiendo que esta experiencia es para explorar, no para definir.",
      disabledReason: "Confirma el acuerdo de exploración para continuar.",
    },
    begin: {
      eyebrow: "Cuando estés listo",
      title: "Comienza con apertura, no con presión.",
      description:
        "La siguiente experiencia es un prototipo de reflexión guiada. Explora posibilidades sin generar puntuaciones, etiquetas ni recomendaciones finales.",
      selectedPathway: "Camino seleccionado",
    },
    controls: {
      back: "Atrás",
      continue: "Continuar",
      beginExploration: "Comenzar exploración",
    },
  },
  assessments: {
    intro: {
      eyebrow: "Base de reflexión guiada",
      title: "Un comienzo cuidadoso antes de que exista cualquier perfil.",
      description:
        "Esta experiencia abre posibilidades. No define tu futuro. Tus respuestas se quedan solo en esta pantalla por ahora y ayudan a imaginar una futura experiencia de perfil guiado.",
      safetyReminder:
        "Esta experiencia abre posibilidades. No define tu futuro.",
      cta: "Elegir modo de reflexión",
      prototypeTitle: "Qué hace este prototipo",
      prototypePoints: [
        "Hace preguntas reflexivas y apropiadas para jóvenes.",
        "Mantiene las respuestas solo en el estado local de la página.",
        "Evita perfiles, puntuaciones, etiquetas y recomendaciones de carrera.",
      ],
    },
    modeStep: {
      eyebrow: "Modos según la edad",
      title: "Elige el modo de reflexión que encaja con tu edad y momento.",
      description:
        "El modo ajusta las preguntas que verás. No te etiqueta, no te clasifica y no crea un resultado.",
      choose: "Elegir este modo",
      selected: "Seleccionado",
      agePrefix: "Edades",
      disabledReason: "Elige un modo según la edad para comenzar.",
    },
    questionTypeLabels: {
      "scenario-choice": "Escenario",
      "preference-choice": "Preferencia",
      "reflection-prompt": "Reflexión",
      "visual-card-choice": "Tarjeta visual",
    },
    optionalPrompt:
      "Esta pregunta es opcional. Si se siente demasiado personal o no sabes qué decir, puedes saltarla por ahora.",
    reflectionResponseLabel: "Respuesta de reflexión",
    answerLabels: {
      choose: "Elegir",
      selected: "Seleccionado",
    },
    controls: {
      back: "Atrás",
      continue: "Continuar",
      preview: "Ver reflexiones",
      skip: "Saltar por ahora",
      answerReason: "Elige una respuesta para continuar.",
      reflectionReason: "Escribe una reflexión o elige Saltar por ahora.",
    },
    progress: {
      question: "Pregunta",
      of: "de",
    },
    modes: [
      {
        id: "discovery",
        ageRange: "10-12",
        phase: "Modo descubrimiento",
        title: "Curiosidad y creatividad",
        description:
          "Un conjunto suave de preguntas sobre curiosidad, creatividad, aprendizaje, emociones y exploración.",
        focusAreas: ["Curiosidad", "Creatividad", "Aprendizaje", "Emociones", "Exploración"],
        questions: [
          {
            id: "discovery-scenario",
            type: "scenario-choice",
            dimension: "Curiosidad",
            prompt:
              "Imagina que tu clase empieza un nuevo proyecto. ¿Qué te gustaría hacer primero?",
            helper: "No hay una mejor respuesta. Elige lo que se siente más como tú hoy.",
            scenario:
              "Tu grupo recibe una caja grande de materiales y una pregunta abierta para explorar.",
            options: [
              {
                id: "ask",
                label: "Hacer preguntas",
                description: "Querría entender qué podríamos descubrir.",
              },
              {
                id: "make",
                label: "Empezar a crear",
                description: "Querría probar ideas con mis manos.",
              },
              {
                id: "organize",
                label: "Ordenar las piezas",
                description: "Querría ver qué tenemos y hacer un plan.",
              },
            ],
          },
          {
            id: "discovery-preference",
            type: "preference-choice",
            dimension: "Aprendizaje",
            prompt: "Cuando algo es nuevo, ¿qué suele ayudarte a aprender?",
            helper: "Tu forma de aprender puede cambiar según el momento.",
            options: [
              { id: "show", label: "Ver un ejemplo" },
              { id: "try", label: "Intentarlo por mi cuenta" },
              { id: "talk", label: "Hablarlo con alguien" },
              { id: "quiet", label: "Pensar en silencio primero" },
            ],
          },
          {
            id: "discovery-reflection",
            type: "reflection-prompt",
            dimension: "Emociones",
            prompt:
              "¿Qué es algo que últimamente te hizo sentir orgullo, curiosidad o emoción?",
            helper:
              "Un momento pequeño cuenta. Puedes escribir una oración o algunas palabras.",
            placeholder: "Noté que me sentí...",
          },
          {
            id: "discovery-visual",
            type: "visual-card-choice",
            dimension: "Exploración",
            prompt: "¿Qué tipo de exploración se siente más interesante ahora?",
            helper: "Elige una tarjeta que se sienta atractiva, no permanente.",
            options: [
              {
                id: "build",
                label: "Construir",
                description: "Hacer, dibujar, probar o crear algo nuevo.",
                accent: "from-orange-300 to-rose-400",
              },
              {
                id: "wonder",
                label: "Preguntarme",
                description: "Hacer preguntas y descubrir cómo funcionan las cosas.",
                accent: "from-sky-300 to-cyan-500",
              },
              {
                id: "connect",
                label: "Conectar",
                description: "Compartir ideas y entender a las personas.",
                accent: "from-violet-300 to-indigo-500",
              },
            ],
          },
        ],
      },
      {
        id: "potential",
        ageRange: "13-15",
        phase: "Modo conciencia del potencial",
        title: "Fortalezas y ambientes",
        description:
          "Un conjunto reflexivo de preguntas sobre fortalezas, energía social, resolución de problemas, intereses y ambientes.",
        focusAreas: [
          "Fortalezas",
          "Energía social",
          "Resolución de problemas",
          "Intereses",
          "Ambientes",
        ],
        questions: [
          {
            id: "potential-scenario",
            type: "scenario-choice",
            dimension: "Resolución de problemas",
            prompt: "Un proyecto en equipo se siente estancado. ¿Qué podrías intentar naturalmente?",
            helper: "Se trata de notar patrones, no de elegir un rol para siempre.",
            scenario: "Tu grupo tiene ideas, pero nadie está seguro de qué hacer después.",
            options: [
              {
                id: "clarify",
                label: "Aclarar la meta",
                description:
                  "Podría ayudar a todos a entender qué estamos intentando resolver.",
              },
              {
                id: "encourage",
                label: "Animar al equipo",
                description:
                  "Podría ayudar a que las personas se sientan cómodas compartiendo.",
              },
              {
                id: "experiment",
                label: "Probar un experimento rápido",
                description: "Podría probar una idea y aprender de ella.",
              },
            ],
          },
          {
            id: "potential-preference",
            type: "preference-choice",
            dimension: "Energía social",
            prompt: "¿Qué ambiente suele ayudarte a pensar mejor?",
            helper:
              "Muchas personas necesitan ambientes distintos para tareas distintas.",
            options: [
              { id: "solo", label: "Tiempo tranquilo a solas" },
              { id: "pair", label: "Una persona con quien pensar" },
              { id: "group", label: "Un grupo con energía" },
              { id: "mixed", label: "Una mezcla de solo y acompañado" },
            ],
          },
          {
            id: "potential-reflection",
            type: "reflection-prompt",
            dimension: "Intereses",
            prompt:
              "¿Cuál es un tema, actividad o problema al que vuelves una y otra vez?",
            helper:
              "Puede ser académico, creativo, social, práctico o personal.",
            placeholder: "Sigo volviendo a...",
          },
          {
            id: "potential-visual",
            type: "visual-card-choice",
            dimension: "Fortalezas",
            prompt: "¿Qué área de fortaleza se siente más viva para ti últimamente?",
            helper: "Esto es una pista para explorar, no una categoría fija.",
            options: [
              {
                id: "ideas",
                label: "Ideas",
                description:
                  "Imaginar, preguntar, proponer o diseñar.",
                accent: "from-cyan-300 to-blue-500",
              },
              {
                id: "people",
                label: "Personas",
                description: "Escuchar, liderar, ayudar o comunicar.",
                accent: "from-rose-300 to-orange-400",
              },
              {
                id: "systems",
                label: "Sistemas",
                description: "Organizar, resolver, analizar o mejorar.",
                accent: "from-emerald-300 to-teal-500",
              },
            ],
          },
        ],
      },
      {
        id: "direction",
        ageRange: "16-18",
        phase: "Modo dirección futura",
        title: "Caminos y planificación futura",
        description:
          "Un conjunto cuidadoso de preguntas sobre caminos, exploración de carrera, liderazgo, habilidades y planificación futura.",
        focusAreas: [
          "Caminos",
          "Exploración de carrera",
          "Liderazgo",
          "Habilidades",
          "Planificación futura",
        ],
        questions: [
          {
            id: "direction-scenario",
            type: "scenario-choice",
            dimension: "Caminos",
            prompt:
              "Encuentras tres opciones futuras que parecen interesantes. ¿Qué podría ayudarte a explorarlas?",
            helper: "Explorar varias posibilidades es saludable y normal.",
            scenario:
              "Estás comparando posibilidades, pero ninguna tiene que convertirse hoy en una respuesta final.",
            options: [
              {
                id: "research",
                label: "Investigar ejemplos reales",
                description:
                  "Podría aprender qué hacen realmente las personas en esos caminos.",
              },
              {
                id: "experience",
                label: "Probar una pequeña experiencia",
                description:
                  "Podría intentar un proyecto, clase, voluntariado u observación.",
              },
              {
                id: "discuss",
                label: "Conversarlo",
                description:
                  "Podría preguntar a personas de confianza qué notan y qué saben.",
              },
            ],
          },
          {
            id: "direction-preference",
            type: "preference-choice",
            dimension: "Habilidades",
            prompt: "¿Qué tipo de habilidad se siente más útil explorar ahora?",
            helper: "Esto trata de próximos pasos, no de decidir todo tu futuro.",
            options: [
              { id: "communication", label: "Comunicación" },
              { id: "creative", label: "Resolución creativa de problemas" },
              { id: "technical", label: "Habilidades técnicas o analíticas" },
              { id: "leadership", label: "Liderazgo y colaboración" },
            ],
          },
          {
            id: "direction-reflection",
            type: "reflection-prompt",
            dimension: "Planificación futura",
            prompt:
              "¿Cuál es una posibilidad futura que te da curiosidad, aunque no estés seguro?",
            helper: "La curiosidad es suficiente. No necesitas un plan final.",
            placeholder: "Tengo curiosidad por...",
          },
          {
            id: "direction-visual",
            type: "visual-card-choice",
            dimension: "Liderazgo",
            prompt: "¿Qué forma de contribuir se siente más natural últimamente?",
            helper:
              "El liderazgo puede ser tranquilo, creativo, práctico o relacional.",
            options: [
              {
                id: "guide",
                label: "Guiar",
                description: "Ayudar a otros a avanzar hacia una meta compartida.",
                accent: "from-violet-300 to-indigo-500",
              },
              {
                id: "craft",
                label: "Construir con cuidado",
                description: "Crear trabajo de calidad con enfoque y habilidad.",
                accent: "from-cyan-300 to-blue-500",
              },
              {
                id: "bridge",
                label: "Conectar",
                description: "Unir personas, ideas y oportunidades.",
                accent: "from-emerald-300 to-teal-500",
              },
            ],
          },
        ],
      },
    ],
    summary: {
      eyebrow: "Vista previa de reflexión",
      title: "Tus reflexiones se guardan aquí por ahora.",
      description:
        "Tus respuestas están listas para un futuro perfil guiado. En la próxima versión, TruePath AI ayudará a convertir estas reflexiones en fortalezas, áreas de crecimiento y posibles caminos de exploración.",
      reminder:
        "No se ha creado ningún perfil, puntuación, análisis de IA ni recomendación de carrera con estas respuestas. Las vistas de estudiante y escuela son solo ejemplos estáticos de demo.",
      mode: "Modo",
      agePrefix: "Edades",
      reflections: "Reflexiones",
      of: "de",
      storedOnly: "Guardado solo en el estado de esta página por ahora.",
      viewStudent: "Ver vista de estudiante",
      exploreSchool: "Ver vista de escuela",
      startAgain: "Empezar de nuevo",
    },
  },
  demo: {
    notice:
      "Vista demo estática. No se genera ningún perfil real, no ocurre análisis de IA y no se almacenan datos estudiantiles.",
    noticeLabel: "Modo demo:",
    student: {
      eyebrow: "Vista demo de estudiante",
      badge: "Vista demo — no es un perfil final de estudiante.",
      title:
        "Una vista suave de cómo las reflexiones podrían convertirse en una conversación de crecimiento.",
      description:
        "Esta página demo estática muestra cómo TruePath AI podría presentar temas de exploración en una versión futura. Todavía no se basa en respuestas de evaluación. Nada aquí define a un estudiante, predice una carrera ni crea un perfil final.",
      sections: [
        {
          title: "Exploración de fortalezas",
          description:
            "Tus reflexiones podrían señalar varias fortalezas que vale la pena notar y probar en distintos contextos.",
          items: [
            "Podrías disfrutar convertir preguntas abiertas en ideas creativas.",
            "Podrías sentir energía al ayudar a un grupo a entender un desafío.",
            "Podrías estar construyendo confianza mediante aprendizaje práctico y comunicación cuidadosa.",
          ],
        },
        {
          title: "Áreas de curiosidad",
          description:
            "Las áreas de curiosidad son invitaciones a explorar, no intereses fijos que debas mantener siempre.",
          items: [
            "Resolución creativa de problemas y experimentos de diseño",
            "Entender cómo las personas aprenden, colaboran o se comunican",
            "Proyectos que combinen imaginación con próximos pasos prácticos",
          ],
        },
        {
          title: "Reflexiones de crecimiento",
          description:
            "Las reflexiones de crecimiento se enfocan en habilidades para practicar con calma con el tiempo.",
          items: [
            "Intenta nombrar qué tipo de apoyo te ayuda a aprender algo nuevo.",
            "Nota cuándo prefieres pensar en silencio, trabajar en equipo o mezclar ambos.",
            "Practica hacer una pregunta más antes de elegir una dirección.",
          ],
        },
        {
          title: "Posibles caminos para explorar",
          description:
            "Los caminos son ejemplos para explorar. No son recomendaciones ni predicciones.",
          items: [
            "Proyectos de tecnología creativa, diseño o medios",
            "Experiencias de resolución comunitaria, educación o apoyo entre pares",
            "Actividades de ciencia, emprendimiento o innovación práctica",
          ],
        },
        {
          title: "Próximos pasos",
          description:
            "Pequeños próximos pasos pueden ayudar a estudiantes a conocerse mejor sin presión.",
          items: [
            "Elige un proyecto, club, clase o conversación para explorar.",
            "Habla con una persona adulta de confianza sobre lo que se sintió interesante o sorprendente.",
            "Vuelve más adelante y observa si tus reflexiones todavía se sienten verdaderas.",
          ],
        },
      ],
    },
    school: {
      eyebrow: "Vista demo de escuela",
      badge: "Vista demo — no son datos reales de estudiantes.",
      title:
        "Una vista centrada en privacidad de señales de desarrollo estudiantil para un futuro piloto.",
      description:
        "Esta página demo estática usa solo datos de muestra. No está conectada a estudiantes reales, respuestas, análisis de IA ni registros escolares. Ilustra cómo una escuela podría ver temas agregados de exploración sin exponer reflexiones privadas individuales.",
      sections: [
        {
          title: "Señales de crecimiento estudiantil",
          description:
            "Las señales agregadas de muestra pueden ayudar a las escuelas a notar dónde los estudiantes podrían querer más apoyo u oportunidades.",
          items: [
            "Señal demo: muchos estudiantes podrían estar explorando resolución creativa de problemas.",
            "Señal demo: estudiantes podrían valorar más lenguaje para emociones y preferencias de aprendizaje.",
            "Señal demo: el apoyo de preparación futura puede ser más fuerte cuando se conecta con proyectos reales.",
          ],
        },
        {
          title: "Tendencias de exploración",
          description:
            "El lenguaje de tendencias debe seguir siendo exploratorio y agregado, no predictivo ni comparativo.",
          items: [
            "Tendencia demo: interés en experiencias de aprendizaje práctico",
            "Tendencia demo: curiosidad por ayudar, construir, diseñar y organizar",
            "Tendencia demo: necesidad de caminos flexibles en vez de rutas de carrera únicas",
          ],
        },
        {
          title: "Oportunidades de apoyo para consejería",
          description:
            "Consejeros podrían usar temas agregados para planear conversaciones de apoyo, no para etiquetar estudiantes.",
          items: [
            "Ofrecer talleres de reflexión sobre fortalezas e incertidumbre.",
            "Crear conversaciones voluntarias sobre posibles caminos y próximos pasos.",
            "Usar lenguaje amigable para estudiantes que valide múltiples talentos.",
          ],
        },
        {
          title: "Enfoque de privacidad primero",
          description:
            "Las vistas escolares deben proteger la confianza estudiantil y evitar exponer reflexiones sensibles.",
          items: [
            "Mostrar temas agregados antes que información individual.",
            "Evitar rankings, predicciones y perfiles fijos.",
            "Requerir límites claros de consentimiento antes de compartir cualquier vista específica.",
          ],
        },
        {
          title: "Preparación para programa piloto",
          description:
            "Un piloto responsable debe validar utilidad, seguridad, comprensión y confianza familiar.",
          items: [
            "Definir expectativas de consentimiento, privacidad y retención de datos antes del lanzamiento.",
            "Revisar el lenguaje con educadores, familias y asesores juveniles.",
            "Medir si los estudiantes se sienten más curiosos, comprendidos y apoyados.",
          ],
        },
      ],
      mockMetrics: [
        {
          label: "Estudiantes demo representados",
          value: "120",
          helper: "Tamaño de cohorte solo ilustrativo",
        },
        {
          label: "Temas de exploración",
          value: "8",
          helper: "Categorías agregadas de muestra",
        },
        {
          label: "Puntuación individual",
          value: "0",
          helper: "Sin ranking ni puntuación en esta demo",
        },
      ],
    },
    navigation: [
      { label: "Iniciar recorrido demo", href: "/onboarding" },
      { label: "Vista de estudiante", href: "/student-dashboard" },
      { label: "Vista de escuela", href: "/school-dashboard" },
      { label: "Volver al inicio", href: "/" },
    ],
  },
  pitch: {
    hero: {
      eyebrow: "Presentación comercial",
      title: "TruePath AI ayuda a estudiantes a descubrir en quién se están convirtiendo.",
      description:
        "Una plataforma de desarrollo juvenil centrada en lo humano para escuelas, familias y aliados que quieren que los estudiantes exploren fortalezas, confianza, estilo de aprendizaje y posibilidades futuras sin etiquetas ni presión.",
      audience:
        "Preparado para Weber State, escuelas K-12, familias, consejeros y patrocinadores iniciales.",
    },
    ctas: [
      { label: "Ver recorrido demo", href: "/onboarding", intent: "primary" },
      { label: "Ver vista de estudiante", href: "/student-dashboard", intent: "secondary" },
      { label: "Ver vista de escuela", href: "/school-dashboard", intent: "secondary" },
    ],
    outline: "Resumen de presentación",
    final: {
      eyebrow: "Próximo paso de presentación",
      title: "Recorre la demo con las partes interesadas y luego diseña el piloto con seguridad.",
      description:
        "TruePath AI está listo para comunicar la visión, mostrar la demo MVP e iniciar conversaciones serias con escuelas, familias, universidades y patrocinadores.",
    },
    stats: [
      {
        label: "Rango de edad",
        value: "10-18",
        helper: "Diseñado alrededor de etapas de desarrollo juvenil",
      },
      {
        label: "Postura central",
        value: "Sin etiquetas",
        helper: "Exploración, no definición",
      },
      {
        label: "Enfoque del piloto",
        value: "Confianza",
        helper: "Seguridad antes de automatización",
      },
    ],
    sections: [
      {
        id: "problem",
        eyebrow: "El problema",
        title:
          "A los estudiantes se les pide planear futuros antes de comprenderse a sí mismos.",
        body:
          "Muchos estudiantes sienten presión por elegir carreras, especialidades o identidades temprano. Las evaluaciones tradicionales pueden sentirse como etiquetas, mientras escuelas y familias a menudo carecen de una forma cálida y estructurada de apoyar el autodescubrimiento.",
        points: [
          "Los estudiantes pueden confundir incertidumbre con fracaso.",
          "Las familias quieren orientación sin empujar un camino fijo.",
          "Las escuelas necesitan apoyo escalable para bienestar, asesoría y preparación futura.",
        ],
      },
      {
        id: "vision",
        eyebrow: "La visión",
        title: "Un mundo donde cada estudiante tenga lenguaje para su potencial.",
        body:
          "TruePath AI existe para que la exploración se sienta segura, inteligente y humana. La plataforma ayuda a estudiantes a notar fortalezas, emociones, preferencias de aprendizaje, curiosidad y posibles direcciones mientras protege su derecho a crecer y cambiar.",
        points: [
          "Exploración antes que predicción.",
          "Posibilidades antes que etiquetas.",
          "Agencia del estudiante antes que automatización.",
        ],
      },
      {
        id: "solution",
        eyebrow: "La solución",
        title: "Un recorrido guiado de autodescubrimiento para edades 10-18.",
        body:
          "TruePath AI combina onboarding emocionalmente seguro, experiencias reflexivas y conceptos futuros de perfil que pueden apoyar a estudiantes, familias, consejeros y programas escolares.",
        points: [
          "Flujos por edad para 10-12, 13-15 y 16-18.",
          "Preguntas reflexivas que no puntúan ni definen estudiantes.",
          "Vistas demo para conversaciones con estudiantes y escuelas.",
        ],
      },
      {
        id: "why-now",
        eyebrow: "Por qué ahora",
        title: "La IA está entrando a la educación; los estudiantes necesitan protección y propósito.",
        body:
          "Escuelas y familias buscan IA que apoye el desarrollo humano, no atajos ni vigilancia. TruePath AI coloca la orientación ética como base antes de cualquier insight automatizado.",
        points: [
          "La salud mental juvenil y la ansiedad sobre el futuro son preocupaciones urgentes.",
          "La preparación para carreras se está ampliando más allá del emparejamiento laboral.",
          "La IA responsable puede ayudar a reflexionar sin reemplazar el apoyo humano.",
        ],
      },
      {
        id: "who-it-helps",
        eyebrow: "A quién ayuda",
        title: "Una plataforma para estudiantes, familias, escuelas y aliados comunitarios.",
        body:
          "TruePath AI puede servir a estudiantes individualmente mientras da a los adultos mejor lenguaje para animar, orientar y diseñar programas.",
        points: [
          "Los estudiantes ganan confianza y autoconocimiento.",
          "Las familias reciben puntos de conversación de apoyo.",
          "Las escuelas obtienen señales agregadas de desarrollo con enfoque de privacidad.",
          "Los patrocinadores pueden apoyar acceso equitativo a herramientas de preparación futura.",
        ],
      },
      {
        id: "how-it-works",
        eyebrow: "Cómo funciona",
        title: "Un recorrido demo simple desde curiosidad hasta conversación.",
        body:
          "El MVP actual muestra un camino claro: landing page, onboarding emocional, evaluación reflexiva, vista previa de resumen, vista de estudiante y vista de escuela.",
        points: [
          "La página inicial presenta la misión y postura ética.",
          "El onboarding establece seguridad emocional y contexto por edad.",
          "Las evaluaciones reúnen reflexiones localmente en el navegador.",
          "Las vistas demo muestran cómo podrían estructurarse conversaciones futuras.",
        ],
      },
      {
        id: "ethical-safeguards",
        eyebrow: "Protecciones éticas",
        title:
          "El producto está diseñado para evitar etiquetas, presión y resultados deterministas.",
        body:
          "TruePath AI trata las reflexiones estudiantiles como información sensible de desarrollo. La plataforma debe preservar dignidad, privacidad, agencia y apertura antes de introducir IA o analíticas de producción.",
        points: [
          "Sin etiquetas de identidad fijas.",
          "Sin predicciones de carrera ni ranking estudiantil.",
          "Bases de consentimiento y privacidad antes de almacenar datos reales.",
          "Guías de IA segura para jóvenes antes de cualquier integración.",
        ],
      },
      {
        id: "demo-flow",
        eyebrow: "Recorrido demo",
        title: "Ya existe un camino MVP listo para presentación.",
        body:
          "La demo puede recorrerse en una reunión para mostrar tono emocional, experiencia estudiantil, valor para escuelas y oportunidad para patrocinadores sin afirmar comportamiento final de producción.",
        points: [
          "Ver recorrido demo: iniciar con onboarding.",
          "Ver vista de estudiante: observar secciones de crecimiento no deterministas.",
          "Ver vista de escuela: observar valor escolar agregado y centrado en privacidad.",
        ],
      },
      {
        id: "pilot-proposal",
        eyebrow: "Propuesta piloto",
        title: "Un piloto responsable debe validar utilidad, confianza y seguridad.",
        body:
          "Un piloto con Weber State, escuelas aliadas o programas juveniles podría enfocarse en asesoría, exploración de carrera, participación familiar y apoyo de consejería mientras mantiene un manejo conservador de datos.",
        points: [
          "Probar comprensión y seguridad emocional de estudiantes.",
          "Revisar lenguaje con educadores, familias y asesores juveniles.",
          "Medir si los estudiantes se sienten más curiosos, apoyados y confiados.",
        ],
      },
      {
        id: "business-model",
        eyebrow: "Modelo de negocio",
        title: "Múltiples caminos pueden apoyar acceso sostenible.",
        body:
          "TruePath AI puede crecer mediante pilotos escolares, licencias distritales, alianzas universitarias, planes familiares, acceso patrocinado y programas de desarrollo juvenil.",
        points: [
          "Licenciamiento para escuelas y distritos en programas de asesoría y consejería.",
          "Alianzas universitarias o de preparación laboral.",
          "Acceso financiado por patrocinadores para estudiantes con menos recursos.",
          "Orientación premium para familias una vez validada la seguridad.",
        ],
      },
      {
        id: "sponsorship",
        eyebrow: "Oportunidad de patrocinio",
        title: "Los patrocinadores pueden financiar descubrimiento, confianza y preparación futura.",
        body:
          "Los primeros patrocinadores pueden ayudar a llevar herramientas éticas de autodescubrimiento a estudiantes que quizá no reciben orientación personalizada, alineándose con educación, bienestar y desarrollo laboral.",
        points: [
          "Apoyar acceso piloto para escuelas o programas juveniles.",
          "Crear iniciativas comunitarias de preparación futura.",
          "Financiar investigación, seguridad del lenguaje y mejoras de accesibilidad.",
        ],
      },
      {
        id: "next-steps",
        eyebrow: "Próximos pasos",
        title: "Pasar de demo a planificación responsable de piloto.",
        body:
          "El paso más seguro no es automatización de producción. Es revisión con partes interesadas, diseño de piloto, planificación de consentimiento y validación con estudiantes, familias, consejeros y líderes escolares.",
        points: [
          "Revisar el recorrido demo con partes interesadas.",
          "Definir audiencia piloto y criterios de éxito.",
          "Finalizar requisitos de consentimiento, privacidad y retención de datos.",
          "Solo entonces agregar cuentas reales, almacenamiento, análisis de IA o dashboards.",
        ],
      },
    ],
  },
  trust: {
    readyTitle: "¿Listo para ver el recorrido demo?",
    readyDescription:
      "Comienza con onboarding para ver cómo TruePath AI introduce exploración antes de cualquier perfil futuro, análisis de IA o cuenta de producción.",
    privacy: {
      eyebrow: "Privacidad y confianza estudiantil",
      title:
        "TruePath AI está diseñado para proteger la reflexión estudiantil antes de recopilar datos reales.",
      description:
        "Esta demo pública no crea cuentas, no almacena respuestas, no genera perfiles de IA ni escribe información estudiantil en una base de datos. El producto futuro requerirá consentimiento claro, controles de privacidad y acuerdos escolares antes de recopilar datos reales.",
      effectiveNote:
        "Estado actual: demo pública y vista de preparación para piloto. Esta página está escrita en lenguaje claro y debe revisarse con asesoría legal calificada antes de un lanzamiento de producción.",
      sections: [
        {
          title: "Qué ocurre en la demo actual",
          body:
            "La experiencia actual de TruePath AI es solo de presentación. Las respuestas de evaluación se mantienen en el estado local de la página mientras está abierta y no se envían a un servidor.",
          points: [
            "No se crea una cuenta.",
            "No se genera un perfil estudiantil.",
            "No ocurre análisis de IA.",
            "No se crea puntuación, etiqueta ni recomendación de carrera.",
            "La demo no escribe en una base de datos.",
          ],
        },
        {
          title: "Intenciones futuras de privacidad",
          body:
            "Si TruePath AI avanza a un piloto o versión de producción, el producto debe recopilar solo la información necesaria para apoyar una exploración segura.",
          points: [
            "Usar recopilación de datos con propósito limitado.",
            "Explicar lo recopilado con lenguaje amigable para estudiantes y familias.",
            "Evitar vender datos estudiantiles o usarlos para perfiles publicitarios.",
            "Aclarar procesos de eliminación y revisión antes del lanzamiento.",
          ],
        },
        {
          title: "Reflexiones estudiantiles",
          body:
            "Las reflexiones estudiantiles pueden ser personales. TruePath AI debe tratarlas como información confiada, no como combustible de crecimiento.",
          points: [
            "Las reflexiones privadas no deben convertirse automáticamente en analíticas escolares.",
            "Los adultos deben recibir contexto de apoyo, no etiquetas deterministas.",
            "El contenido sensible requiere límites cuidadosos de acceso.",
          ],
        },
        {
          title: "Expectativas de consentimiento",
          body:
            "Como TruePath AI está diseñado para estudiantes de 10 a 18 años, los pilotos futuros deben definir consentimiento de familias, asentimiento estudiantil y responsabilidades escolares antes de recopilar información real.",
          points: [
            "Las experiencias para menores de 13 pueden requerir consentimiento verificable de padres o tutores.",
            "Los pilotos escolares pueden requerir acuerdos conscientes de FERPA.",
            "Los estudiantes deben entender que la exploración es opcional y revisable.",
          ],
        },
      ],
    },
    terms: {
      eyebrow: "Términos de uso",
      title: "Esta demo es solo para exploración, presentación y planificación piloto.",
      description:
        "TruePath AI actualmente es una demo MVP. No debe usarse como herramienta diagnóstica, reemplazo de consejería, motor de decisión de carrera ni sistema de registros estudiantiles de producción.",
      effectiveNote:
        "Estado actual: términos demo en lenguaje claro. Los términos formales deben revisarse con asesoría legal calificada antes de uso en producción.",
      sections: [
        {
          title: "Uso de la demo actual",
          body:
            "La demo pública busca mostrar la visión del producto, el tono emocional, la postura ética y el posible valor para escuelas y patrocinadores.",
          points: [
            "El contenido demo es ilustrativo.",
            "Las vistas de estudiante y escuela son ejemplos estáticos.",
            "Las respuestas de evaluación no se guardan.",
            "No se crea salida de IA ni perfil automatizado.",
          ],
        },
        {
          title: "No es asesoría profesional",
          body:
            "TruePath AI no es un servicio de salud mental, reemplazo de orientación vocacional ni autoridad de decisión educativa.",
          points: [
            "Los estudiantes deben hablar decisiones importantes con adultos de confianza.",
            "Las escuelas no deben usar contenido demo para evaluar estudiantes.",
            "Las familias deben tratar el lenguaje demo como apoyo para conversar, no como conclusión.",
          ],
        },
        {
          title: "Filosofía no determinista",
          body:
            "TruePath AI está construido para abrir posibilidades. Nunca debe definir el futuro de un estudiante ni reducirlo a un tipo.",
          points: [
            "Ningún resultado debe tratarse como permanente.",
            "Ningún camino debe tratarse como la única respuesta correcta.",
            "Los estudiantes pueden cambiar, discrepar y seguir explorando.",
          ],
        },
        {
          title: "Expectativas futuras de producción",
          body:
            "Antes de un lanzamiento de producción, TruePath AI debe agregar términos formales de cuenta, controles de privacidad, flujos de consentimiento, políticas de retención y vías de apoyo.",
          points: [
            "La autenticación todavía no está activa.",
            "Pagos y suscripciones todavía no están activos.",
            "Las analíticas de producción todavía no están activas.",
          ],
        },
      ],
    },
    parentGuide: {
      eyebrow: "Guía para padres y tutores",
      title: "Cómo entender TruePath AI junto a tu estudiante.",
      description:
        "TruePath AI está diseñado para ayudar a estudiantes a explorar fortalezas, curiosidad, emociones, preferencias de aprendizaje y futuros posibles sin presión por elegir una sola identidad o carrera.",
      effectiveNote:
        "Estado actual: guía para familias de la demo pública. Los pilotos futuros deben incluir información específica de consentimiento y apoyo escolar.",
      sections: [
        {
          title: "Qué es",
          body:
            "TruePath AI es una experiencia de autodescubrimiento. Usa onboarding suave y preguntas reflexivas para ayudar a estudiantes a notar lo que puede estar creciendo en ellos.",
          points: [
            "No es una prueba de carrera.",
            "No es un diagnóstico psicológico.",
            "No es un perfil final de estudiante.",
            "No reemplaza la orientación de adultos de confianza.",
          ],
        },
        {
          title: "Cómo hablar sobre los resultados",
          body:
            "Si tu estudiante completa la demo, trata la experiencia como inicio de conversación.",
          points: [
            "Pregunta qué se sintió verdadero, interesante o sorprendente.",
            "Evita decir que la demo prueba quién es.",
            "Anima múltiples talentos e intereses cambiantes.",
            "Recuérdale que su valor no depende de una carrera.",
          ],
        },
        {
          title: "Seguridad estudiantil",
          body:
            "Los estudiantes deben sentirse más abiertos, no más encerrados. El uso más seguro de TruePath AI es reflexivo y sin presión.",
          points: [
            "Los estudiantes deben poder saltar preguntas sensibles.",
            "La incertidumbre debe normalizarse.",
            "Los adultos deben evitar usar temas de exploración para limitar oportunidades.",
          ],
        },
        {
          title: "Expectativas futuras de consentimiento",
          body:
            "Antes de almacenar datos reales de estudiantes en un piloto o versión de producción, deben aclararse las expectativas de consentimiento familiar y asentimiento estudiantil.",
          points: [
            "Las familias deben saber qué información se recopila.",
            "Las familias deben saber quién puede verla.",
            "Las familias deben saber cómo solicitar revisión o eliminación cuando aplique.",
          ],
        },
      ],
    },
  },
  login: {
    eyebrow: "Demo pública MVP",
    title: "Las cuentas no están activas en esta versión pública de demostración.",
    description:
      "Los sistemas de cuenta segura están planeados para una fase posterior, después de definir completamente consentimiento, privacidad y responsabilidades de datos escolares. Esta demo no crea cuentas ni almacena información estudiantil.",
    note:
      "Esta ruta es intencionalmente un marcador de posición para la base MVP. Los flujos reales deben agregarse solo después de definir contratos de producto, privacidad y ética.",
  },
};
