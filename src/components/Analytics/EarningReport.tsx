import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faMoneyBillWave, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
    BarChart,
    LineChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    TooltipProps,
} from "recharts";
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface CardData {
    value: number;
}

interface CardItem {
    title: string;
    amount: string;
    icon: IconDefinition; // FontAwesome icon type
    color: string;
    lineColor: string;
    data: CardData[];
}

interface BarChartData {
    name: string;
    uv: number;
    pv: number;
}

const cards: CardItem[] = [
    {
        title: "Earning",
        amount: "$2,256",
        icon: faDollarSign,
        color: "text-yellow-500",
        lineColor: "#fbbf24",
        data: [
            { value: 20 },
            { value: 35 },
            { value: 25 },
            { value: 45 },
            { value: 30 },
            { value: 50 },
            { value: 40 },
        ],
    },
    {
        title: "Profit",
        amount: "$3,367",
        icon: faMoneyBillWave,
        color: "text-purple-600",
        lineColor: "#5e2dbb",
        data: [
            { value: 30 },
            { value: 25 },
            { value: 40 },
            { value: 35 },
            { value: 45 },
            { value: 50 },
            { value: 55 },
        ],
    },
    {
        title: "Expense",
        amount: "$3,567",
        icon: faCalendarAlt,
        color: "text-sky-500",
        lineColor: "#0ea5e9",
        data: [
            { value: 50 },
            { value: 45 },
            { value: 35 },
            { value: 40 },
            { value: 30 },
            { value: 20 },
            { value: 25 },
        ],
    },
];

const data: BarChartData[] = [
    { name: "A", uv: 96, pv: 80 },
    { name: "B", uv: 60, pv: 40 },
    { name: "C", uv: 90, pv: 55 },
    { name: "D", uv: 96, pv: 80 },
    { name: "E", uv: 60, pv: 40 },
    { name: "F", uv: 90, pv: 55 },
];
interface LineChartPoint {
  value: number;
}

// Each tooltip entry
interface TooltipEntry<T = LineChartPoint> {
  value: number;
  name: string;
  payload: T;       // type it properly instead of any
  color: string;
  dataKey: string | number;
}
interface CustomTooltipProps extends TooltipProps<number, string> {
    active?: boolean;
    payload?: {
        value: number;
        name: string;
        payload: TooltipEntry<LineChartPoint>[];
        color: string;
        dataKey: string | number;
    }[];
}


// Custom tooltip component for the line chart
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-purple-700 text-white text-sm px-3 py-2 rounded-md shadow">
                Net Profit: <span className="font-bold">${payload[0].value} thousands</span>
            </div>
        );
    }
    return null;
};

export default function EarningReport() {
    return (
        <div className="bg-[#f6f2f7] p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Reports Of Earning</h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {cards.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-4 rounded-md border shadow-sm flex flex-col justify-between"
                    >
                        {/* Header */}
                        <div className="flex items-center space-x-3 mb-2">
                            <div
                                className={`p-3 rounded-md bg-opacity-10 ${item.color}`}
                                style={{ backgroundColor: `${item.lineColor}22` }} // light bg
                            >
                                <FontAwesomeIcon icon={item.icon} className={`${item.color} text-xl`} />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-500">{item.title}</h3>
                                <p className="font-bold text-gray-800">{item.amount}</p>
                            </div>
                        </div>

                        {/* Line chart */}
                        <div className="h-20">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={item.data}>
                                    <Tooltip content={<CustomTooltip />} cursor={false} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke={item.lineColor}
                                        strokeWidth={2}
                                        dot={{ r: 4, fill: item.lineColor }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center">
                {/* Middle Value */}
                <div className="text-left mb-4">
                    <p className="text-3xl font-bold">$5,6641</p>
                    <p className="text-sm text-gray-400">Lorem Ipsum is simply dummy text</p>
                </div>
                {/* Chart */}
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} barCategoryGap="20%">
                            <XAxis dataKey="name" hide />
                            <YAxis hide />
                            <Tooltip />
                            <Bar dataKey="uv" fill="#5e2dbb" radius={[8, 8, 0, 0]}>
                                <LabelList dataKey="uv" position="top" fill="#fff" />
                            </Bar>
                            <Bar dataKey="pv" fill="#fbbf24" radius={[8, 8, 0, 0]}>
                                <LabelList dataKey="pv" position="top" fill="#fff" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}