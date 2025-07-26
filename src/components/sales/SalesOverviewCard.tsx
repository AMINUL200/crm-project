import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const salesData = [
  { day: 'S', value: 2400 },
  { day: 'M', value: 3000 },
  { day: 'T', value: 1600 },
  { day: 'W', value: 1200 },
  { day: 'T', value: 2000 },
  { day: 'F', value: 2800 },
  { day: 'S', value: 1900 },
  { day: 'S', value: 2200 },
  { day: 'M', value: 2700 },
  { day: 'T', value: 2300 },
  { day: 'W', value: 2100 },
  { day: 'T', value: 2000 },
  { day: 'F', value: 3100 },
  { day: 'S', value: 3700 },
  { day: 'S', value: 1500 },
  { day: 'M', value: 1700 },
  { day: 'T', value: 1900 },
  { day: 'W', value: 1800 },
  { day: 'T', value: 2200 },
  { day: 'F', value: 3000 },
  { day: 'S', value: 3800 },
  { day: 'S', value: 2500 },
  { day: 'M', value: 2400 },
  { day: 'T', value: 2600 },
  { day: 'W', value: 2300 },
  { day: 'T', value: 2000 },
  { day: 'F', value: 3200 },
  { day: 'S', value: 4000 },
  { day: 'M', value: 2700 },
  { day: 'T', value: 2500 },
];

export default function SalesOverviewCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-4xl">
      {/* Top Info */}
      <div className="flex justify-between items-start mb-9">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Sales Overview</h3>
          <p className="text-sm text-gray-500">
            In 30 days sales of product subscription.{' '}
            <a href="#" className="text-purple-700 hover:underline">See Details</a>
          </p>
        </div>
        <span className="text-gray-500 text-sm">500 Followers</span>
      </div>

      {/* Revenue Total */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">$55,5252</h2>

      {/* Chart */}
      <div className="h-46 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', fontSize: '12px' }}
              formatter={(value: number) => [`$${value}`, 'Sales']}
            />
            <Bar dataKey="value" fill="#5b21b6" radius={[4, 4, 0, 0]} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
