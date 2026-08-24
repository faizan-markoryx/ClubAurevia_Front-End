import { useState, useEffect } from "react";
import InquiryChart from "../../components/Admin/InquiryChart";
import PaymentChart from "../../components/Admin/PaymentChart";
import RecentPaymentsTable from "../../components/Admin/RecentPaymentsTable";
import StatCard from "../../components/Admin/StatCard";
import { getDashboardData } from "../../services/dashboardService";

const AdminDashboard = () => {
  // State for data
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // State for yearly filter (Default: Current Year)
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Filter ke liye options generate karna (e.g., last 5 years)
  const yearOptions = Array.from({ length: 5 }, (_, i) => currentYear - i);

  useEffect(() => {
    fetchData(selectedYear);
  }, [selectedYear]); // Jab bhi year change hoga, data fetch hoga

  const fetchData = async (year: number) => {
    try {
      setLoading(true);
      const response = await getDashboardData(year);
      if (response.success) {
        setDashboardData(response);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper for formatting large numbers (e.g., ₹1,50,000)
  const formatCurrency = (amount: number) => {
    return amount ? `₹${amount.toLocaleString('en-IN')}` : "₹0";
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-primary">
          Dashboard
        </h1>
        
        {/* Yearly Filter Dropdown */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">Filter by Year:</label>
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {yearOptions.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Users"
          value={loading ? "..." : dashboardData?.stats?.totalUsers || "0"}
        />

        <StatCard
          title="Pending Approvals"
          value={loading ? "..." : dashboardData?.stats?.pendingApprovals || "0"}
        />

        <StatCard
          title="Total Inquiries"
          value={loading ? "..." : dashboardData?.stats?.totalInquiries || "0"}
        />

        <StatCard
          title="Total Payments"
          value={loading ? "..." : formatCurrency(dashboardData?.stats?.totalPayments || 0)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Passing props to Charts */}
        <PaymentChart data={dashboardData?.charts?.payments} loading={loading} />
        <InquiryChart data={dashboardData?.charts?.inquiries} loading={loading} />
      </div>

      <RecentPaymentsTable />
    </>
  );
};

export default AdminDashboard;