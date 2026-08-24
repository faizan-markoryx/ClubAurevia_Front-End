import { useState, useEffect } from "react";
// Ab hum getAllAdminPayments ko search aur page params bhekenge
import { getAllAdminPayments } from "../../services/paymentService"; 
import { FaRegSadTear } from "react-icons/fa";

const AllPayments = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Search and Pagination states
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [pagination, setPagination]:any = useState({});
    
    const limit = 10; // Per page items

    // Jab bhi page ya search term (debounced) change ho, API call hogi
    useEffect(() => {
        // Implement simple debounce for searching
        const timer = setTimeout(() => {
            fetchPayments();
        }, 300); // Wait 300ms after user stops typing before calling API
        
        return () => clearTimeout(timer);
    }, [page, searchTerm]);

    const fetchPayments = async () => {
        try {
            setLoading(true);
            setError("");
            
            // Ab services file mein call isi format mein jaani chahiye
            const response = await getAllAdminPayments(page, limit, searchTerm);
            
            if (response.success) {
                setPayments(response.payments);
                setPagination(response.pagination);
            } else {
                setError(response.message || "Failed to fetch payments.");
            }
        } catch (err) {
            console.error("Error fetching payments:", err);
            setError("Something went wrong while fetching data.");
        } finally {
            setLoading(false);
        }
    };

    // Date Format Helper
    const formatDate = (dateString:any) => {
        if (!dateString) return "--";
        const options:any = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    };

    // Dynamic Status Color
    const getStatusStyle = (status:any) => {
        switch (status) {
            case "SUCCESS":
                return "bg-green-100 text-green-700 border-green-200";
            case "FAILED":
                return "bg-red-100 text-red-700 border-red-200";
            case "PENDING":
                return "bg-yellow-100 text-yellow-700 border-yellow-200";
            default:
                return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-between items-center">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold text-primary">
                        All Payments
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">
                    <input
                        type="text"
                        placeholder="Search by name, email, order ID..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setPage(1); // Reset to page 1 on new search
                        }}
                        className="border rounded-lg px-4 py-2 text-[16px] w-full sm:w-[350px] lg:w-[450px]"
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border">
                <div className="overflow-x-auto rounded-xl">
                    <table className="min-w-full text-sm">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium text-primary">Date</th>
                                <th className="px-4 py-3 text-left font-medium text-primary">Order ID</th>
                                <th className="px-4 py-3 text-left font-medium text-primary">Customer Details</th>
                                <th className="px-4 py-3 text-left font-medium text-primary">Package</th>
                                <th className="px-4 py-3 text-left font-medium text-primary">Amount</th>
                                <th className="px-4 py-3 text-left font-medium text-primary">Status</th>
                                <th className="px-4 py-3 text-left font-medium text-primary">Special Request</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="text-center py-8 text-gray-500">
                                        Loading payments...
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={7} className="text-center py-8 text-red-500">
                                        {error}
                                    </td>
                                </tr>
                            ) : payments.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="py-6 text-center text-gray-500 font-medium">
                                        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                                            <FaRegSadTear size={40} className="mb-2" />
                                            <p className="text-sm font-medium">No Record Found</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                payments.map((payment:any, index:any) => (
                                    <tr
                                        key={payment._id || index}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                                            {formatDate(payment.createdAt)}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-700">
                                            {payment.orderId}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <p className="font-medium text-gray-800">
                                                {payment.firstName} {payment.lastName}
                                            </p>
                                            <p className="text-xs text-gray-500">{payment.email}</p>
                                            <p className="text-xs text-gray-500">{payment.phone}</p>
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap capitalize text-gray-600">
                                            {payment.package?.replace('-', ' ')}
                                        </td>

                                        <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">
                                            ₹{payment.amount?.toLocaleString('en-IN')}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(payment.status)}`}>
                                                {payment.status}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 max-w-[200px] truncate text-gray-600" title={payment.message}>
                                            {payment.message || "-"}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* PAGINATION */}
            {pagination.totalPages > 1 && (
                <div className="flex justify-end items-center mt-6">
                    <div className="flex items-center gap-2 bg-white shadow-sm border rounded-lg px-3 py-2">
                        {/* Previous */}
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            className="px-4 py-1 text-sm rounded-md border hover:bg-gray-100 disabled:opacity-40 transition-colors"
                        >
                            Previous
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: pagination.totalPages || 1 }, (_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => setPage(pageNumber)}
                                    className={`px-3 py-1 text-sm rounded-md border transition-colors ${
                                        page === pageNumber
                                            ? "bg-[#16302C] text-white border-[#16302C]"
                                            : "hover:bg-gray-100"
                                    }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}

                        {/* Next */}
                        <button
                            disabled={page === pagination.totalPages}
                            onClick={() => setPage(page + 1)}
                            className="px-4 py-1 text-sm rounded-md border hover:bg-gray-100 disabled:opacity-40 transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AllPayments;