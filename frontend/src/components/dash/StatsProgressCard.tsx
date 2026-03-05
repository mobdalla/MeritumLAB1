

import { DashboardCard } from './DashboardCard';

interface StatBarProps {
  label: string;
  value: number;
  color: string;
}

function StatBar({ label, value, color }: StatBarProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export function StatsProgressCard() {
  return (
    <DashboardCard title="Stats">
      <div className="mb-4">
        <div className="text-4xl font-bold text-orange-500">566.975</div>
      </div>
      <StatBar label="Lorem Ipsum" value={85} color="#f97316" />
      <StatBar label="Lorem Ipsum" value={70} color="#f97316" />
      <StatBar label="Lorem Ipsum" value={90} color="#f97316" />
      <StatBar label="Lorem Ipsum" value={60} color="#f97316" />
    </DashboardCard>
  );
}
