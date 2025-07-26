// components/sales/RecentActivities.jsx

const activities = [
    {
        name: "Blanca Schultz",
        action: "requested to Withdrawl.",
        time: "2 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Hanuman",
        action: "transferred to Money.",
        time: "4 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Subham",
        action: "placed an Order.",
        time: "4 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Alisha Singh",
        action: "added a new payment method.",
        time: "6 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "David Warner",
        action: "updated account details.",
        time: "7 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Megha Rao",
        action: "requested support ticket.",
        time: "8 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Rahul Dev",
        action: "logged in from new device.",
        time: "10 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Karan Mehta",
        action: "made a purchase.",
        time: "12 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Fatima Ali",
        action: "requested to Withdrawl.",
        time: "14 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Sourav Ghosh",
        action: "added a new address.",
        time: "16 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Nikita Joshi",
        action: "updated password.",
        time: "18 Hours Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Anjali Sharma",
        action: "activated premium plan.",
        time: "1 Day Ago",
        image: "./images/profile/pic555.jpg",
    },
    {
        name: "Sameer Khan",
        action: "requested a refund.",
        time: "1 Day Ago",
        image: "./images/profile/pic555.jpg",
    },
];


export default function RecentActivities() {
    return (
        <div className="bg-white p-4 rounded-lg shadow w-full h-full flex flex-col">
            <h2 className="font-semibold text-lg text-gray-800 mb-4">Recent Activities</h2>

            {/* Scrollable section */}
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: "350px" }}>
                {activities.map((act, i) => (
                    <div key={i} className="flex gap-3 items-start">
                        <img
                            src={act.image}
                            alt={act.name}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm text-gray-700 font-medium">
                                {act.name} <span className="font-normal">{act.action}</span>
                            </p>
                            <p className="text-xs text-gray-500">{act.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

