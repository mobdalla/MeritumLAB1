
import { DashboardCard } from './DashboardCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value1: 3, value2: 2 },
  { name: 'B', value1: 2.5, value2: 1.8 },
  { name: 'C', value1: 3.2, value2: 2.2 },
  { name: 'D', value1: 2.8, value2: 1.5 },
  { name: 'E', value1: 3.5, value2: 2.5 },
  { name: 'F', value1: 3, value2: 2 },
  { name: 'G', value1: 2.7, value2: 1.7 },
];

export function SkillsBarChart() {
  return (
    <DashboardCard title="Skills Earned">
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" fontSize={12} domain={[0, 4]} />
          <Bar dataKey="value1" fill="#374151" radius={[4, 4, 0, 0]} />
          <Bar dataKey="value2" fill="#f97316" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad.
      </p>
    </DashboardCard>
  );
}
