import { BarChart, Bar, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const data = [
    { value: 20 },
    { value: 35 },
    { value: 45 },
    { value: 30 },
    { value: 50 },
    { value: 28 },
];

const RevenueCard = () => {
    
    const percentage = 45;

    return (
        <div className="bg-purple-700 text-white p-4 rounded-xl  shadow-lg h-[200px] ">
            {/* Top Section */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm lowercase">revenue</p>
                    <h2 className="text-2xl font-bold">$310.435</h2>
                </div>
                {/* Placeholder for avatars and count */}
                <div className="flex items-center -space-x-3">
                    {/* First Avatar */}
                    <img
                        src="./images/profile/pic555.jpg"
                        alt=""
                        className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"
                    />
                    {/* Second Avatar */}
                    <img
                        src="./images/profile/pic555.jpg"
                        alt=""
                        className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"
                    />
                    {/* 25+ Circle */}
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-sm font-semibold text-gray-900">
                        25+
                    </div>
                </div>

            </div>

            {/* Chart and Percentage */}
            <div className="flex items-end justify-between">
                <div className="h-20 w-2/3">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #ccc',
                                    fontSize: '12px',
                                    padding: '4px 8px',
                                    color: '#000',
                                }}
                                labelStyle={{ display: 'none' }}
                                formatter={(value) => [`$${value}`, 'Revenue']}
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                {data.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={index % 2 === 0 ? '#F8B940' : '#fff'} // orange and light purple
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Percentage */}
                <div className="flex flex-col items-center text-xs font-semibold">
                    <div className="bg-white text-purple-700 p-1 rounded-full mb-1">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

export default RevenueCard;
