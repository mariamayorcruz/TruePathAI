const nodes = [
  { id: "self", x: 50, y: 52, size: 8, label: "Self-awareness" },
  { id: "curiosity", x: 23, y: 25, size: 5, label: "Curiosity" },
  { id: "growth", x: 78, y: 28, size: 5, label: "Growth" },
  { id: "creativity", x: 25, y: 76, size: 5, label: "Creativity" },
  { id: "pathways", x: 77, y: 73, size: 5, label: "Pathways" },
  { id: "voice", x: 50, y: 16, size: 4, label: "Voice" },
  { id: "confidence", x: 50, y: 88, size: 4, label: "Confidence" },
] as const;

const connections = [
  ["self", "curiosity"],
  ["self", "growth"],
  ["self", "creativity"],
  ["self", "pathways"],
  ["curiosity", "voice"],
  ["growth", "voice"],
  ["creativity", "confidence"],
  ["pathways", "confidence"],
] as const;

const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));

export function ExplorationVisual() {
  return (
    <div
      className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-6 text-white"
      aria-label="Abstract map of student potential, growth, and future pathways"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(125,211,252,0.24),transparent_34%),radial-gradient(circle_at_22%_18%,rgba(168,85,247,0.18),transparent_26%),radial-gradient(circle_at_82%_76%,rgba(45,212,191,0.16),transparent_26%)]" />
      <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10 bg-cyan-200/5 blur-sm motion-safe:animate-pulse" />
      <div className="absolute inset-x-8 top-8 flex items-center justify-between">
        <p className="text-sm font-medium text-cyan-100">Exploration map</p>
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur">
          No fixed path
        </span>
      </div>

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        role="img"
        aria-labelledby="exploration-visual-title exploration-visual-description"
      >
        <title id="exploration-visual-title">Exploration network</title>
        <desc id="exploration-visual-description">
          A calm constellation of connected nodes representing self-awareness,
          curiosity, creativity, growth, confidence, and possible pathways.
        </desc>
        <defs>
          <linearGradient id="path-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.72" />
            <stop offset="52%" stopColor="#a78bfa" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.64" />
          </linearGradient>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connections.map(([fromId, toId]) => {
          const from = nodeMap[fromId];
          const to = nodeMap[toId];

          return (
            <line
              key={`${fromId}-${toId}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#path-gradient)"
              strokeLinecap="round"
              strokeWidth="0.45"
              opacity="0.74"
            />
          );
        })}

        <path
          d="M20 57 C34 38, 47 34, 63 43 S83 58, 76 76"
          fill="none"
          stroke="#bae6fd"
          strokeDasharray="1.5 2.8"
          strokeLinecap="round"
          strokeWidth="0.35"
          opacity="0.48"
        />
        <path
          d="M27 31 C44 24, 59 23, 75 34"
          fill="none"
          stroke="#ddd6fe"
          strokeDasharray="1.2 3"
          strokeLinecap="round"
          strokeWidth="0.32"
          opacity="0.42"
        />

        {nodes.map((node) => (
          <g key={node.id} filter="url(#soft-glow)">
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size + 2.8}
              fill="#67e8f9"
              opacity={node.id === "self" ? "0.11" : "0.08"}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.id === "self" ? "#f8fafc" : "#bae6fd"}
              opacity="0.94"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size / 2.4}
              fill={node.id === "self" ? "#0f172a" : "#0284c7"}
              opacity="0.78"
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-3">
        {["Notice patterns", "Explore possibilities", "Grow with agency"].map(
          (label) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/10 p-3 text-xs font-medium text-slate-100 backdrop-blur"
            >
              {label}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
