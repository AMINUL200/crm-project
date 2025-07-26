import { BarChart, Bar,  YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ExpensesCard = () => {
    const expensesValue = 920.035;
    const percentage = 45;

    // Data for the bar chart (now showing monthly data for better horizontal display)
    const barData = [
        { name: 'Jan', value: 15 },
        { name: 'Feb', value: 25 },
        { name: 'Mar', value: 35 },
        { name: 'Apr', value: 20 },
        { name: 'May', value: 45 }
    ];

    return (
        <div className=" text-white bg-[#F8B940] p-4 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
                <div className="revenue-date">
                    <span className="text-black font-bold">Expenses</span>
                    <h4 className="text-black">${expensesValue.toLocaleString()}</h4>
                </div>
                <div className="">
                    <span className="bg-white p-4 px-5 rounded-4xl">
                        <a href="#">
                            <FontAwesomeIcon icon={faPlus} className='text-black' />
                        </a>
                    </span>
                </div>
            </div>
            <div className=" pb-4 custome-tooltip flex items-center">
                <div className="w-full h-20">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={barData}
                            layout="horizontal"
                            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                        >
                            
                            <YAxis
                                type="number"
                                hide
                            />
                            <Bar
                                dataKey="value"
                                radius={[4, 4, 0, 0]}
                                animationDuration={1500}
                                animationEasing="ease-in-out"
                                isAnimationActive={true}
                            >
                                {barData.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={index % 2 === 0 ? '#ffffff' : '#000000'} // Even = white, Odd = black
                                    />
                                ))}
                            </Bar>
                            <Tooltip
                                cursor={{ fill: 'rgba(0,0,0,0.1)' }}
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    fontSize: '12px',
                                    color: '#000',
                                    borderRadius: '6px',
                                    padding: '5px',
                                }}
                            />
                        </BarChart>

                    </ResponsiveContainer>
                </div>
                <div className="relative ml-4">
                    <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
                        <div
                            className="absolute inset-0 rounded-full border-4 border-transparent"
                            
                        ></div>
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold">
                            {percentage}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpensesCard;