
import { DashboardCard } from './DashboardCard';

export function SubscriptionCard() {
  return (
    <DashboardCard title="Total Subscriptions">
      <div className="text-center">
        <div className="text-5xl font-bold text-orange-500 mb-2">334.994</div>
        <div className="flex items-center justify-center gap-4 text-sm">
          <span className="text-orange-500">+ 45</span>
          <span className="text-orange-500">+ 23</span>
          <span className="text-orange-500">+ 44</span>
        </div>
      </div>
    </DashboardCard>
  );
}
