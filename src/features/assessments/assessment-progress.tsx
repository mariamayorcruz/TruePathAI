type AssessmentProgressProps = {
  currentQuestionIndex: number;
  totalQuestions: number;
  labels: {
    question: string;
    of: string;
  };
};

export function AssessmentProgress({
  currentQuestionIndex,
  totalQuestions,
  labels,
}: AssessmentProgressProps) {
  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <div
      aria-label={`${labels.question} ${currentQuestionIndex + 1} ${labels.of} ${totalQuestions}`}
    >
      <div className="mb-3 flex items-center justify-between text-sm font-medium text-slate-600">
        <span>
          {labels.question} {currentQuestionIndex + 1} {labels.of} {totalQuestions}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
