type AssessmentProgressProps = {
  currentQuestionIndex: number;
  totalQuestions: number;
  labels: {
    question: string;
    of: string;
  };
  progressStepHint: string;
};

export function AssessmentProgress({
  currentQuestionIndex,
  totalQuestions,
  labels,
  progressStepHint,
}: AssessmentProgressProps) {
  const current = currentQuestionIndex + 1;
  const progress = Math.round((current / totalQuestions) * 100);
  const phrase = `${labels.question} ${current} ${labels.of} ${totalQuestions}`;

  return (
    <div aria-label={`${phrase}. ${progressStepHint}`}>
      <div className="mb-3 flex items-center justify-between text-sm font-medium text-slate-600">
        <span>{phrase}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-500">{progressStepHint}</p>
    </div>
  );
}
