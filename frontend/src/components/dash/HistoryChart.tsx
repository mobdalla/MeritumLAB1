
import { DashboardCard } from './DashboardCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { name: '', value: 28 },
  { name: '', value: 32 },
  { name: '', value: 38 },
  { name: '', value: 43.5, label: '43,5%' },
  { name: '', value: 35 },
  { name: '', value: 30 },
  { name: '', value: 36.7, label: '36,7%' },
  { name: '', value: 42 },
];

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  
  if (payload.label) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={6} fill="#f97316" stroke="#fff" strokeWidth={2} />
        <foreignObject x={cx - 35} y={cy - 40} width={70} height={30}>
          <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold text-center">
            {payload.label}
          </div>
        </foreignObject>
      </g>
    );
  }
  
  return <circle cx={cx} cy={cy} r={4} fill="#f97316" stroke="#fff" strokeWidth={2} />;
};

export function HistoryChart() {
  return (
    <DashboardCard title="History" className="lg:col-span-2">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis 
            stroke="#6b7280" 
            domain={[0, 50]}
            ticks={[10, 20, 30, 40, 50]}
            tickFormatter={(value) => `${value}%`}
          />
          <ReferenceLine y={10} stroke="#60a5fa" strokeDasharray="3 3" label={{ value: '10%', position: 'right', fill: '#60a5fa' }} />
          <ReferenceLine y={20} stroke="#60a5fa" strokeDasharray="3 3" label={{ value: '20%', position: 'right', fill: '#60a5fa' }} />
          <ReferenceLine y={30} stroke="#60a5fa" strokeDasharray="3 3" label={{ value: '30%', position: 'right', fill: '#60a5fa' }} />
          <ReferenceLine y={40} stroke="#60a5fa" strokeDasharray="3 3" label={{ value: '40%', position: 'right', fill: '#60a5fa' }} />
          <ReferenceLine y={50} stroke="#60a5fa" strokeDasharray="3 3" label={{ value: '50%', position: 'right', fill: '#60a5fa' }} />
          <Line 
            type="natural" 
            dataKey="value" 
            stroke="#f97316" 
            strokeWidth={3}
            dot={<CustomDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardCard>
  );
}
