import { useState, useEffect } from "react";
import { getAllAdminPayments } from "../../services/paymentService";

const RecentPaymentsTable = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRecentPayments();
  }, []);

  const fetchRecentPayments = async () => {
    try {
      setLoading(true);
      const response = await getAllAdminPayments();
      
      if (response.success) {
        setPayments(response.payments.slice(0, 10));
      } else {
        setError("Failed to load recent payments.");
      }
    } catch (err) {
      console.error("Error fetching recent payments:", err);
      setError("Error loading data.");
    } finally {
      setLoading(false);
    }
  };

  // Helper function to format amount
  const formatAmount = (amount:any) => {
    return amount ? `₹${amount.toLocaleString('en-IN')}` : "₹0";
  };

  // Helper to format date
  const formatDate = (dateString:any) => {
    const options:any = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-primary">
          Recent Payments
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Date</th>
              <th className="px-4 py-3 text-left font-medium">Full Name</th>
              <th className="px-4 py-3 text-left font-medium">Email</th>
              <th className="px-4 py-3 text-left font-medium">Phone</th>
              <th className="px-4 py-3 text-left font-medium">Package</th>
              <th className="px-4 py-3 text-left font-medium">Amount</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
                  Loading recent payments...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={7} className="text-center py-6 text-red-500">
                  {error}
                </td>
              </tr>
            ) : payments.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
                  No recent payments found.
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
                  <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-800">
                    {payment.firstName} {payment.lastName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                    {payment.email}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                    {payment.phone}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap capitalize text-gray-700">
                    {payment.package?.replace('-', ' ')}
                  </td>
                  <td className="px-4 py-3 font-medium text-primary whitespace-nowrap">
                    {formatAmount(payment.amount)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span 
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        payment.status === 'SUCCESS' ? 'bg-green-100 text-green-700' :
                        payment.status === 'FAILED' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPaymentsTable;