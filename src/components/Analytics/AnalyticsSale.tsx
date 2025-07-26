import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faBoxOpen,
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// Define types for the chart data
interface ChartData {
    name: string;
    Earnings: number;
    Expenses: number;
}

const chartData: ChartData[] = [
    { name: "", Earnings: 2000, Expenses: 1000 },
    { name: "", Earnings: 1500, Expenses: 800 },
    { name: "", Earnings: 3000, Expenses: 1200 },
    { name: "", Earnings: 1200, Expenses: 700 },
    { name: "", Earnings: 2500, Expenses: 900 },
    { name: "", Earnings: 1800, Expenses: 600 },
    { name: "", Earnings: 2700, Expenses: 1100 },
    { name: "", Earnings: 1600, Expenses: 700 },
    { name: "", Earnings: 2200, Expenses: 900 },
    { name: "", Earnings: 1400, Expenses: 800 },
];

// Define props for the Card component
interface CardProps {
    icon: IconProp;
    title: string;
    value: string;
    color: string;
}

const Card: React.FC<CardProps> = ({ icon, title, value, color }) => (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
        <div className="flex items-center gap-3">
            <div
                className={`p-3 rounded-lg text-white`}
                style={{ backgroundColor: color }}
            >
                <FontAwesomeIcon icon={icon} className="text-lg" />
            </div>
            <div>
                <p className="text-xl font-semibold">{value}</p>
                <p className="text-sm text-gray-500">{title}</p>
            </div>
        </div>
        <div className="text-gray-400 text-lg">{">"}</div>
    </div>
);

const AnalyticsSale: React.FC = () => {
    return (
        <div className="bg-[#f6f3ef]  p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Left side cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card icon={faCartShopping} title="Sales" value="$5,536" color="#f87171" />
                    <Card icon={faUser} title="Customer" value="4,613k" color="#a78bfa" />
                    <Card icon={faBoxOpen} title="Products" value="1,536k" color="#60a5fa" />
                    <Card icon={faDollarSign} title="Profit" value="1,536k" color="#fbbf24" />
                </div>

                {/* Right side chart */}
                <div className="bg-white shadow-md rounded-lg px-6 pt-6">
                    <h2 className="text-lg font-semibold ">Total Sale</h2>
                    <div className="w-full h-45">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}
                                barCategoryGap={20}
                                barSize={20}
                                height={300}
                            >
                                <XAxis dataKey="name" tick={false} axisLine={false} tickLine={false} />
                                <Tooltip cursor={false} />
                                {/* Expenses bottom */}
                                <Bar dataKey="Expenses" stackId="a" fill="#4c1d95" radius={[0, 0, 0, 0]}   />
                                {/* Earnings top */}
                                <Bar dataKey="Earnings" stackId="a" fill="#fbbf24" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsSale;