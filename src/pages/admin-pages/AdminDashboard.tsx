import InquiryChart from "../../components/Admin/InquiryChart";
import PaymentChart from "../../components/Admin/PaymentChart";
import RecentPaymentsTable from "../../components/Admin/RecentPaymentsTable";
import StatCard from "../../components/Admin/StatCard";

const AdminDashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-primary mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

        <StatCard
          title="Total Users"
          value="1,245"
        />

        <StatCard
          title="Pending Approvals"
          value="35"
        />

        <StatCard
          title="Total Inquiries"
          value="524"
        />

        <StatCard
          title="Total Payments"
          value="₹8,45,000"
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PaymentChart />
        <InquiryChart />
      </div>

      <RecentPaymentsTable />
    </>
  );
};

export default AdminDashboard;