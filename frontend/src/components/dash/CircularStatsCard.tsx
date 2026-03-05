
import { DashboardCard } from './DashboardCard';

export function CircularStatsCard() {
  return (
    <DashboardCard title="Stats">
      <div className="flex items-center justify-center gap-6">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#f97316"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 56 * 0.75} ${2 * Math.PI * 56}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">$34,67</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-16 bg-orange-500 h-2 rounded"></div>
            <span className="text-sm text-gray-600">Lorem Ipsum</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 bg-orange-500 h-2 rounded"></div>
            <span className="text-sm text-gray-600">Lorem Ipsum</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 bg-orange-500 h-2 rounded"></div>
            <span className="text-sm text-gray-600">Lorem Ipsum</span>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad.
      </p>
    </DashboardCard>
  );
}
