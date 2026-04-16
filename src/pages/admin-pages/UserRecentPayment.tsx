import { FaRegSadTear } from "react-icons/fa";

const UserRecentPayment = () => {

    const payments: any = [];

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border h-[340px] overflow-scroll px-4">
                <div className="flex justify-between items-center mb-4 pt-5">
                    <h2 className="text-lg font-semibold text-primary">
                        Last Payments
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">

                        <thead className="bg-secondary">
                            <tr>
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
                                    Amount to Pay
                                </th>
                                <th className="px-4 py-3 text-left font-medium text-nowrap">
                                    Tour Package Name
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {payments.length === 0 ? (
                                <tr className="h-[200px]">
                                    <td colSpan={5}>
                                        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                                            <FaRegSadTear size={40} className="mb-2" />
                                            <p className="text-sm font-medium">
                                                No Record Found
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                payments.map((payment: any, index: number) => (
                                    <tr
                                        key={index}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {payment.fullName}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {payment.email}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {payment.phone}
                                        </td>

                                        <td className="px-4 py-3 font-medium text-primary whitespace-nowrap">
                                            {payment.amount}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {payment.package}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default UserRecentPayment;