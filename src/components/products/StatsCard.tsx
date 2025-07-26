import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faShoppingCart,
    faUsers,
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const StatsCard = () => {


    // ✅ stats array with icon JSX inside
    const stats = [
        {
            icon: <FontAwesomeIcon icon={faBriefcase} className="text-teal-600 w-6 h-6" />,
            value: "200+",
            label: "Total Projects",
            bgColor: "bg-teal-100",
            textColor: "text-teal-600",
        },
        {
            icon: <FontAwesomeIcon icon={faShoppingCart} className="text-purple-600 w-6 h-6" />,
            value: "1560",
            label: "Total Orders",
            bgColor: "bg-purple-100",
            textColor: "text-purple-600",
        },
        {
            icon: <FontAwesomeIcon icon={faUsers} className="text-orange-500 w-6 h-6" />,
            value: "400",
            label: "Total Users",
            bgColor: "bg-orange-100",
            textColor: "text-orange-500",
        },
        {
            icon: <FontAwesomeIcon icon={faDollarSign} className="text-red-500 w-6 h-6" />,
            value: "$1500",
            label: "Total Sales",
            bgColor: "bg-red-100",
            textColor: "text-red-500",
        },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
            {stats.map((item, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <div className={`p-3 rounded-lg ${item.bgColor}`}>{item.icon}</div>
                    <div className="ml-4">
                        <h2 className={`text-xl font-bold ${item.textColor}`}>{item.value}</h2>
                        <p className="text-gray-500 text-sm">{item.label}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StatsCard
