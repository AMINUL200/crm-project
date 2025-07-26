import React, { useState } from "react";

interface Task {
    id: string;
    name: string;
    status: "Complete" | "Testing" | "Pending" | "In Progress";
    startDate: string;
    endDate: string;
    assignedTo: string[];
    tags: string[];
    priority: "High" | "Medium" | "Low";
}

const statusOptions: Task["status"][] = [
    "Complete",
    "Testing",
    "Pending",
    "In Progress",
];
const priorityOptions: Task["priority"][] = ["High", "Medium", "Low"];

const getPriorityClasses = (priority: Task["priority"]) => {
    switch (priority) {
        case "High":
            return "bg-red-100 text-red-700 border-red-200";
        case "Medium":
            return "bg-yellow-100 text-yellow-700 border-yellow-200";
        case "Low":
            return "bg-green-100 text-green-700 border-green-200";
        default:
            return "";
    }
};

const getStatusClasses = (status: Task["status"]) => {
    switch (status) {
        case "Complete":
            return "bg-green-100 text-green-700 border-green-200";
        case "Testing":
            return "bg-yellow-100 text-yellow-700 border-yellow-200";
        case "Pending":
            return "bg-red-100 text-red-700 border-red-200";
        case "In Progress":
            return "bg-blue-100 text-blue-700 border-blue-200";
        default:
            return "";
    }
};

const TaskTable: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: "01",
            name: "Design System Implementation",
            status: "Complete",
            startDate: "01 Jan 2023",
            endDate: "15 Jan 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Design", "UI"],
            priority: "High",
        },
        {
            id: "02",
            name: "API Integration",
            status: "Testing",
            startDate: "16 Jan 2023",
            endDate: "30 Jan 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Backend", "API"],
            priority: "Medium",
        },
        {
            id: "03",
            name: "Create Frontend WordPress",
            status: "Complete",
            startDate: "06 Feb 2023",
            endDate: "19 Feb 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Issue", "HTML"],
            priority: "Medium",
        },
        {
            id: "04",
            name: "HTML To React Convert",
            status: "Testing",
            startDate: "06 Feb 2023",
            endDate: "19 Feb 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Issue", "HTML"],
            priority: "High",
        },
        {
            id: "05",
            name: "HTML template Issue Complete",
            status: "Pending",
            startDate: "06 Feb 2023",
            endDate: "19 Feb 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Issue", "HTML"],
            priority: "High",
        },
        {
            id: "06",
            name: "Database Optimization",
            status: "Pending",
            startDate: "20 Feb 2023",
            endDate: "28 Feb 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Database", "Performance"],
            priority: "Medium",
        },
        {
            id: "07",
            name: "Mobile Responsiveness Fix",
            status: "Complete",
            startDate: "01 Mar 2023",
            endDate: "10 Mar 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["CSS", "Responsive"],
            priority: "Low",
        },
        {
            id: "08",
            name: "Authentication System",
            status: "Testing",
            startDate: "11 Mar 2023",
            endDate: "20 Mar 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Security", "Auth"],
            priority: "High",
        },
        {
            id: "09",
            name: "Performance Testing",
            status: "Pending",
            startDate: "21 Mar 2023",
            endDate: "31 Mar 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Testing", "Performance"],
            priority: "Medium",
        },
        {
            id: "10",
            name: "Documentation Update",
            status: "Complete",
            startDate: "01 Apr 2023",
            endDate: "05 Apr 2023",
            assignedTo: ["./images/profile/pic555.jpg", "./images/profile/pic555.jpg"],
            tags: ["Docs", "Technical"],
            priority: "Low",
        },
    ]);


    const handleStatusChange = (taskId: string, newStatus: Task["status"]) => {
        setTasks(prev =>
            prev.map(t =>
                t.id === taskId ? { ...t, status: newStatus } : t
            )
        );
    };
    const handlePriorityChange = (taskId: string, newPriority: Task["priority"]) => {
        setTasks(prev =>
            prev.map(t =>
                t.id === taskId ? { ...t, priority: newPriority } : t
            )
        );
    };

    // Pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const tasksPerPage = 5;
    const totalPages = Math.ceil(tasks.length / tasksPerPage);

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    const getPageNumbers = (): (number | string)[] => {
        const pageNumbers: (number | string)[] = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
        } else {
            const half = Math.floor(maxVisiblePages / 2);
            let left = Math.max(1, currentPage - half);
            const right = Math.min(totalPages, left + maxVisiblePages - 1);

            if (right - left < maxVisiblePages - 1) {
                left = Math.max(1, right - maxVisiblePages + 1);
            }

            if (left > 1) {
                pageNumbers.push(1);
                if (left > 2) pageNumbers.push("...");
            }

            for (let i = left; i <= right; i++) pageNumbers.push(i);

            if (right < totalPages) {
                if (right < totalPages - 1) pageNumbers.push("...");
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Task</h2>
                <button className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-2 rounded hover:bg-purple-200 transition-colors">
                    📤 Export Report
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto custom-scrollbar">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="text-left text-[#452B90] bg-current/10 uppercase text-xs tracking-wide border-b">
                            <th className="py-2 px-3">ID</th>
                            <th className="py-2 px-3">Name</th>
                            <th className="py-2 px-3">Status</th>
                            <th className="py-2 px-3">Start Date</th>
                            <th className="py-2 px-3">End Date</th>
                            <th className="py-2 px-3">Assigned To</th>
                            <th className="py-2 px-3">Tags</th>
                            <th className="py-2 px-3">Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTasks.map((task) => (
                            <tr key={task.id} className="border-b last:border-none hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-3">{task.id}</td>
                                <td className="py-3 px-3 font-medium">{task.name}</td>
                                <td className="py-3 px-3">
                                    <div className="relative inline-block min-w-[120px]">
                                        <select
                                            value={task.status}
                                            onChange={(e) => handleStatusChange(task.id, e.target.value as Task["status"])}
                                            className={`
        appearance-none w-full pr-8 pl-3 py-1.5 rounded-full text-xs font-medium 
        cursor-pointer focus:ring-2 focus:ring-opacity-50 focus:outline-none 
        transition-all duration-200 border ${getStatusClasses(task.status)}
        hover:shadow-md
      `}
                                        >
                                            {statusOptions.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                    className={`${getStatusClasses(option as Task["status"])} py-1`}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {/* Custom dropdown icon */}
                                        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                                            <svg
                                                className="w-4 h-4 text-current"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>

                                <td className="py-3 px-3">{task.startDate}</td>
                                <td className="py-3 px-3">{task.endDate}</td>
                                <td className="py-3 px-3">
                                    <div className="flex -space-x-2">
                                        {task.assignedTo.map((img, idx) => (
                                            <img
                                                key={idx}
                                                src={img}
                                                alt="user"
                                                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "/images/placeholder.jpg";
                                                }}
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className="py-3 px-3">
                                    <div className="flex flex-wrap gap-2">
                                        {task.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs font-medium text-[#452B90] bg-current/10 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="py-3 px-3">
                                    <div className="relative inline-block min-w-[100px]">
                                        <select
                                            value={task.priority}
                                            onChange={(e) => handlePriorityChange(task.id, e.target.value as Task["priority"])}
                                            className={`
                                        appearance-none w-full pr-8 pl-3 py-1.5 rounded-2xl text-xs font-medium 
                                        cursor-pointer focus:ring-2 focus:ring-opacity-50 focus:outline-none 
                                        transition-all duration-200 border ${getPriorityClasses(task.priority)}
                                        hover:shadow-md
                                    `}
                                        >
                                            {priorityOptions.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                    className={`${getPriorityClasses(option)} py-1`}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        {/* Custom dropdown icon */}
                                        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                                            <svg
                                                className="w-4 h-4 text-current"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-500">
                    Showing {indexOfFirstTask + 1} to {Math.min(indexOfLastTask, tasks.length)} of {tasks.length} tasks
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded text-sm ${currentPage === 1
                            ? "bg-gray-100 text-gray-400"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        ‹
                    </button>
                    {getPageNumbers().map((num, idx) => (
                        <button
                            key={idx}
                            onClick={() => (typeof num === "number" ? paginate(num) : undefined)}
                            className={`px-3 py-1 rounded text-sm ${num === currentPage
                                ? "bg-purple-600 text-white"
                                : typeof num === "number"
                                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    : "bg-transparent cursor-default"
                                }`}
                            disabled={num === "..."}
                        >
                            {num}
                        </button>
                    ))}
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded text-sm ${currentPage === totalPages
                            ? "bg-gray-100 text-gray-400"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskTable;