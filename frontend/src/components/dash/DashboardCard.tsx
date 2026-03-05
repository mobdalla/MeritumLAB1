import { ChevronDown } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function DashboardCard({ title, children, className = '' }: DashboardCardProps) {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-700 font-medium">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronDown size={20} />
        </button>
      </div>
      {children}
    </div>
  );
}
