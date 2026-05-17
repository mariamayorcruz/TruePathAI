import type {
  AssessmentModeId,
} from "@/features/assessments/types";
import type { AssessmentQuestionType } from "@/features/assessments/content";

/** Spanish-only display strings. IDs, interpretations, accents, icons come from English source modes. */

export type SpanishQuestionOverlay = {
  dimension: string;
  prompt: string;
  helper: string;
  scenario?: string;
  placeholder?: string;
  options?: Record<string, { label: string; description?: string }>;
};

export type SpanishModeOverlay = {
  phase: string;
  title: string;
  description: string;
  focusAreas: string[];
  questions: Record<string, SpanishQuestionOverlay>;
};

export const spanishAssessmentIntro = {
  eyebrow: "Base reflexiva guiada",
  title: "Un comienzo cuidadoso antes de que exista cualquier perfil.",
  description:
    "Esta experiencia abre posibilidades. No define tu futuro. Tus respuestas por ahora se quedan solo en esta pantalla y ayudan a imaginar una experiencia futura de perfil guiado.",
  safetyReminder:
    "Esta experiencia abre posibilidades. No define tu futuro.",
} as const;

export const spanishQuestionTypeLabels: Record<AssessmentQuestionType, string> =
  {
    "scenario-choice": "Elección de escenario",
    "preference-choice": "Preferencia",
    "reflection-prompt": "Reflexión abierta",
    "visual-card-choice": "Elección visual",
  };

export const spanishModeOverlays: Record<AssessmentModeId, SpanishModeOverlay> = {
  discovery: {
    phase: "Modo descubrimiento",
    title: "Curiosidad y creatividad",
    description:
      "Un conjunto suave de preguntas sobre curiosidad, creatividad, aprendizaje, emociones y exploración.",
    focusAreas: [
      "Curiosidad",
      "Creatividad",
      "Aprendizaje",
      "Emociones",
      "Exploración",
    ],
    questions: {
      "discovery-scenario": {
        dimension: "Curiosidad",
        prompt:
          "Imagina que tu clase empieza un proyecto nuevo. ¿Qué te gustaría hacer primero?",
        helper: "No hay una respuesta perfecta. Elige lo que más se parezca a ti hoy.",
        scenario:
          "Tu grupo recibe una caja grande de materiales y una pregunta abierta para explorar.",
        options: {
          ask: {
            label: "Hacer preguntas",
            description: "Querría entender qué podríamos descubrir.",
          },
          make: {
            label: "Empezar a construir",
            description: "Querría probar ideas con las manos.",
          },
          organize: {
            label: "Ordenar las piezas",
            description: "Querría ver qué tenemos y armar un plan.",
          },
        },
      },
      "discovery-preference": {
        dimension: "Aprendizaje",
        prompt: "Cuando algo es nuevo, ¿qué suele ayudarte a aprender?",
        helper: "Tu forma de aprender puede cambiar según el momento.",
        options: {
          show: { label: "Ver un ejemplo" },
          try: { label: "Probarlo yo mismo o yo misma" },
          talk: { label: "Hablarlo con alguien" },
          quiet: { label: "Pensar en silencio primero" },
        },
      },
      "discovery-reflection": {
        dimension: "Emociones",
        prompt:
          "¿Qué es algo que últimamente te hizo sentir orgullo, curiosidad o emoción?",
        helper: "Cuenta un momento pequeño. Puedes escribir una frase o unas palabras.",
        placeholder: "Noté que me sentí...",
      },
      "discovery-visual": {
        dimension: "Exploración",
        prompt: "¿Qué tipo de exploración te resulta más interesante ahora mismo?",
        helper: "Elige una tarjeta que se sienta acogedora, no permanente.",
        options: {
          build: {
            label: "Construir",
            description: "Hacer, dibujar, probar o crear algo nuevo.",
          },
          wonder: {
            label: "Asombrarse",
            description: "Hacer preguntas y averiguar cómo funcionan las cosas.",
          },
          connect: {
            label: "Conectar",
            description: "Compartir ideas y entender a las personas.",
          },
        },
      },
    },
  },

  potential: {
    phase: "Modo conciencia del potencial",
    title: "Fortalezas y entornos",
    description:
      "Un conjunto reflexivo sobre fortalezas, energía social, resolución de problemas, intereses y entornos.",
    focusAreas: [
      "Fortalezas",
      "Energía social",
      "Resolución de problemas",
      "Intereses",
      "Entornos",
    ],
    questions: {
      "potential-scenario": {
        dimension: "Resolución de problemas",
        prompt:
          "Un proyecto en equipo se siente trabado. ¿Qué intentarías de forma natural?",
        helper:
          "Se trata de notar patrones, no de elegir un rol para siempre.",
        scenario:
          "Tu grupo tiene ideas, pero nadie tiene claro qué hacer después.",
        options: {
          clarify: {
            label: "Aclarar la meta",
            description:
              "Podría ayudar a todas las personas a entender qué problema resolvemos.",
          },
          encourage: {
            label: "Animar al equipo",
            description: "Podría ayudar a que todas se sientan cómodas al compartir.",
          },
          experiment: {
            label: "Probar un experimento rápido",
            description: "Podría probar una idea y aprender con el intento.",
          },
        },
      },
      "potential-preference": {
        dimension: "Energía social",
        prompt: "¿Qué entorno suele ayudarte a pensar mejor?",
        helper:
          "Muchas personas necesitan espacios distintos para tareas distintas.",
        options: {
          solo: { label: "Tiempo tranquilo solo o sola" },
          pair: { label: "Una pareja reflexiva de trabajo" },
          group: { label: "Un grupo animado" },
          mixed: { label: "Una mezcla de solo y junto a otras personas" },
        },
      },
      "potential-reflection": {
        dimension: "Intereses",
        prompt:
          "¿Cuál es un tema, actividad o problema al que sigues volviendo?",
        helper:
          "Puede ser académico, creativo, social, práctico o personal.",
        placeholder: "Sigo regresando a...",
      },
      "potential-visual": {
        dimension: "Fortalezas",
        prompt: "¿Qué área de fortaleza se siente más viva para ti últimamente?",
        helper:
          "Es una pista para explorar, no una categoría donde debas quedarte.",
        options: {
          ideas: {
            label: "Ideas",
            description: "Imaginar, cuestionar, hacer lluvia de ideas o diseñar.",
          },
          people: {
            label: "Personas",
            description: "Escuchar, liderar, ayudar o comunicar.",
          },
          systems: {
            label: "Sistemas",
            description: "Organizar, resolver, analizar o mejorar.",
          },
        },
      },
    },
  },

  direction: {
    phase: "Modo dirección futura",
    title: "Caminos y planeación futura",
    description:
      "Un conjunto cuidadoso sobre caminos, exploración profesional modesta (sin promesas rígidas), liderazgo, habilidades y planes futuros.",
    focusAreas: [
      "Caminos",
      "Exploración de futuros",
      "Liderazgo",
      "Habilidades",
      "Planeación",
    ],
    questions: {
      "direction-scenario": {
        dimension: "Caminos",
        prompt:
          "Encuentras tres opciones futuras que te resultan interesantes. ¿Qué podría ayudarte a explorarlas?",
        helper:
          "Explorar varias posibilidades es saludable y normal.",
        scenario:
          "Estás comparando posibilidades, y ninguna tiene que convertirse hoy en una respuesta final.",
        options: {
          research: {
            label: "Investigar ejemplos reales",
            description:
              "Podría aprender qué hacen en la práctica las personas en esos caminos.",
          },
          experience: {
            label: "Probar una experiencia pequeña",
            description:
              "Podría probar un proyecto, clase, voluntariado u observación breve.",
          },
          discuss: {
            label: "Hablarlo con personas de confianza",
            description:
              "Podría preguntar qué observan y qué saben las personas que me importan.",
          },
        },
      },
      "direction-preference": {
        dimension: "Habilidades",
        prompt:
          "¿Qué tipo de crecimiento en habilidades te parece más útil explorar ahora?",
        helper:
          "Se trata de próximos pasos, no de decidir todo tu futuro hoy.",
        options: {
          communication: { label: "Comunicación" },
          creative: {
            label: "Resolución creativa de problemas",
          },
          technical: {
            label: "Habilidades técnicas o analíticas",
          },
          leadership: {
            label: "Liderazgo y colaboración",
          },
        },
      },
      "direction-reflection": {
        dimension: "Planeación futura",
        prompt:
          "¿Qué posibilidad futura te da curiosidad, incluso si no tienes claridad?",
        helper: "La curiosidad ya es suficiente. No necesitas un plan final.",
        placeholder: "Tengo curiosidad sobre...",
      },
      "direction-visual": {
        dimension: "Liderazgo",
        prompt: "¿Qué forma de aportar se siente más natural últimamente?",
        helper:
          "El liderazgo puede verse callado, creativo, práctico o relacional.",
        options: {
          guide: {
            label: "Guía",
            description: "Ayudar a avanzar hacia una meta compartida.",
          },
          craft: {
            label: "Oficio",
            description: "Construir calidad con enfoque y habilidad.",
          },
          bridge: {
            label: "Puente",
            description: "Conectar personas, ideas y oportunidades.",
          },
        },
      },
    },
  },
};
