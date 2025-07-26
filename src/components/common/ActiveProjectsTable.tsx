import { useState } from 'react';
import { FaFileExport } from 'react-icons/fa';

interface Project {
    id: string;
    name: string;
    lead: string;
    leadImg: string;
    progress: number;
    assignees: string[];
    status: 'Inprogress' | 'Pending' | 'Completed';
    date: string;
}

const projects: Project[] = [
    {
        id: 'proj-001',
        name: 'Batman',
        lead: 'Liam Risher',
        leadImg: './images/profile/pic555.jpg',
        progress: 53,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Inprogress',
        date: '06 Sep 2021',
    },
    {
        id: 'proj-002',
        name: 'Bender Project',
        lead: 'Oliver Noah',
        leadImg: './images/profile/pic555.jpg',
        progress: 30,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Pending',
        date: '06 Sep 2021',
    },
    {
        id: 'proj-003',
        name: 'Bigfish',
        lead: 'Donald Benjamin',
        leadImg: './images/profile/pic555.jpg',
        progress: 30,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Inprogress',
        date: '06 Sep 2021',
    },
    {
        id: 'proj-004',
        name: 'Canary',
        lead: 'Elijah James',
        leadImg: './images/profile/pic555.jpg',
        progress: 40,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Completed',
        date: '06 Sep 2021',
    },
    {
        id: 'proj-005',
        name: 'Casanova',
        lead: 'William Risher',
        leadImg: './images/profile/pic555.jpg',
        progress: 53,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Inprogress',
        date: '06 Sep 2021',
    },
    {
        id: 'proj-006',
        name: 'Dynamo',
        lead: 'Emma Watson',
        leadImg: './images/profile/pic555.jpg',
        progress: 75,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Inprogress',
        date: '15 Oct 2021',
    },
    {
        id: 'proj-007',
        name: 'Eclipse',
        lead: 'Robert Johnson',
        leadImg: './images/profile/pic555.jpg',
        progress: 90,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Completed',
        date: '22 Nov 2021',
    },
    {
        id: 'proj-008',
        name: 'Falcon',
        lead: 'Sophia Martinez',
        leadImg: './images/profile/pic555.jpg',
        progress: 15,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Pending',
        date: '05 Dec 2021',
    },
    {
        id: 'proj-009',
        name: 'Galaxy',
        lead: 'Michael Chen',
        leadImg: './images/profile/pic555.jpg',
        progress: 60,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Inprogress',
        date: '18 Jan 2022',
    },
    {
        id: 'proj-010',
        name: 'Horizon',
        lead: 'Jessica Lee',
        leadImg: './images/profile/pic555.jpg',
        progress: 25,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Pending',
        date: '02 Feb 2022',
    },
    {
        id: 'proj-011',
        name: 'Infinity',
        lead: 'David Kim',
        leadImg: './images/profile/pic555.jpg',
        progress: 100,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Completed',
        date: '14 Mar 2022',
    },
    {
        id: 'proj-012',
        name: 'Jupiter',
        lead: 'Natalie Portman',
        leadImg: './images/profile/pic555.jpg',
        progress: 45,
        assignees: [
            './images/profile/pic555.jpg',
            './images/profile/pic555.jpg',
        ],
        status: 'Inprogress',
        date: '28 Apr 2022',
    },
];


const statusStyles: Record<Project['status'], string> = {
    Inprogress: 'bg-purple-100 text-purple-700',
    Pending: 'bg-red-100 text-red-700',
    Completed: 'bg-teal-100 text-teal-700',
};

const ITEMS_PER_PAGE = 5;

export default function ActiveProjectsTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = projects.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Calculate paginated data
    const paginatedProjects = projects.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            pages.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className={`px-3 py-1 rounded ${1 === currentPage ? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pages.push(<span key="start-ellipsis" className="px-2">...</span>);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-1 rounded ${i === currentPage ? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
                >
                    {i}
                </button>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<span key="end-ellipsis" className="px-2">...</span>);
            }
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className={`px-3 py-1 rounded ${totalPages === currentPage ? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Active Projects</h2>
                <button className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded">
                    <FaFileExport /> Export Report
                </button>
            </div>
            <div className="overflow-auto custom-scrollbar w-full max-w-[1200px] mx-auto">
                <table className="w-full text-sm">
                    <thead className="bg-purple-100 text-left">
                        <tr>
                            <th className="px-4 py-2">Project Name</th>
                            <th className="px-4 py-2">Project Lead</th>
                            <th className="px-4 py-2">Progress</th>
                            <th className="px-4 py-2">Assignee</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedProjects.map((project, i) => (
                            <tr key={i} className="border-t">
                                <td className="px-4 py-2">{project.name}</td>
                                <td className="px-4 py-2 flex items-center gap-2">
                                    <img
                                        src={project.leadImg}
                                        alt={project.lead}
                                        className="w-8 h-8 rounded-full object-cover border-2 border-white shadow"
                                    />
                                    {project.lead}
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-2 bg-gray-200 rounded">
                                            <div
                                                className={`h-2 rounded ${project.progress >= 50 ? 'bg-purple-700' : 'bg-red-500'
                                                    }`}
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                        {project.progress}%
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex">
                                        {project.assignees.map((imgPath, idx) => (
                                            <img
                                                key={idx}
                                                src={imgPath}
                                                alt="assignee"
                                                className={`w-8 h-8 rounded-full object-cover border-2 border-white shadow ${idx !== 0 ? '-ml-4' : ''
                                                    }`}
                                                style={{ zIndex: project.assignees.length - idx }}
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-2 py-1 text-xs rounded ${statusStyles[project.status]}`}
                                    >
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2">{project.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-4 text-sm gap-6">
                <span>
                    Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
                    {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)} of {totalItems} entries
                </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50"
                    >
                        {'<'}
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50"
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
}