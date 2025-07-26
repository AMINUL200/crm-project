import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { FaDollarSign } from 'react-icons/fa';

const data = [
  { value: 400 },
  { value: 300 },
  { value: 500 },
  { value: 250 },
  { value: 400 },
  { value: 350 },
  { value: 500 },
];

const TotalDepositCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow border ">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm text-gray-500">Total Deposit</p>
          <h2 className="text-2xl font-bold text-[#111827]">$1200.00</h2>
        </div>
        <div className="bg-purple-700 text-white rounded-lg p-2">
          <FaDollarSign size={18} />
        </div>
      </div>
      <div className="h-16 -mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6B21A8" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6B21A8" stopOpacity={0} />
              </linearGradient>
            </defs>
             <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                fontSize: '12px',
                padding: '4px 8px',
              }}
              formatter={(value) => [`$${value}`, 'Deposit']}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6B21A8"
              strokeWidth={2}
              dot={false}
              fillOpacity={1}
              fill="url(#lineGradient)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalDepositCard;
