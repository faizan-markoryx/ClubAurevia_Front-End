// import { useEffect, useState } from "react";
// import { IoArrowBack } from "react-icons/io5";
// import { useNavigate, useParams } from "react-router-dom";
// import { getMembershipPlans, getUserMembership } from "../../services/membershipService";

// const ManageMembership = () => {

//   const navigate = useNavigate();
//   const { userID } = useParams();

//   const [loading, setLoading] = useState(true);

//   const [user, setUser] = useState<any>(null);

//   const [membership, setMembership] = useState("");

//   const [facilities, setFacilities] = useState<any[]>([]);

//   const fetchUserMembership = async () => {

//     try {

//       const res = await getUserMembership(userID);

//       setUser(res.user);

//       if (res.membership) {

//         setMembership(res.membership.planName);

//         setFacilities(res.membership.facilities);

//       }

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }

//   };

//   useEffect(() => {

//     if (userID) {

//       fetchUserMembership();

//       getMembershipPlans();

//     }

//   }, [userID]);


//   const handleUsedChange = (index: number, value: number) => {

//     const updated = [...facilities];

//     updated[index].used = value;

//     setFacilities(updated);

//   };


//   if (loading) {
//     return <p className="p-10">Loading...</p>;
//   }

//   return (

//     <div className="w-full bg-surface min-h-screen">

//       <div className="w-full mx-auto space-y-6">

//         {/* USER INFO */}

//         <div className="w-full flex sm:flex-row flex-col justify-between items-center gap-4">

//           <div className="w-full bg-white rounded-xl shadow-sm border p-5">

//             <h2 className="text-lg font-semibold text-primary mb-4">
//               User Information
//             </h2>

//             <div className="grid md:grid-cols-3 gap-4 text-sm">

//               <div>
//                 <p className="text-gray-500">Full Name</p>
//                 <p className="font-medium">
//                   {user?.firstName} {user?.lastName}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Email</p>
//                 <p className="font-medium">
//                   {user?.email}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Phone</p>
//                 <p className="font-medium">
//                   {user?.phone}
//                 </p>
//               </div>

//             </div>

//           </div>


//           {/* MEMBERSHIP SELECT */}

//           <div className="w-full bg-white rounded-xl shadow-sm border p-5">

//             <h2 className="text-lg font-semibold text-primary mb-4">
//               Assign Membership
//             </h2>

//             <select
//               className="border rounded-lg px-4 py-2 w-full md:w-72"
//               value={membership}
//               onChange={(e) => setMembership(e.target.value)}
//             >

//               <option value="">Select Membership</option>
//               <option>Elite Stays</option>
//               <option>Signature Escapes</option>
//               <option>Curated Destinations</option>

//             </select>

//           </div>

//         </div>


//         {/* MEMBERSHIP FACILITIES */}

//         {facilities.length > 0 && (

//           <div className="bg-white rounded-xl shadow-sm border p-5">

//             <h2 className="text-lg font-semibold text-primary mb-4">
//               Membership Facilities
//             </h2>

//             <div className="overflow-x-auto">

//               <table className="min-w-full text-sm">

//                 <thead className="bg-secondary">

//                   <tr>

//                     <th className="px-4 py-3 text-left">
//                       Facility
//                     </th>

//                     <th className="px-4 py-3 text-left">
//                       Total
//                     </th>

//                     <th className="px-4 py-3 text-left">
//                       Used
//                     </th>

//                     <th className="px-4 py-3 text-left">
//                       Remaining
//                     </th>

//                   </tr>

//                 </thead>

//                 <tbody>

//                   {facilities.map((item, index) => (

//                     <tr key={index} className="border-t">

//                       <td className="px-4 py-3">
//                         {item.name}
//                       </td>

//                       <td className="px-4 py-3">
//                         {item.total}
//                       </td>

//                       <td className="px-4 py-3">

//                         <input
//                           type="number"
//                           min="0"
//                           max={item.total}
//                           value={item.used}
//                           onChange={(e) =>
//                             handleUsedChange(index, Number(e.target.value))
//                           }
//                           className="border rounded px-2 py-1 w-16"
//                         />

//                       </td>

//                       <td className="px-4 py-3 font-medium text-primary">
//                         {item.total - item.used}
//                       </td>

//                     </tr>

//                   ))}

//                 </tbody>

//               </table>

//             </div>

//           </div>

//         )}


//         {/* ACTION BUTTONS */}

//         <div className="flex justify-between items-center">

//           <button
//             className="border border-primary text-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
//             onClick={() => navigate(-1)}
//           >
//             <IoArrowBack /> Back
//           </button>

//           <div className="flex gap-3">

//             <button className="border border-primary text-primary px-6 py-2 rounded-lg">
//               Send Welcome Letter
//             </button>

//             <button className="bg-primary text-white px-6 py-2 rounded-lg">
//               Save Changes
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>

//   );

// };

// export default ManageMembership;


import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMembershipPlans,
  getUserMembership,
  assignMembership,
  useMembershipNights,
  sendWelcomeLetter
} from "../../services/membershipService";
import MembershipFacilities from "../../components/MembershipFacilities";
import toast from "react-hot-toast";

const ManageMembership = () => {

  const navigate = useNavigate();
  const { userID } = useParams();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<any>(null);

  const [membership, setMembership]: any = useState({});
  const [currentMembership, setCurrentMembership]: any = useState({});
  const [isApiRefresh, setIsApiRefresh] = useState(false)

  const [nightsUsed, setNightsUsed] = useState(0)

  const [planID, setPlanID] = useState("");
  const [isWelcomeLetterSend, setIsWelcomeLetterSend] = useState(false);

  const [plans, setPlans] = useState<any[]>([]);

  // const [facilities, setFacilities] = useState<any[]>([]);

  const fetchUserMembership = async () => {

    try {

      const res = await getUserMembership(userID);

      setCurrentMembership(res?.membership)

      setUser(res.user);

      if (res?.membership) {
        if (res?.membership?.membershipPlan?._id) {
          setPlanID(res?.membership?.membershipPlan?._id)
        } else {
          if (res.membership) {

            setMembership(res.membership.planName);
            setPlanID(res.membership.planID);

            // setFacilities(res.membership.facilities);

          }
        }
      }


    } catch (error) {

      console.log(error);

    }
  };

  const fetchPlans = async () => {

    try {

      const res = await getMembershipPlans();

      setPlans(res.plans);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    if (userID) {

      fetchUserMembership();
      fetchPlans();

    }

  }, [userID, isWelcomeLetterSend, isApiRefresh]);


  const handlePlanChange = (e: any) => {

    const selectedID = e.target.value;

    setPlanID(selectedID);

    const selectedPlan = plans?.find((p) => p?._id === selectedID);

    if (selectedPlan) {

      setMembership(selectedPlan);

      // const formattedFacilities = selectedPlan?.facilities?.map((f: any) => ({
      //   name: f.name,
      //   total: f.total,
      //   used: 0
      // }));

      // setFacilities(formattedFacilities);
    }

  };


  // const handleUsedChange = (index: number, value: number) => {

  //   const updated = [...facilities];

  //   updated[index].used = value;

  //   setFacilities(updated);

  // };

  // console.log("currentMembership", currentMembership)

  const handleSave = async () => {
    try {
      const payload = {
        userId: userID,
        planId: planID,
        pricePaid: membership?.price
      };

      if (currentMembership?.membershipPlan?._id !== payload?.planId) {
        setIsApiRefresh(true)
        await assignMembership(payload);
        setIsApiRefresh(false)
      }

      // alert("Membership updated successfully");

      if (currentMembership?._id) {
        setIsApiRefresh(true)
        const userNights = {
          membershipId: currentMembership?._id,
          nightsUsed: nightsUsed
        }

        await useMembershipNights(userNights).then((res) => {
          setIsApiRefresh(false)
          if (res?.success) {
            setNightsUsed(0)
            toast.success("Membership update successfully")
          } else {
            toast.error(res?.message)
          }
          // toast.success(res?.message)
        }).catch((err) => {
          setIsApiRefresh(false)
          console.log("err", err)
        })
      }

    } catch (error) {
      setIsApiRefresh(false)
      console.log(error);

      toast.error("Failed to update membership")
      // alert("Failed to update membership");

    }

  };

  // console.log("user", user)
  // console.log("currentMembership", currentMembership)

  const handleSendWelcomeLetter = async () => {
    try {
      setIsWelcomeLetterSend(true)
      const payload = {
        name: `${user?.firstName} ${user?.lastName}`,
        email: user?.email,
        phone: user?.phone,
        membershipName: currentMembership?.membershipPlan?.name,
        membershipPrice: currentMembership?.membershipPlan?.price,
        memberId: user?.memberId
      }

      await sendWelcomeLetter(payload).then((res) => {
        toast.success(res?.message)
      })

      setIsWelcomeLetterSend(false)

    } catch (error) {
      setIsWelcomeLetterSend(false)
    }
  }

  if (loading) {
    return <p className="p-10">Loading...</p>;
  }
  return (

    <div className="w-full bg-surface min-h-screen">
      {/* ACTION BUTTONS */}
      <div className="flex justify-between items-center mb-6">

        <button
          className="border border-primary text-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack /> Back
        </button>

        <div className="flex gap-3">

          {
            user == null ? <></> :
              user?.welcomeLetter ? <></> : <>
                <button className={`border border-primary text-primary px-6 py-2 rounded-lg cursor-pointer ${(currentMembership?._id || isWelcomeLetterSend) ? "opacity-100" : "opacity-60"}`} disabled={!currentMembership?._id || isWelcomeLetterSend} onClick={handleSendWelcomeLetter}>
                  {isWelcomeLetterSend ? "Sending..." : "Send Welcome Letter"}
                </button>
              </>
          }

          <button
            onClick={handleSave}
            className="bg-primary text-white px-6 py-2 rounded-lg"
          >
            Save Changes
          </button>

        </div>

      </div>
      <div className="w-full mx-auto space-y-6">

        {/* USER INFO */}
        <div className="w-full flex sm:flex-row flex-col justify-between items-center gap-4">
          <div className="w-full bg-white rounded-xl shadow-sm border p-5">

            <h2 className="text-lg font-semibold text-primary mb-4">
              User Information
            </h2>

            <div className="grid md:grid-cols-3 gap-4 text-sm">

              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="font-medium">
                  {user?.firstName} {user?.lastName}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">
                  {user?.email}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">
                  {user?.phone}
                </p>
              </div>

            </div>

          </div>
          {/* MEMBERSHIP SELECT */}
          <div className="w-full bg-white rounded-xl shadow-sm border p-5">

            <h2 className="text-lg font-semibold text-primary mb-4">
              Assign Membership
            </h2>

            <select
              className="border rounded-lg px-4 py-2 w-full md:w-72"
              value={planID}
              onChange={handlePlanChange}
            >

              <option value="">Select Membership</option>

              {plans.map((plan) => (

                <option key={plan._id} value={plan._id}>
                  {plan.name} - {plan.price}
                </option>

              ))}

            </select>

          </div>
        </div>

        <div className="w-full flex sm:flex-row flex-col justify-between items-center gap-4">
          {/* MEMBERSHIP FACILITIES */}
          <div className="w-full">
            {
              currentMembership?._id ? <>
                <MembershipFacilities membership={currentMembership} nightsUsed={nightsUsed} setNightsUsed={setNightsUsed} />
              </> : <></>
            }
          </div>
          <div className="w-full h-[400px]">

          </div>
        </div>

        {/* {facilities?.length > 0 && ( */}
        {/* <div className="bg-white rounded-xl shadow-sm border p-5">

            <h2 className="text-lg font-semibold text-primary mb-4">
              Membership Facilities
            </h2>

            <div className="overflow-x-auto">

              <table className="min-w-full text-sm">

                <thead className="bg-secondary">

                  <tr>

                    <th className="px-4 py-3 text-left">
                      Facility
                    </th>

                    <th className="px-4 py-3 text-left">
                      Total
                    </th>

                    <th className="px-4 py-3 text-left">
                      Used
                    </th>

                    <th className="px-4 py-3 text-left">
                      Remaining
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {facilities?.map((item, index) => (

                    <tr key={index} className="border-t">

                      <td className="px-4 py-3">
                        {item.name}
                      </td>

                      <td className="px-4 py-3">
                        {item.total}
                      </td>

                      <td className="px-4 py-3">

                        <input
                          type="number"
                          min="0"
                          max={item.total}
                          value={item.used}
                          onChange={(e) =>
                            handleUsedChange(index, Number(e.target.value))
                          }
                          className="border rounded px-2 py-1 w-16"
                        />

                      </td>

                      <td className="px-4 py-3 font-medium text-primary">
                        {item.total - item.used}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div> */}
        {/* )} */}

      </div>
    </div>

  );

};

export default ManageMembership;