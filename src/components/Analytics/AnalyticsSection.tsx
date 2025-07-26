import { faAmazon, faAws, faBehance, faDribbble, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stats = [
    { id: 1, name: "Dribble", handle: "@statistics", value: "+23%", icon: <FontAwesomeIcon icon={faDribbble} /> },
    { id: 2, name: "Fb", handle: "@fb", value: "-33%", icon: <FontAwesomeIcon icon={faFacebook} /> },
    { id: 3, name: "Anazone", handle: "@hemsr", value: "-23%", icon: <FontAwesomeIcon icon={faAmazon} /> },
    { id: 4, name: "Behance", handle: "@behan", value: "+25%", icon: <FontAwesomeIcon icon={faBehance} /> },
    { id: 5, name: "AWS", handle: "@awes", value: "+30%", icon: <FontAwesomeIcon icon={faAws} /> },
    { id: 6, name: "Insta", handle: "@abcd", value: "-32%", icon: <FontAwesomeIcon icon={faInstagram} /> },
];

export default function AnalyticsSection() {
    return (
        <div className="bg-[#eae5ec] p-4 rounded-lg py-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left Info */}
                <div className="mb-6 md:mb-0 md:mr-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Analytics</h2>
                    <p className="text-sm text-purple-700 mt-1">Your statistics for <br />1 month period.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white hover:bg-purple-800 p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer transition-all duration-400"
                        >
                            <div className="
          flex justify-center items-center 
          text-white text-xl rounded-full w-11 h-11 -mt-10 mb-3 shadow-md
          bg-purple-800
          transition-all duration-400
          group-hover:bg-white group-hover:text-purple-800
        ">
                                {item.icon}
                            </div>
                            <h3
                                className="
          text-lg font-medium text-gray-800
          transition-all duration-400
          group-hover:text-white
        "
                            >
                                {item.name}
                            </h3>
                            <p
                                className="
          text-sm text-gray-500
          transition-all duration-400
          group-hover:text-white
        "
                            >
                                {item.handle}
                            </p>
                            <p
                                className={`text-xl font-semibold mt-2 transition-all duration-400 ${item.value.startsWith("-")
                                        ? "text-red-600 group-hover:text-white"
                                        : "text-green-600 group-hover:text-white"
                                    }`}
                            >
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
