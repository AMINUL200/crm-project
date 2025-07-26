import {
    faChartLine,
    faBagShopping,
    faCalendar,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { name: "Mon", value: 120 },
    { name: "Tue", value: 300 },
    { name: "Wed", value: 180 },
    { name: "Thu", value: 260 },
    { name: "Fri", value: 400 },
];
const AnalyticsBanner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-8  ">
            {/* Left: Congratulations Card */}
            <div className="lg:col-span-6 bg-white rounded-xl shadow p-6 flex justify-between flex-col md:flex-row">k
                <div className="flex flex-row justify-between gap-2">
                    <div className="">
                        <h2 className="text-lg font-semibold mb-4">
                            Congratulations <span className="font-bold text-black">Hanu!! 🎉</span>
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">Best seller of the week</p>
                        <p className="text-sm text-gray-600 mb-2">
                            Lorem Ipsum is simply dummy <span role="img" aria-label="emoji">😎</span> text of the printing and typesetting industry.
                        </p>
                        <button className="mt-3 px-4 py-2 bg-purple-800 text-white text-sm rounded-lg hover:bg-purple-900">
                            View Profile
                        </button>
                    </div>
                    <div>
                        <img
                            src="./images/profile/developer_male.png"
                            alt="developer"
                            className="w-100 h-50 object-contain"
                        />
                    </div>
                </div>
            </div>
            {/* Right Column (Stacked Vertically) */}
            <div className="lg:col-span-6 flex flex-row  gap-4">
                {/* left */}
                <div className="flex-1 bg-purple-800 text-white rounded-xl shadow p-6 flex flex-col justify-center">
                    <h2 className="text-lg font-semibold mb-4">Overview Of Sales</h2>
                    <div className="flex justify-around">
                        <div className="bg-purple-700 p-4 rounded-lg text-center w-28">
                            <FontAwesomeIcon icon={faChartLine} className="text-2xl mb-1" />
                            <div className="font-semibold text-lg">$3,651</div>
                            <p className="text-xs">Total Sales</p>
                        </div>
                        <div className="bg-purple-700 p-4 rounded-lg text-center w-28">
                            <FontAwesomeIcon icon={faBagShopping} className="text-2xl mb-1" />
                            <div className="font-semibold text-lg">5831</div>
                            <p className="text-xs">Total Sales</p>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="flex-1 bg-white rounded-xl shadow p-6 relative">
                    <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Total</span>
                    </div>
                    <div className="text-xl font-bold text-gray-700 mb-4">2520</div>
                    <div className="h-28">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#6b46c1"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="absolute top-4 right-4 bg-purple-800 text-white p-2 rounded-full shadow cursor-pointer">
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsBanner
