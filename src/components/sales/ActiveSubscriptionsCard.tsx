import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { FaArrowDown } from 'react-icons/fa';

// Sample data (replace with actual values)
const activeSubscriptionsData = [
    { value: 0 },
    { value: 1200 },
    { value: 800 },
    { value: 1300 },
    { value: 1000 },
    { value: 1100 },
    { value: 900 },
    { value: 1250 },
    { value: 1400 },
];

export default function ActiveSubscriptionsCard() {
    return (
        <div className="bg-white rounded-xl shadow pt-4  pl-4 w-full max-w-sm">
            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Active Subscriptions</h3>

            <div className='flex justify-center  items-center mt-6'>
                <div>
                    {/* Value */}
                    <h2 className="text-2xl font-bold text-gray-800">15,369.59</h2>

                    {/* Change Indicator */}
                    <div className=" text-sm text-yellow-500  mt-1 mb-3">
                        <FaArrowDown className="text-xs" />
                        <span>% 52.36</span>
                        <span className="text-gray-500 ml-1">since <br /> last Week</span>
                    </div>
                </div>
                {/* Line Chart */}
                <div className="w-full h-24"> 
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={activeSubscriptionsData}>
                            <defs>
                                <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.8} />
                                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #ccc',
                                    fontSize: '12px',
                                }}
                                formatter={(value: number) => [`$${value}`, 'Active Subscriptions']}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#f59e0b"
                                strokeWidth={2}
                                fill="url(#orangeGradient)"
                                dot={false}
                                isAnimationActive={true}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>



        </div>
    );
}
