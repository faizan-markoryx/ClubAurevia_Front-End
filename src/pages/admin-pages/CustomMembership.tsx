import { useEffect, useState } from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegSadTear } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import {
  getMembershipPlans,
  deleteMembershipPlan,
  updateMembershipPlan
} from "../../services/membershipService";
import CustomMembershipPlanModal from "../../components/CustomMembershipPlanModal";

const CustomMembership = () => {

  const columns = [
    "Plan Name",
    "Price",
    "Nights",
    "Days",
    "Type",
    "Status",
    "Actions"
  ];

  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isApiRefresh, setIsApiRefresh] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<any>(null);

  const fetchPlans = async () => {

    try {

      const res = await getMembershipPlans();

      setPlans(res.plans || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    fetchPlans();
  }, [isApiRefresh]);

  const filteredPlans = plans.filter((plan) =>
    plan?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditingPlan(null);
    setIsModalOpen(true);
  };

  const openEditModal = (plan: any) => {
    setEditingPlan(plan);
    setIsModalOpen(true);
  };

  const handleDelete = async (plan: any) => {

    const confirmed = window.confirm(
      `Are you sure you want to delete "${plan.name}"? This cannot be undone.`
    );

    if (!confirmed) return;

    try {

      const res = await deleteMembershipPlan(plan._id);

      toast.success(res?.message || "Membership plan deleted successfully");

      setIsApiRefresh(!isApiRefresh);

    } catch (error: any) {

      console.log(error);

      toast.error(
        error?.response?.data?.message || "Failed to delete membership plan"
      );

    }

  };

  const handleToggleActive = async (plan: any) => {

    try {

      const res = await updateMembershipPlan(plan._id, { isActive: !plan.isActive });

      toast.success(res?.message || "Membership plan updated successfully");

      setIsApiRefresh(!isApiRefresh);

    } catch (error: any) {

      console.log(error);

      toast.error(
        error?.response?.data?.message || "Failed to update membership plan"
      );

    }

  };

  if (loading) {
    return <p className="p-10">Loading...</p>;
  }

  return (
    <>

      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-between items-center">

        <div className="w-full">
          <h1 className="text-2xl font-semibold text-primary">
            Custom Membership Plans
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">

          <input
            type="text"
            placeholder="Search by plan name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 text-[16px] w-full sm:w-[250px] lg:w-[350px]"
          />

          <button
            onClick={openAddModal}
            className="bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <IoAddCircleOutline size={18} />
            Add Custom Plan
          </button>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">

        <table className="w-full text-sm">

          <thead className="bg-secondary">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="text-left p-3 font-medium text-primary text-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredPlans.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-6 text-center text-gray-500 font-medium"
                >
                  <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                    <FaRegSadTear size={40} className="mb-2" />
                    <p className="text-sm font-medium">
                      No Record Found
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredPlans.map((plan: any) => (
                <tr key={plan._id} className="border-t hover:bg-gray-50 transition">

                  <td className="py-3 px-3 text-primary font-medium whitespace-nowrap">
                    {plan.name}
                  </td>

                  <td className="py-3 px-3 text-primary whitespace-nowrap">
                    ₹{plan.price}
                  </td>

                  <td className="py-3 px-3 text-primary whitespace-nowrap">
                    {plan.nights}
                  </td>

                  <td className="py-3 px-3 text-primary whitespace-nowrap">
                    {plan.days ?? "--"}
                  </td>

                  <td className="py-3 px-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        plan.isCustom
                          ? "bg-secondary text-primary"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {plan.isCustom ? "Custom" : "Predefined"}
                    </span>
                  </td>

                  <td className="py-3 px-3 whitespace-nowrap">
                    {plan.isCustom ? (
                      <button
                        onClick={() => handleToggleActive(plan)}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          plan.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {plan.isActive ? "Active" : "Inactive"}
                      </button>
                    ) : (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        Active
                      </span>
                    )}
                  </td>

                  <td className="py-3 px-3 text-primary whitespace-nowrap">
                    {plan.isCustom ? (
                      <div className="flex items-center gap-3">

                        <button
                          onClick={() => openEditModal(plan)}
                          className="flex items-center gap-1 hover:text-primary/70"
                        >
                          <MdOutlineEdit className="w-4 h-4" />
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => handleDelete(plan)}
                          className="flex items-center gap-1 text-red-600 hover:text-red-800"
                        >
                          <MdOutlineDeleteOutline className="w-4 h-4" />
                          <span>Delete</span>
                        </button>

                      </div>
                    ) : (
                      <span className="text-gray-400">--</span>
                    )}
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

      <CustomMembershipPlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editData={editingPlan}
        isApiRefresh={isApiRefresh}
        setIsApiRefresh={setIsApiRefresh}
      />

    </>
  );
};

export default CustomMembership;
