interface ProgressBarProps {
  current: number;
  total: number;
  percentage: number;
}

export function ProgressBar({ current, total, percentage }: ProgressBarProps) {
  return (
    <div className="bg-indigo-50 px-8 py-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-indigo-900">Progresso Totale</span>
        <span className="text-indigo-700">
          {current} / {total}
        </span>
      </div>
      <div className="w-full bg-indigo-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-indigo-600">{percentage.toFixed(0)}%</span>
      </div>
    </div>
  );
}
