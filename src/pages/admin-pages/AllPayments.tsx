
const AllPayments = () => {

    const payments = [
        {
            fullName: "Faizan Pathan",
            email: "faizan@email.com",
            phone: "9876543210",
            package: "Elite Stays",
            amount: "₹24,999",
            request: "Sea view room",
        },
        {
            fullName: "Rahul Sharma",
            email: "rahul@email.com",
            phone: "9876543211",
            package: "Curated Destinations",
            amount: "₹49,999",
            request: "Early check-in",
        },
        {
            fullName: "Aman Verma",
            email: "aman@email.com",
            phone: "9876543212",
            package: "Elite Stays",
            amount: "₹24,999",
            request: "Private pool villa",
        },
        {
            fullName: "Sneha Patel",
            email: "sneha@email.com",
            phone: "9876543213",
            package: "Elite Stays",
            amount: "₹24,999",
            request: "Airport pickup",
        },
        {
            fullName: "Vikram Singh",
            email: "vikram@email.com",
            phone: "9876543214",
            package: "Elite Stays",
            amount: "₹24,999",
            request: "Vegetarian meals",
        },
        {
            fullName: "Neha Gupta",
            email: "neha@email.com",
            phone: "9876543215",
            package: "Signature Escapes",
            amount: "₹34,999",
            request: "Houseboat stay",
        },
        {
            fullName: "Arjun Mehta",
            email: "arjun@email.com",
            phone: "9876543216",
            package: "Elite Stays",
            amount: "₹24,999",
            request: "City view hotel",
        },
        {
            fullName: "Priya Shah",
            email: "priya@email.com",
            phone: "9876543217",
            package: "Curated Destinations",
            amount: "₹49,999",
            request: "Extra luggage",
        },
        {
            fullName: "Karan Patel",
            email: "karan@email.com",
            phone: "9876543218",
            package: "Elite Stays",
            amount: "₹24,999",
            request: "Scuba diving",
        },
        {
            fullName: "Riya Kapoor",
            email: "riya@email.com",
            phone: "9876543219",
            package: "Curated Destinations",
            amount: "₹49,999",
            request: "Mountain view room",
        },
    ];
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
                        placeholder="Search..."
                        className="border rounded-lg px-4 py-2 text-[16px] w-full sm:w-[250px] lg:w-[450px]"
                    />
                    <select className="border rounded-lg px-4 py-2 w-full sm:w-[250px]">
                        <option>All Membership</option>
                        <option>Elite Stays</option>
                        <option>Signature Escapes</option>
                        <option>Curated Destinations</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border">
                <div className="overflow-x-auto rounded-xl">

                    <table className="min-w-full text-sm">

                        <thead className="bg-secondary">

                            <tr>

                                <th className="px-4 py-3 text-left font-medium">
                                    Sr No
                                </th>

                                <th className="px-4 py-3 text-left font-medium">
                                    Full Name
                                </th>

                                <th className="px-4 py-3 text-left font-medium">
                                    Email
                                </th>

                                <th className="px-4 py-3 text-left font-medium">
                                    Phone Number
                                </th>

                                <th className="px-4 py-3 text-left font-medium">
                                    Tour Package Name
                                </th>

                                <th className="px-4 py-3 text-left font-medium">
                                    Amount to Pay
                                </th>

                                <th className="px-4 py-3 text-left font-medium">
                                    Special Request
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {payments.map((payment, index) => (
                                <tr
                                    key={index}
                                    className="border-t hover:bg-gray-50 transition"
                                >

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {index + 1}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {payment.fullName}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {payment.email}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {payment.phone}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {payment.package}
                                    </td>

                                    <td className="px-4 py-3 font-medium text-primary whitespace-nowrap">
                                        {payment.amount}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {payment.request}
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>
            </div>

        </>
    );
};

export default AllPayments;