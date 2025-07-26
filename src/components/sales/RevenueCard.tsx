import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample real data
const chartData = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 5200 },
  { name: 'Wed', revenue: 6000 },
  { name: 'Thu', revenue: 3000 },
  { name: 'Fri', revenue: 4500 },
  { name: 'Sat', revenue: 3500 },
  { name: 'Sun', revenue: 2700 },
];

export default function RevenueCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row justify-between items-center gap-6 w-full max-w-4xl">
      {/* Left Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">Active Projects</h3>
        <p className="text-sm text-gray-500 mb-4">
          In last 30 days revenue from subscription.
        </p>

        <div className="flex gap-8">
          {/* This Week */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">15,369.59</h2>
            <div className="flex items-center text-sm text-red-600 gap-1 mt-1">
              <FontAwesomeIcon icon={faArrowDown} className='text-xs'/>
              <span>% 52.36</span>
              <span className="text-gray-500">This Week</span>
            </div>
          </div>

          {/* This Month */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">3,269.89</h2>
            <div className="flex items-center text-sm text-teal-600 gap-1 mt-1">
              <FontAwesomeIcon icon={faArrowUp} className='text-xs'/>
              <span>% 15.36</span>
              <span className="text-gray-500">This Month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content: Real Bar Chart */}
      <div className="w-full sm:w-64 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" hide />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                padding: '4px 8px',
                color: '#000',
              }}
              labelStyle={{ display: 'none' }}
              formatter={(value: number) => [`₹${value}`, 'Revenue']}
            />
            <Bar dataKey="revenue" fill="#5b21b6" radius={[4, 4, 0, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
