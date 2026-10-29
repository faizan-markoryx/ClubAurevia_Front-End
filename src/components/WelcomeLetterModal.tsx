import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface WelcomeLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  membership: any;
  onSave: (payload: any, sendEmail: boolean) => Promise<void>;
  isSubmitting: boolean;
}

const WelcomeLetterModal: React.FC<WelcomeLetterModalProps> = ({
  isOpen,
  onClose,
  user,
  membership,
  onSave,
  isSubmitting
}) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    coApplicant: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: ""
  });

  const [membershipData, setMembershipData] = useState({
    tenure: "3 Years",
    totalNights: 0,
    pricePaid: 0,
    mealPlan: "Breakfast and Dinner",
    validityFrom: "",
    validityTo: "",
    roomCapacity: "2 Adult, 2 Kids below 12 years or 3 Adult + 1 Room"
  });

  const formatDateForInput = (dateString: any) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "";
    return d.toISOString().split("T")[0];
  };

  useEffect(() => {
    if (user) {
      setUserData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        coApplicant: user.coApplicant || "",
        addressLine1: user.addressLine1 || "",
        addressLine2: user.addressLine2 || "",
        city: user.city || "",
        state: user.state || "",
        postalCode: user.postalCode || "",
        country: user.country || ""
      });
    }

    if (membership) {
      setMembershipData({
        tenure: membership.tenure || "3 Years",
        totalNights: membership.totalNights || 0,
        pricePaid: membership.pricePaid || membership.membershipPlan?.price || 0,
        mealPlan: membership.mealPlan || "Breakfast and Dinner",
        validityFrom: formatDateForInput(membership.validityFrom),
        validityTo: formatDateForInput(membership.validityTo),
        roomCapacity:
          membership.roomCapacity ||
          "2 Adult, 2 Kids below 12 years or 3 Adult + 1 Room"
      });
    }
  }, [user, membership, isOpen]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMembershipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMembershipData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (sendEmail: boolean) => {
    onSave(
      {
        userId: user?._id,
        membershipId: membership?._id,
        userData,
        membershipData
      },
      sendEmail
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Smooth Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={!isSubmitting ? onClose : undefined}
      />

      {/* Modal Card with scale transition */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl z-10 overflow-hidden transform transition-all duration-300 scale-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Welcome Letter & Membership Details
            </h3>
            <p className="text-xs text-gray-500">
              Review or customize the verified details before saving or sending.
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* SECTION 1: USER DETAILS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary border-b pb-2 mb-4">
              1. Customer Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Member ID <span className="text-xs text-gray-400">(Read-only)</span>
                </label>
                <input
                  type="text"
                  value={user?.memberId || "--"}
                  disabled
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Contact Number <span className="text-xs text-gray-400">(Read-only)</span>
                </label>
                <input
                  type="text"
                  value={user?.phone || "--"}
                  disabled
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Co-applicant Name
                </label>
                <input
                  type="text"
                  name="coApplicant"
                  placeholder="e.g. Spouse / Relative"
                  value={userData.coApplicant}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Address Line 1
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={userData.addressLine1}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={userData.addressLine2}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={userData.city}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={userData.state}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={userData.postalCode}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={userData.country}
                  onChange={handleUserChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: MEMBERSHIP SPECIFIC DETAILS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary border-b pb-2 mb-4">
              2. Membership Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Membership Tenure
                </label>
                <input
                  type="text"
                  name="tenure"
                  value={membershipData.tenure}
                  placeholder="e.g. 3 Years"
                  onChange={handleMembershipChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Total Nights
                </label>
                <input
                  type="number"
                  name="totalNights"
                  value={membershipData.totalNights}
                  onChange={handleMembershipChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Membership Fees (₹)
                </label>
                <input
                  type="number"
                  name="pricePaid"
                  value={membershipData.pricePaid}
                  onChange={handleMembershipChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Meal Plan
                </label>
                <input
                  type="text"
                  name="mealPlan"
                  value={membershipData.mealPlan}
                  placeholder="Breakfast and Dinner"
                  onChange={handleMembershipChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Validity: From Date
                </label>
                <input
                  type="date"
                  name="validityFrom"
                  value={membershipData.validityFrom}
                  onChange={handleMembershipChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Validity: To Date
                </label>
                <input
                  type="date"
                  name="validityTo"
                  value={membershipData.validityTo}
                  onChange={handleMembershipChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>

              <div className="md:col-span-3">
                <label className="block text-gray-600 font-medium mb-1">
                  Room Capacity
                </label>
                <input
                  type="text"
                  name="roomCapacity"
                  value={membershipData.roomCapacity}
                  placeholder="2 Adult, 2 Kids below 12 years or 3 Adult + 1 Room"
                  onChange={handleMembershipChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 border-t">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSubmit(false)}
            className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save & Close"}
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSubmit(true)}
            className="px-6 py-2 rounded-lg bg-primary text-white hover:opacity-90 shadow-md transition disabled:opacity-50"
          >
            {isSubmitting ? "Processing..." : "Save & Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeLetterModal;