
interface StatusCard {
  count: number;
  label: string;
  color: string; // Tailwind color like 'text-purple-600'
}

const statusCards: StatusCard[] = [
  { count: 8, label: "Not Started", color: "text-purple-600" },
  { count: 7, label: "In Progress", color: "text-indigo-600" },
  { count: 13, label: "Testing", color: "text-yellow-500" },
  { count: 11, label: "Awaiting", color: "text-red-500" },
  { count: 21, label: "Complete", color: "text-green-600" },
  { count: 16, label: "Pending", color: "text-orange-500" },
];

const TaskSummaryCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {statusCards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-md transition"
        >
          <p className={`text-2xl font-bold ${card.color}`}>{card.count}</p>
          <p className="text-sm font-semibold text-gray-700">{card.label}</p>
          <p className="text-xs text-gray-500">Tasks assignee</p>
        </div>
      ))}
    </div>
  );
};

export default TaskSummaryCards;
