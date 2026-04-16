import { useEffect, useState } from "react";
import { getAllTripInquiryAdmin } from "../../services/tripInquiryService";
import { FaRegSadTear } from "react-icons/fa";

const TripInquiry = () => {

    const [tripInquiriesData, setTripInquiriesData] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState<any>({});
    const [search, setSearch] = useState("");

    const limit = 10;

    const fetchAllTripInquiry = async () => {
        try {

            const res = await getAllTripInquiryAdmin(page, limit, search);

            setTripInquiriesData(res.data);
            setPagination(res.pagination);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllTripInquiry();
    }, [page, search]);

    return (
        <>

            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-between items-center">

                <div className="w-full">
                    <h1 className="text-2xl font-semibold text-primary">
                        Trip Inquiries
                    </h1>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">

                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1); // reset page on search
                        }}
                        className="border rounded-lg px-4 py-2 text-[16px] w-full sm:w-[250px] lg:w-[450px]"
                    />

                    {/* <select className="border rounded-lg px-4 py-2 w-full sm:w-[250px]">
                        <option>All Membership</option>
                        <option>Elite Stays</option>
                        <option>Signature Escapes</option>
                        <option>Curated Destinations</option>
                    </select> */}

                </div>

            </div>


            {/* Table */}
            <div className="overflow-x-auto">

                <table className="min-w-full text-sm bg-white">

                    <thead className="bg-secondary">
                        <tr>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Sr No
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Membership ID
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Full Name
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Email
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Phone Number
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Check In - Check Out
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Adults - Childrens
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Destination
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-nowrap">
                                Membership Name
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {tripInquiriesData.length === 0 ? (
                            <tr>
                                <td colSpan={9} className="py-6 text-center text-gray-500 font-medium">
                                    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                                        <FaRegSadTear size={40} className="mb-2" />
                                        <p className="text-sm font-medium">
                                            No Record Found
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            tripInquiriesData.map((item: any, index) => (
                                <tr
                                    key={index}
                                    className="border-t hover:bg-gray-50 transition"
                                >

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {(page - 1) * limit + index + 1}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {item.memberId || "--"}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {item.firstName} {item.lastName}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {item.email}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {item.phone}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {item.travelDate}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {item.numberOfAdults} - {item.numberOfChildren}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {item.destination}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {item.membershipName || "--"}
                                    </td>

                                </tr>
                            ))
                        )}
                    </tbody>

                </table>

            </div>

            {/* PAGINATION */}
            {
                pagination.totalPages > 1 && (
                    <div className="flex justify-end items-center mt-6">

                        <div className="flex items-center gap-2 bg-white shadow-sm border rounded-lg px-3 py-2">

                            {/* Previous */}
                            <button
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                                className="px-4 py-1 text-sm rounded-md border hover:bg-gray-100 disabled:opacity-40"
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
                                        className={`px-3 py-1 text-sm rounded-md border transition
                                        ${page === pageNumber
                                                ? "bg-[#16302C] text-white border-[#16302C]"
                                                : "hover:bg-gray-100"
                                            }
                                        `}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}

                            {/* Next */}
                            <button
                                disabled={page === pagination.totalPages}
                                onClick={() => setPage(page + 1)}
                                className="px-4 py-1 text-sm rounded-md border hover:bg-gray-100 disabled:opacity-40"
                            >
                                Next
                            </button>

                        </div>

                    </div>
                )
            }

        </>
    );
};

export default TripInquiry;