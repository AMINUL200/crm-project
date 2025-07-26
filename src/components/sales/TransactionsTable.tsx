import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Transaction {
  order: string;
  customer: string;
  date: string;
  ref: string;
  amount: string;
  status: "Pending" | "Success";
  customerImg: string;
}

const transactions: Transaction[] = [
  {
    order: "#00001",
    customer: "Liam Risher",
    date: "2 Feb 2023",
    ref: "HA-22533",
    amount: "$5,5225",
    status: "Pending",
    customerImg: "./images/profile/pic555.jpg",
  },
  {
    order: "#00501",
    customer: "William Risher",
    date: "2 Feb 2023",
    ref: "HA-22533",
    amount: "$5,5225",
    status: "Success",
    customerImg: "./images/profile/pic555.jpg",
  },
  {
    order: "#00501",
    customer: "Donald Benjamin",
    date: "2 Feb 2023",
    ref: "HA-22533",
    amount: "$5,5225",
    status: "Pending",
    customerImg: "./images/profile/pic555.jpg",
  },
  {
    order: "#005058",
    customer: "Donald Benjamin",
    date: "2 Feb 2023",
    ref: "HA-22533",
    amount: "$5,5225",
    status: "Pending",
    customerImg: "./images/profile/pic555.jpg",
  },
  {
    order: "#005058",
    customer: "Donald Benjamin",
    date: "2 Feb 2023",
    ref: "HA-22533",
    amount: "$5,5225",
    status: "Pending",
    customerImg: "./images/profile/pic555.jpg",
  },
  {
    order: "#005059",
    customer: "Sophie Turner",
    date: "3 Feb 2023",
    ref: "HA-88900",
    amount: "$4,100",
    status: "Success",
    customerImg: "./images/profile/pic555.jpg",
  },
  {
    order: "#005060",
    customer: "Jon Snow",
    date: "4 Feb 2023",
    ref: "HA-77882",
    amount: "$3,320",
    status: "Pending",
    customerImg: "./images/profile/pic555.jpg",
  },
  {
    order: "#005061",
    customer: "Arya Stark",
    date: "5 Feb 2023",
    ref: "HA-66773",
    amount: "$6,200",
    status: "Success",
    customerImg: "./images/profile/pic555.jpg",
  },
];

export default function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 5;
  const totalPages: number = Math.ceil(transactions.length / pageSize);

  const paginatedData: Transaction[] = transactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const goToPage = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg text-gray-800">Transaction</h2>
        <button className="text-sm text-[#452B90] hover:text-white bg-gray-200 hover:bg-[#452B90]  px-3 py-2 rounded border-2 border-[#452B90] transition-all duration-300 ">
        <FontAwesomeIcon icon={faFileExport} className="mr-2"/>
          Export Report
        </button>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-purple-100 text-gray-700 font-medium">
            <tr>
              <th className="p-2">Order No.</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Date</th>
              <th className="p-2">Ref</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((tx, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="p-2 text-indigo-700 font-medium">{tx.order}</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={tx.customerImg}
                      alt={tx.customer}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{tx.customer}</span>
                  </div>
                </td>
                <td className="p-2">{tx.date}</td>
                <td className="p-2 text-indigo-700">{tx.ref}</td>
                <td className="p-2">{tx.amount}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      tx.status === "Success"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 mt-3">
          Showing {(currentPage - 1) * pageSize + 1} to{" "}
          {Math.min(currentPage * pageSize, transactions.length)} of{" "}
          {transactions.length} entries
        </p>
        <div className="mt-2 flex gap-2 text-sm">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-purple-800 text-white"
                  : "bg-purple-100 text-purple-800 hover:bg-purple-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}