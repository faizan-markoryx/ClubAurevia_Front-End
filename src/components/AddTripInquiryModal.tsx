import { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { createTripInquiry } from "../services/tripInquiryService";
import "react-datepicker/dist/react-datepicker.css";

const AddTripInquiryModal = ({ isOpen, onClose, setIsApiRefresh, isApiRefresh }: any) => {

  const userData = localStorage.getItem("userData");
  const parseUserData = userData ? JSON.parse(userData) : {};

  console.log("parseUserData", parseUserData)

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    memberId: "",
    membershipName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    numberOfAdults: "",
    numberOfChildren: "",
    specialRequest: ""
  });

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleChange = (e: any) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    const formattedDate =
      startDate && endDate
        ? `${dayjs(startDate).format("DD MMMM YYYY")} - ${dayjs(endDate).format(
          "DD MMMM YYYY"
        )}`
        : "";

    const data = {
      ...formData,
      memberId: parseUserData?.memberId,
      membershipName: parseUserData?.activeMembership,
      travelDate: formattedDate
    };

    try {

      setLoading(true);

      const res = await createTripInquiry(data);

      console.log("Inquiry Created:", res);

      // reset form
      setFormData({
        memberId: "",
        membershipName: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        destination: "",
        numberOfAdults: "",
        numberOfChildren: "",
        specialRequest: ""
      });

      setDateRange([null, null]);

      setIsApiRefresh(!isApiRefresh)

      onClose();

    } catch (error) {

      console.error("Error creating inquiry:", error);

    } finally {

      setLoading(false);

    }

  };

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">

      <div className="flex min-h-full items-start justify-center p-4 sm:p-6">

        <div className="bg-white rounded-xl w-full max-w-2xl shadow-lg">

          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b">

            <h2 className="text-xl font-semibold">
              Add Trip Inquiry
            </h2>

            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>

          </div>

          {/* Body */}
          <div className="p-5 max-h-[83vh] overflow-y-auto">

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

              <div>
                <label className="text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Number Of Adults</label>
                <input
                  type="number"
                  name="numberOfAdults"
                  value={formData.numberOfAdults}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Number Of Children</label>
                <input
                  type="number"
                  name="numberOfChildren"
                  value={formData.numberOfChildren}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
              </div>

              <div className="md:col-span-2">

                <label className="text-sm">
                  Check In - Check Out
                </label>

                <DatePicker
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update: any) => setDateRange(update)}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  placeholderText="Select travel dates"
                />

              </div>

              <div className="md:col-span-2">

                <label className="text-sm">
                  Destination
                </label>

                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />

              </div>

              <div className="md:col-span-2">

                <label className="text-sm">
                  Special Request
                </label>

                <textarea
                  rows={4}
                  name="specialRequest"
                  value={formData.specialRequest}
                  placeholder="Enter special request"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border mt-1"
                />

              </div>

              <div className="md:col-span-2 flex justify-end gap-3 pt-3">

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-primary text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
                >

                  {loading ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Saving...
                    </>
                  ) : (
                    "Save Inquiry"
                  )}

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
};

export default AddTripInquiryModal;