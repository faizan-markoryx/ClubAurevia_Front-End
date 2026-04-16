import { useEffect, useState } from "react"
import { getUserMembership } from "../services/membershipService"
import { getAllTripInquiry } from "../services/tripInquiryService"

import StatCard from "../components/Admin/StatCard"
import CustomerMembershipDetails from "../components/CustomerMembershipDetails"
import AddTripInquiryModal from "../components/AddTripInquiryModal"
import WelcomeLetterActions from "../components/WelcomeLetterActions"
import UserRecentPayment from "./admin-pages/UserRecentPayment"
import { FaRegSadTear } from "react-icons/fa"

const CustomerDashboard = () => {
  const userData = localStorage.getItem("userData");
  const parseUserData = userData ? JSON.parse(userData) : {};

  const [currentMembership, setCurrentMembership]: any = useState({});
  const [tripInquiriesData, setTripInquiriesData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isApiRefresh, setIsApiRefresh] = useState(false);
  const [currentUserDetails, setCurrentUserDetails]: any = useState({});

  const fetchUserMembership = async () => {
    const userID = parseUserData?.userId

    try {

      const res = await getUserMembership(userID);

      setCurrentMembership(res?.membership);
      setCurrentUserDetails(res?.user)


    } catch (error) {

      console.log(error);

    }
  };

  const fetchAllTripInquiry = async () => {
    const userID = parseUserData?.userId

    try {

      const res = await getAllTripInquiry(userID);

      setTripInquiriesData(res?.data)

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchUserMembership();
    fetchAllTripInquiry();
  }, [isApiRefresh]);

  return (
    <>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-primary">
          Dashboard
        </h1>

        {
          currentUserDetails?.welcomeLetter ? <>
            <WelcomeLetterActions user={parseUserData} membership={currentMembership} />
          </> : <></>
        }
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mb-6">

        <StatCard
          title="Total Inquiries"
          value="524"
        />

        <StatCard
          title="Total Amount Spend"
          value="₹8,45,000"
        />

        {/* <div className="w-full flex sm:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full bg-white rounded-xl shadow-sm border p-5">

            <h2 className="text-lg font-semibold text-primary mb-4">
              User Information
            </h2>

            <div className="grid md:grid-cols-3 gap-4 text-sm">

              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="font-medium">
                  {`user?.firstName`}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">
                  {`user?.email`}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">
                  {`user?.phone`}
                </p>
              </div>

            </div>

          </div>
        </div> */}

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mb-6">
        {/* MEMBERSHIP FACILITIES */}
        <div className="">
          <CustomerMembershipDetails membership={currentMembership} />
        </div>
        <div className="">
          <UserRecentPayment />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-primary">
            Trip Inquiries
          </h2>
          <button className="px-4 py-2 border border-primary rounded-lg hover:border-transparent hover:bg-primary hover:text-white" onClick={() => setModalOpen(true)}>Add Trip Inquiries</button>
        </div>
        <div className="overflow-x-auto">

          <table className="min-w-full text-sm">

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

              {tripInquiriesData?.length === 0 ? (
                <tr>
                  <td colSpan={9}>
                    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                      {/* Icon */}
                      <FaRegSadTear size={40} className="mb-2" />

                      <p className="text-sm font-medium">
                        No Record Found
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                tripInquiriesData?.map((item: any, index: number) => (

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition"
                  >

                    <td className="px-4 py-3 whitespace-nowrap">
                      {index + 1}
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
      </div>

      <AddTripInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        setIsApiRefresh={setIsApiRefresh}
        isApiRefresh={isApiRefresh}
      />
    </>
  )
}

export default CustomerDashboard