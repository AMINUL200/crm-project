import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
const ProgressCard = () => {
    // Data for the progress circle (75% complete)
    const progressData = [
        { name: 'Completed', value: 75 },
        { name: 'Remaining', value: 25 },
    ];

    const COLORS = ['#4f46e5', '#f3f4f6']; // indigo-600 for progress, gray-100 for remaining

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-xs">
            <div className="flex flex-col items-center">
                {/* Progress Circle with Recharts */}
                <div className="relative w-40 h-40 mb-5">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={progressData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={80}
                                startAngle={90}
                                endAngle={-270}
                                paddingAngle={0}
                                dataKey="value"
                            >
                                {progressData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        stroke="none"
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-gray-800">75%</span>
                    </div>
                </div>

                {/* Card Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">My Progress</h3>
                <p className="text-gray-500 text-center text-sm mb-4 px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-800 text-sm text-white px-5 py-2 rounded-2xl font-medium transition-colors">
                    More Details
                </button>
            </div>
        </div>
    );
};

export default ProgressCard;