import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// Define types for our data
interface BestSeller {
    name: string;
    product: string;
    company: string;
    revenue: string;
    status: "Success" | "Pending" | "Cancel" | "Inprogress";
}

interface RevenueSource {
    icon: IconProp;
    source: string;
    visitors: string;
    pageView: string;
    revenue: string;
    color: string;
}

const ProductTable: React.FC = () => {
    // Data for tables
    const bestSellers: BestSeller[] = [
        { name: "Daniel Arran", product: "Laptop", company: "Apple", revenue: "$17,00", status: "Inprogress" },
        { name: "Daniel Arran", product: "Mobile", company: "Samsung", revenue: "$17,625", status: "Success" },
        { name: "Daniel Arran", product: "Ac", company: "Panasonic", revenue: "$1,665", status: "Pending" },
        { name: "Daniel Arran", product: "Touch Screen", company: "Google", revenue: "$1,6565", status: "Cancel" },
        { name: "Daniel Arran", product: "Laptop", company: "Apple", revenue: "$17,00", status: "Inprogress" },
        { name: "Sarah Smith", product: "Tablet", company: "Microsoft", revenue: "$12,500", status: "Success" },
        { name: "John Doe", product: "Smartwatch", company: "Samsung", revenue: "$8,250", status: "Pending" },
        { name: "Jane Smith", product: "Headphones", company: "Sony", revenue: "$3,200", status: "Success" },
    ];

    const revenueSources: RevenueSource[] = [
        { icon: faFacebook, source: "Facebook", visitors: "25,255", pageView: "1,205", revenue: "$955", color: "bg-purple-600" },
        { icon: faGoogle, source: "Google", visitors: "25,655", pageView: "1,255", revenue: "$9555", color: "bg-yellow-500" },
        { icon: faLinkedin, source: "Linkedin", visitors: "55,655", pageView: "2,255", revenue: "$8855", color: "bg-cyan-500" },
        { icon: faInstagram, source: "Instagram", visitors: "42,655", pageView: "9,255", revenue: "$9855", color: "bg-orange-500" },
        { icon: faGoogle, source: "Google", visitors: "25,655", pageView: "1,255", revenue: "$9555", color: "bg-yellow-500" },
        { icon: faLinkedin, source: "Linkedin", visitors: "55,655", pageView: "2,255", revenue: "$8855", color: "bg-cyan-500" },
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(bestSellers.length / itemsPerPage);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bestSellers.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    // Status color function
    const statusColor = (status: BestSeller["status"]): string => {
        switch (status) {
            case "Success": return "bg-green-100 text-green-600";
            case "Pending": return "bg-yellow-100 text-yellow-600";
            case "Cancel": return "bg-red-100 text-red-600";
            default: return "bg-purple-100 text-purple-600"; // Inprogress
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
            {/* LEFT TABLE */}
            <div className="bg-white rounded-lg shadow py-4">
                <div className="flex justify-between items-center mb-3 px-6">
                    <h4 className="font-medium text-lg">Best Seller</h4>
                    <button className="flex items-center gap-2 px-3 py-1 text-[#452B90] bg-current/10 rounded hover:bg-purple-200 transition-colors">
                        <FontAwesomeIcon icon={faFileExport} /> Export Report
                    </button>
                </div>
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-[#452B90] bg-current/10">
                            <th className="p-2 pl-4">SELLER NAME</th>
                            <th>PRODUCT</th>
                            <th>COMPANY</th>
                            <th>REVENUE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {currentItems.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-all duration-200">
                                <td className="py-2 flex items-center gap-1 pl-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white">
                                        {item.name.charAt(0)}
                                    </div>
                                    {item.name}
                                </td>
                                <td>{item.product}</td>
                                <td>{item.company}</td>
                                <td>{item.revenue}</td>
                                <td>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(item.status)}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center text-xs text-gray-500 mt-3 px-6">
                    <p>Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, bestSellers.length)} of {bestSellers.length} entries</p>
                    <div className="flex gap-2 items-center">
                        <button 
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`px-3 py-1 rounded ${currentPage === number ? 'bg-purple-700 text-white' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                            >
                                {number}
                            </button>
                        ))}
                        
                        <button 
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT TABLE */}
            <div className="bg-white rounded-lg shadow py-4">
                <h2 className="font-semibold text-lg mb-3 pl-6">Source Of Revenue Generate</h2>
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-[#452B90] bg-current/10">
                            <th className="p-2 px-4">SOURCE</th>
                            <th>VISITORS</th>
                            <th>PAGE VIEW</th>
                            <th>REVENUE</th>
                            <th>TRENDING</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {revenueSources.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-all duration-200">
                                <td className="py-2 flex items-center gap-3 px-4">
                                    <FontAwesomeIcon icon={item.icon} className={`w-5 h-5 ${item.color.replace('bg-', 'text-')}`} />
                                    {item.source}
                                </td>
                                <td>{item.visitors}</td>
                                <td>{item.pageView}</td>
                                <td>{item.revenue}</td>
                                <td>
                                    <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-2 ${item.color}`} style={{ width: `${Math.floor(Math.random() * 100)}%` }}></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;